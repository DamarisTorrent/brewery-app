import React from 'react'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react'
import FavoritesContext, { FavoritesProvider } from '../context/FavoritesContext'

import Link from '@mui/material/Link';


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
  
  
  const breweryType = brewery_type.toLowerCase().replace(/\b[a-z]/g, function(letter) 
    {
      return letter.toUpperCase()
    })

  const handleClick = (prev) => {

    addFavorite(props)
    setLike(!prev)

  }

  return (
    <div>

      <Card sx={{ maxWidth: 345 }}>
     
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} >
              R
            </Avatar>
          }
          
          title={name}
          subheader={breweryType}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {street}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city + ', ' +state + ' ' + postal_code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phone}
          </Typography>
        </CardContent>

        <CardActions >
          <IconButton onClick={() => handleClick()}>
            <FavoriteIcon/>
          </IconButton>
        </CardActions>

      </Card>
    </div>
  )
}

export default BrewCard