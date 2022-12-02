import React from 'react'
import { Banner } from '../Components/Banner'
import { Carrousell } from '../Components/Carrousell'


export const Home = () => {
  const styles = {
    div : {
      backgroundColor : '#F5F5F5'
    }
  }
  return (
    <div style={styles.div}>
      
      <Banner />
      <Carrousell  title={'Ofertas'}/>
      <Carrousell  title={'Vinos'}/>
    </div>
    
  )
}


/**
 * echo "# beer-shop" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cheaguz/beer-shop.git
git push -u origin main
 */
