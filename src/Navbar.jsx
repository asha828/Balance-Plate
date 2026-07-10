import React from 'react';
import './Navbar.css';
import homeIcon from './Images/home.png';
import healthIcon from './Images/cardiology.png';
import recipeIcon from './Images/cookbook.png';
import groceryIcon from './Images/grocery-cart.png';

export default function Navbar({ setPage }) {
    return (

        <div className='sidebar'>

            <button onClick={() => setPage("home")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Home
                <img src={homeIcon} alt="Home Icon" width="24" height="24" />
            </button>
            <button onClick={() => setPage("health")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>My Health
                <img src={healthIcon} alt="Home Icon" width="26" height="26" />
            </button>
            <button onClick={() => setPage("recipes")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} >Recipes
                <img src={recipeIcon} alt="Home Icon" width="24" height="24" />
            </button>
            <button onClick={() => setPage("groceries")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Groceries
                <img src={groceryIcon} alt="Home Icon" width="24" height="24" />
            </button>


        </div>


    );


}

