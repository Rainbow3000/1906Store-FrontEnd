import React from 'react'
import './home.scss'
import Feature from '../../components/feature/Feature'
import Horizontal from '../../components/horizontal/Horizontal'
import ProductList from '../../components/productList/ProductList'
import NewsLetter from '../../components/newsletter/NewsLetter'
import FilterProduct from '../../components/filterProduct/FilterProduct'
const Home = () => {
    return <>
         <Feature/> 
         <Horizontal/>
         <FilterProduct/>
        <div className='home-area-product'>
            <div className="home-area-product-wraper">
                <ProductList/>
            </div>
        </div>
        <NewsLetter/>
    </> 

        
}

export default Home