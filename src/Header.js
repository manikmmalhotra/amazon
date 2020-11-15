import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
                 <img 
            className='header_logo'
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />

            </Link>
           
            <div className='header__search'>
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className='header__options'>
                    <span className='header__optionlineone'>Hello guest</span>
                    
                    <span className='header__optionlinetwo'>Sign In</span>
                </div>
                
                <div className='header__options'>

                <span className='header__optionlineone'>Returns</span>
                    
                    <span className='header__optionlinetwo'>& Orders</span>
                </div>                
                <div className='header__options'>

                <span className='header__optionlineone'>Your</span>                   
                    <span className='header__optionlinetwo'>Prime</span>
                </div>
                <Link to="./checkout">
                 <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionlinetwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>

             

            </div>
        </div>
    );
}

export default Header
