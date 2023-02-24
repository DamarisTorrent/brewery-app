import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react'
import FavoritesContext from '../context/FavoritesContext'
import logo from './beer.png'
import { useLocation } from "react-router-dom"
import Link from '@mui/material/Link'





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
  
  //Check to see if the brewcard is being called from favorites, and if so hide like/heart button
  let isFavorites = false
  
  if (location.pathname === '/favorites') {
    isFavorites = true
  }
  
  //Check to see if the country is United States, to create boolean to hide State on card
  let isUs = false
  if (country === 'United States') {
    isUs = true
  }
  console.log(country)
    console.log(isUs)
  // Change the brewery type first letter to uppercase
  const breweryType = brewery_type.toLowerCase().replace(/\b[a-z]/g, function(letter) 
    {
      return letter.toUpperCase()
    })

  // Handle the like/heart button click, add a favorite to the favorites list in FavoritesContext
  // Set Like boolean to change the color of the heart when the user clicks on it
  const handleClick = (prev) => {
    if (!like) {
    addFavorite(props)
    setLike(!prev)
    }
  }

  return (
    <div>

      <Card sx={{ width: 375, Height: 300}}>
     
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
            {city}
          </Typography>
          {/* Only display state if the country is United States */}
          {isUs ?  <Typography variant="body2" color="text.secondary">
            {state}
          </Typography>: <span></span>}
         
          <Typography variant="body2" color="text.secondary">
            {postal_code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country}
          </Typography>
          <br></br>
          <Link target="_blank" href={website_url}  >
                <Typography variant='button'  fontWeight='bold' fontSize={14}>
                  Hit the bar!
                </Typography>
              </Link>
        </CardContent>

        <CardActions >
          <IconButton onClick={() => handleClick()} style={{color:like===true?"#ffc169":""}}>
          {/* Do not display the heart if the calling page is the favorites page */}
            {!isFavorites ? <FavoriteIcon/> : <span></span>}
          </IconButton>
          
        </CardActions>

      </Card>
    </div>
  )
}

export default BrewCard