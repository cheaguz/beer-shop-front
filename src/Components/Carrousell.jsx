import React from 'react';
import { imagenesCarrousell } from '../assets/mock-banners';
import { Text,Container } from '@chakra-ui/react';

export const Carrousell = ({title,}) => {
    const styles = {
        div : {
            marginTop : '2%',
            height : '300px',
    
        },
        miniBox : {
            width : '202px',
            height : '202px',
            border : '0.5px solid rgb(156, 156, 156)'
            
        },
        grandBox : {
            display : 'flex',
            justifyContent : 'space-around',
           backgroundColor : 'white'
        }
    }
  return (
    <div style={styles.div}>
        <Text
            fontSize={36}
        >{title}</Text>
        <div style={styles.grandBox}>
            {imagenesCarrousell.map(img => (
                <div style={styles.miniBox} id={img.id}>
                     <img src={img.img} className='img-carrousell' />
                </div>
            ))}
           
        </div>
    </div>
  )
}
