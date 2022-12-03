import React from 'react';
import { Card } from './Card';
import { Container } from '@chakra-ui/react';
import { imagenesCarrousell } from '../assets/mock-banners';

export const CardContainer = () => {
    const styles = {
        div: {
            height: '600px',
            borderRadius : '2%',
            backgroundColor : 'white'
        }
    }
    return (
        <>
       <div style={{textAlign:'center',fontSize:'26px'}}> <h1>Mas vendidos</h1> </div>
        <Container
            maxW='1000px'
            style={styles.div}
            display='grid'
            gridTemplateColumns={' repeat(3, 1fr)'}
            centerContent={true}

        >
          
            
            {imagenesCarrousell.map((card, id) => (
                <Card id={id} image={card} />
            ))}
            

        </Container>
        </>
    )
}
