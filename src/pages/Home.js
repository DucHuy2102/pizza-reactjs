import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div>
            <div className='home' style={{ backgroundImage: `url(${BannerImg}` }}>
                <div className='headerContainer'>
                    <h1>Huy's Pizza</h1>
                    <p>Hope you like it!</p>
                    <Link to='/menu'>
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
