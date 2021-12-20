import React from 'react';
import Slider from './Slider';
import Divider from '../components/Divider';
import Products from './Products';

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <Divider/>
            <Products/>            
        </div>
    )
}

export default HomePage;
