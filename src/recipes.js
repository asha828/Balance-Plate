import quinoaSalad from './Images/Quinoa-Salad.jpg';
import LemonHerb from './Images/Lemon-Herb-Chicken-Bowl.jpg';
import shrimpStirFry from './Images/images.jpeg';
import pastaMushroom from './Images/PastaMushroom.jpg';
import jollofRice from './Images/Seven-Spice Jollof-Rice.jpg';
import GreekChickpeaBowl from './Images/GreenGoddessChickpeaBowl.jpg';
import ChickenDillOrzo from './Images/High-Protein-Dill-Chicken.jpg';
import GarlicTofu from './Images/air-fried-tofu-6.jpg';
import LemonHalibut from './Images/Grilled-Halibut-with-Lemon-Herb-Butter.jpg';
import MoroccanVegtables from './Images/moroccan_vegetables.jpg';
import GreekChickenLemonRice from './Images/One-Pot-Greek-Chicken-and-Lemon-Rice.jpg';
import LambSoup from './Images/hearty_lamb_soup.jpg';



const recipes = [
    {
        id: 1,
        title: "Quinoa Salad",
        tags: [
            "gluten-free",
            "low-gi",
            "vegetarian"
        ],
        time: "20 mins",
        calories: "320 cal",
        image: quinoaSalad,
    },
    {
        id: 2,
        title: "Lemon Herb Chicken w/ Quinoa Salad & Grilled Zucchini",
        tags: [
            "gluten-free",
            "low-gi"
        ],
        time: "40 mins",
        calories: "450 cal",
        image: LemonHerb,
    },
    {
        id: 3,
        title: "Shrimp and Vegetable Stir Fry",
        tags: [
            "low-sodium",
            "gut-friendly"
        ],
        time: "30 mins",
        calories: "300 cal",
        image: shrimpStirFry,
    },
    {
        id: 4,
        title: "Linguine with Creamy Mushroom Sauce",
        tags: [
            "low-sodium",
            "vegetarian"
        ],
        time: "40 mins",
        calories: "479 cal",
        image: pastaMushroom,
    },
    {
        id: 5,
        title: "Seven-Spice Jollof Rice",
        tags: [
            "gluten-free",
            "low-gi"
        ],
        time: "30 mins",
        calories: "193 cal",
        image: jollofRice,
    },
    {
        id: 6,
        title: "Green Goddess Chickpea Bowl",
        tags: [
            "vegetarian",
            "gut-friendly"
        ],
        time: "20 mins",
        calories: "536 cal",
        image: GreekChickpeaBowl,
    },
    {
        id: 7,
        title: "High-Protein Dill Chicken Orzo",
        tags: [
            "gut-friendly"
        ],
        time: "30 mins",
        calories: "527 cal",
        image: ChickenDillOrzo,
    },
    {
        id: 8,
        title: "Honey Garlic Air Fryer Tofu",
        tags: [
            "gluten-free",
            "vegetarian"
        ],
        time: "30 mins",
        calories: "300 cal",
        image: GarlicTofu,
    },
    {
        id: 9,
        title: "Grilled Halibut with Lemon Herb Butter",
        tags: [
            "low-sodium",
            "gluten-free"
        ],
        time: "20 mins",
        calories: "300 cal",
        image: LemonHalibut,
    },
    {
        id: 10,
        title: "Moroccan vegetables with couscous",
        tags: [
            "low-gi",
            "vegetarian"
        ],
        time: "40 mins",
        calories: "380 cal",
        image: MoroccanVegtables,
    },
    {
        id: 11,
        title: "One Pot Greek Chicken and Lemon Rice",
        tags: [
            "low-sodium",
            "low-gi"
        ],
        time: "30 mins",
        calories: "300 cal",
        image: GreekChickenLemonRice,
    },
    {
        id: 12,
        title: "Hearty lamb & barley soup",
        tags: [
            "low-sodium",
            "gut-friendly"
        ],
        time: "25 mins",
        calories: "400 cal",
        image: LambSoup,
    }
];

export default recipes;