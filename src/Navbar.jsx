import './Navbar.css';
import homeIcon from './Images/home.png';
import healthIcon from './Images/heart-rate.png';
import recipeIcon from './Images/recipe-book.png';
import groceryIcon from './Images/grocery-cart.png';

export default function Navbar({ setPage }) {
    return (

        <div className='sidebar'>

            <button onClick={() => setPage("home")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img src={homeIcon} alt="Home Icon" width="24" height="24" />
                Home
            </button>
            <button onClick={() => setPage("health")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img src={healthIcon} alt="Home Icon" width="26" height="26" />
                My Health
            </button>
            <button onClick={() => setPage("recipes")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img src={recipeIcon} alt="Home Icon" width="24" height="24" />
                Recipes
            </button>
            <button onClick={() => setPage("groceries")}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <img src={groceryIcon} alt="Home Icon" width="24" height="24" />
                Groceries
            </button>


        </div>


    );


}

