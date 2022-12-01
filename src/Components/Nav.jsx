import React from 'react';
import { Box, Link} from '@chakra-ui/react';



const categories = [
    {
        id : 1,
        name: 'Cervezas'
    },
    {
        id : 2,
        name : 'Vinos'
    },
    {
        id : 3 ,
        name : 'Accesorios'
    },
    {
        id : 4 ,
        name : 'Espumantes'
    },
    {
        id : 5,
        name : 'Vasos'
    },
    {
        id : 6 ,
        name : 'Licores'
    },
    {
        id : 7,
        name : 'Aperitivos'
    },
    {
        id : 8 ,
        name : 'Embutidos'
    },
    {
        id : 9,
        name : 'Otros'
    }
]

const styles = {
    span : {
        marginLeft : '1%'
    },
    divider : {
        color : 'white',
        marginLeft : '6px',
        
    }
}

export const Nav = () => {
  return (
    <Box
    w={'100%'}
    bg='#C7C1C1'
    color={'black'}
    p={2}
    display='flex'
    justifyContent={'space-around'}
    >
        <div style={{width:'30%'}}>
            <h1 style={styles.span} >Categorias</h1>
        </div>
        <div style={{width:'70%'}}>
            {categories.map(cat => (
                <>
                <Link id={cat.id} style={styles.span} href='#'> {cat.name} </Link>
            <span style={styles.divider}> | </span>
            </>
        ))}
        </div>
       
        
    </Box>
  )
}
