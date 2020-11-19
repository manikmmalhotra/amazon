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
                title = "Lenovo Legion 5i 10th Gen Intel Core i5 15.6 inch Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg), 82AU00B5IN"
                pricing={73990}
                image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
                rating={4} />
                <Product
                id = "125431" 
                title = "HP Pavilion x360 Core i7 8th Gen 14-inch Touchscreen 2-in-1 FHD Thin and Light Laptop (16GB/512GB SSD/Windows 10/MS Office/2GB Graphics/Mineral Silver/1.59 kg), 14- dh0045TX"
                pricing={82990}
                image="https://images-na.ssl-images-amazon.com/images/I/712apOL4JaL._SL1500_.jpg"
                rating={3} />            </div>

            <div className="home__row">
            <Product 
            id = "125432"
                title = "HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1-inch FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX"
                pricing={73990}
                image="https://images-na.ssl-images-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
                rating={5} />
                 <Product 
                 id = "125433"
                title = "Fossil Gen 5(44mm, black) Carlyle Silicone Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4025"
                pricing={22995}
                image="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UL1500_.jpg"
                rating={4} />
                 <Product 
                 id = "125434"
                title = "Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX Nikkor 18-55mm f/3.5-5.6G VR & AF-P DX Nikkor 70-300mm f/4.5-6.3G ED (Black) 16 GB Class 10 SD Card and DSLR Bag"
                pricing={46895}
                image="https://images-na.ssl-images-amazon.com/images/I/61A4tg5IFhL._SL1000_.jpg"
                rating={3} />
            </div> 
            
            <div className="home__row">
            <Product 
            id = "125435"
                title = "OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                pricing={15333}
                image="https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg"
                rating={4} />
            </div>     
                                 
            </div>
            
        </div>
    );
}

export default Home
