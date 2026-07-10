import './App.css'

import diabetesIcon from './Images/diabetes.png';
import glutenIcon from './Images/gluten-free.png';
import hypertensionIcon from './Images/hypertension.png';
import ibsIcon from './Images/intestine.png';


import recipes from "./recipes.js";

import { Cards, RecipeCard } from "./components"



export default function Home({ setPage }) {
    return (

        <>
            <div style={{ textAlign: "center" }}>
                <h1>Eat well for <span style={{ color: "var(--accent)", fontStyle: 'italic' }}>your</span> health.</h1>
            </div>
            <br></br>
            <br></br>



            <div className='flex-container'>
                <div style={{
                    textAlign: "left", maxWidth: '400px', padding: '16px',

                }}>
                    <p>Personalized Meal Planner helps people with dietary restrictions and health conditions find safe recipes, plan their meals, and build groccery lists tailored to what your dietary needs are.</p>
                    <br></br>
                    <br></br>


                    <div className="button-container">
                        <button
                            type="button"
                            onClick={() => setPage("health")}
                            style={{


                                padding: "10px 24px",
                                borderRadius: "20px",
                                border: '1px solid #2a3631',
                                backgroundColor: "#F7F6F2",
                                color: "#2a3631",
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            <p>Set my health profile →</p>
                        </button>


                        <button
                            type="button"
                            onClick={() => setPage("recipes")}
                            style={{
                                padding: "10px 24px",
                                borderRadius: "20px",
                                border: '1px solid #2a3631',
                                backgroundColor: "#F7F6F2",
                                color: "#2a3631",
                                fontSize: "14px",
                                cursor: "pointer"
                            }}
                        >
                            <p>Browse Recipes →</p>
                        </button>
                    </div>

                </div>


                {recipes.slice(0, 1).map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        recipeName={recipe.title}
                        recipeImage={recipe.image}
                        time={recipe.time}
                        tags={recipe.tags}
                        calories={recipe.calories}
                    />
                ))}

            </div>


            <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "5rem 0" }} />

            <h4>Who it's for</h4>
            <br></br>
            <h3> Built for people managing health conditions</h3>
            <br></br>
            <br></br>

            <div className="card-grid">
                <Cards
                    icon={diabetesIcon}
                    bgColor="var(--sage)"
                    className="card-diabetes"
                    title="Diabetes"
                    description="Low glycemic meals that keep blood sugar steady"
                    titleColor="var(--sage-text)"
                    descColor="var(--text)"
                    tagColor="var(--sage-dark)"
                    tag={["Low GI"]}

                />
                <Cards
                    icon={glutenIcon}
                    bgColor="var(--lavender)"
                    className="card-celiac"
                    title="Celiac"
                    description="100% gluten-free recipe filtering"
                    titleColor="var(--lavender-text)"
                    descColor="var(--text)"
                    tagColor="var(--lavender-dark)"
                    tag={["Gluten-free"]}
                />
                <Cards
                    icon={hypertensionIcon}
                    bgColor="var(--blue)"
                    className="card-hypertension"
                    title="Hypertension"
                    description="Low sodium, heart-healthy options"
                    titleColor="var(--blue-text)"
                    descColor="var(--text)"
                    tagColor="var(--blue-dark)"
                    tag={["Low sodium"]}
                />
                <Cards
                    icon={ibsIcon}
                    bgColor="var(--peach)"
                    className="card-IBS"
                    title="IBS"
                    description="Low-FODMAP, gut-friendly recipes"
                    titleColor="var(--peach-text)"
                    descColor="var(--text)"
                    tagColor="var(--peach-dark)"
                    tag={["Gut-friendly"]}
                />

            </div>


        </>
    );
}