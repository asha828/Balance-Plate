import './App.css'
import './Recipe.css'
import { useEffect, useState } from "react";
import tagData from "./tags.json";
import { RecipeCard } from "./components"

export default function Recipe() {
    const [recipes, setRecipes] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");

    useEffect(() => {
        fetch("http://localhost:3001/recipes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRecipes(data);
            })
            .catch((err) => console.error(err));
    }, []);



    const filteredRecipes =
        selectedFilter === "All"
            ? recipes
            : recipes.filter(recipe =>
                recipe.tags.includes(selectedFilter)
            );



    return (
        <>
            <h1> Recipes</h1>
            <br></br>
            <h5> Find healthy meals that match your plan.</h5>
            <br></br>
            <div className="filter">
                <h4>Filter By: </h4>
                <div className="recipe-filters">
                    <button
                        className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}
                        onClick={() => setSelectedFilter("All")}
                    >
                        All
                    </button>

                    {Object.entries(tagData).map(([tagId, tag]) => (
                        <button
                            key={tagId}
                            className={`recipe-tag filter-button ${selectedFilter === tagId ? "active" : ""
                                }`}
                            onClick={() => setSelectedFilter(tagId)}
                            style={{
                                backgroundColor: tag.bgColor,
                                color: tag.color
                            }}
                        >
                            {tag.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className='recipe-grid'>
                {filteredRecipes.map(recipe => (
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

        </>


    )


}

