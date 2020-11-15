import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className ='home__container'>
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />

            <div className="home__row">
                <Product 
                id = "12543"
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />
                <Product
                id = "125431" 
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />            </div>

            <div className="home__row">
            <Product 
            id = "125432"
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />
                 <Product 
                 id = "125433"
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />
                 <Product 
                 id = "125434"
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />
            </div> 
            
            <div className="home__row">
            <Product 
            id = "125435"
                title = "so here will add the product name and the product detail with some details okay"
                pricing={99.99}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={4} />
            </div>     
                                 
            </div>
            
        </div>
    );
}

export default Home
