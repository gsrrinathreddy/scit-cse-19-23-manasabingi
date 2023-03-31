

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg',
    title: 'Breakfast',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  
  
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    
    cols: 2,
  },
  
  
    
 
  {
    img: 'https://www.shutterstock.com/image-photo/badminton-racket-shuttlecock-motion-sport-260nw-1592944909.jpg',
    title: 'badminton',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://mcdn.wallpapersafari.com/medium/73/39/C2wfxR.jpg',
    title: 'chess',
    
  },
  {
    img: 'https://thumbs.dreamstime.com/b/gardening-gardener-planting-pansy-gardening-gardener-planting-pansy-flowerpots-tools-110382267.jpg',
    title: 'gardening',
    
  },
  
];