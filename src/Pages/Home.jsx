import React from 'react'
import { Banner } from '../Components/Banner'
import { CardContainer } from '../Components/CardContainer'
import { Carrousell } from '../Components/Carrousell'
import { Footer } from '../Components/Footer'


export const Home = () => {
  const styles = {
    div : {
      backgroundColor : '#F5F5F5',
     
     
    }
  }
  return (
    <div style={styles.div}>
      
      <Banner />
      <Carrousell  title={'Ofertas'}/>
      <CardContainer />
      <Carrousell  title={'Vinos'}/>
      <Carrousell  title={'Cervezas'}/>

      <Footer />
      
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
