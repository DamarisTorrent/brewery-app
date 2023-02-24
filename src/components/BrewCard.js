import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react'
import FavoritesContext, { FavoritesProvider } from '../context/FavoritesContext'
import logo from './beer.png'
import { useLocation } from "react-router-dom"


function BrewCard( props ) {
  
  const  {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    country,
    phone,
    website_url
  } = props
  
  const [like, setLike] = useState(false)
  const {addFavorite} = useContext(FavoritesContext)
  
  const location = useLocation()
  
  let isFavorites = false
  
  if (location.pathname == '/favorites') {
    isFavorites = true
  }
  
  const breweryType = brewery_type.toLowerCase().replace(/\b[a-z]/g, function(letter) 
    {
      return letter.toUpperCase()
    })

  const handleClick = (prev) => {
    if (!like) {
    addFavorite(props)
    setLike(!prev)
    }
  }

  return (
    <div>

      <Card sx={{ width: 325, maxHeight: 250}}>
     
        <CardHeader
          avatar={
            <Avatar src={logo}/>
          }
          
          title={name}
          subheader={breweryType}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" data-testid='street'>
            {street}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city + ', ' +state + ' ' + postal_code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
          {/* <Button href={website_url}  variant="outlined" target="_blank">Link </Button> */}
        </CardContent>

        <CardActions >
          <IconButton onClick={() => handleClick()} style={{color:like===true?"#ffc169":""}}>
            {console.log(isFavorites)}
            {!isFavorites ? <FavoriteIcon/> : <span></span>}
          </IconButton>
          
        </CardActions>

      </Card>
    </div>
  )
}

export default BrewCard