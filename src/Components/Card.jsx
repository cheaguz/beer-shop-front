import React from 'react'

export const Card = ({image}) => {
  const styles = {
    div : {
      width : '202px',
      height : '270px',
      border : '0.5px solid black',
      textAlign : 'center',
      borderRadius : '12%',
      backgroundColor : 'rgb(230, 230, 230)'
    }
  }

  return (
    <div style={styles.div}>
      <img src={image.img} className='img-card'/>
      <h1>Cerveza 500cc</h1>
      <h2>$ 500</h2>
    </div>
  )
}
