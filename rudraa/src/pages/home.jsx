import React from 'react'
import Slider from '../component/slider/slider'
import ProductSection from '../component/ProductSection/ProductSection'
import ProductWallpaper from '../component/ProductWallpaper/ProductWallpaper'

const home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
        <ProductSection/>
        <ProductWallpaper/>
    </div>
  )
}

export default home