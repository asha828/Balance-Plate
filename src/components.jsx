import timeIcon from './Images/time.png';
import calIcon from './Images/calories.png';
import tagData from "./tags.json";
import './App.css'
import './Health.css'
import { useState } from 'react';



export function Cards({ className, title, description, titleColor, descColor, bgColor, icon, tag, tagColor }) {
    return (
        <div className={`card ${className}`} style={{ backgroundColor: bgColor }} >
            <img src={icon} alt="Health Icon" width="28" height="28" />
            <br></br>
            <br></br>
            <h3 style={{ color: titleColor }}>{title}</h3>
            <br></br>
            <p style={{ color: descColor }}>{description}</p>

            <br></br>
            <div className="card-tag" style={{ backgroundColor: tagColor }}>
                <p style={{ color: titleColor }}> {tag}</p>
            </div>
        </ div >
    );

}


export function RecipeCard({
    className,
    recipeName,
    recipeImage,
    textColor,
    bgColor,
    tags = [],
    time,
    calories
}) {
    return (
        <div className={`recipe-card ${className}`}>
            <div className="img-area">
                <img
                    src={recipeImage}
                    alt="recipe"
                />
            </ div >



            <div className="recipe-content">
                <h4 style={{ color: textColor }}>{recipeName}</h4>

                <div className="recipe-container">



                    <div className="inline-container">
                        <img src={timeIcon} alt="Time Icon" width="16" height="16" />
                        <p className='recipe-icon'>{time} </p>
                    </div>
                    <div className="inline-container">
                        <img src={calIcon} alt="Time Icon" width="16" height="16" />
                        <p className='recipe-icon'>{calories} </p>
                    </div>
                </div>



                <div className="recipe-tags">
                    {tags.map(tagId => {
                        const tag = tagData[tagId];
                        return (

                            <span

                                key={tagId}
                                className="recipe-tag"
                                style={{
                                    backgroundColor: tag.bgColor,
                                    color: tag.color
                                }}
                            >
                                {tag.label}

                            </span>
                        );
                    })}
                </div>

                <button className="add-button">
                    + Add to meal plan
                </button>


            </div>
        </div>
    );
}

export function ConditionCard({
    condition,
    selectedConditions,
    setSelectedConditions
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    const isSelected = selectedConditions.includes(condition.id);
    const handleSelect = () => {
        if (isSelected) {
            setSelectedConditions(
                selectedConditions.filter(id => id !== condition.id)
            );
        } else {
            setSelectedConditions([...selectedConditions, condition.id]);
        }
    };



    return (


        <div className="condition-card">

            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>


                <div className="front">


                    <div className="condition-content">

                        <div className="img-condition">
                            <img src={condition.image} alt="Health Icon" width="50" height="50" />
                        </div>
                        <h2 style={{ fontSize: '30px' }}>{condition.title}</h2>
                        <div className="condition-description">

                            <p>{condition.shortDescription}</p>
                        </div>

                    </div>
                    <div className='buttons'>

                        <button onClick={handleFlip} className="learn-button">
                            Learn More ⤵︎
                        </button>

                        <button
                            className={`select-button ${selectedConditions.includes(condition.id) ? "selected" : ""}`}
                            onClick={handleSelect}
                        >

                            {isSelected ? "Selected ✓" : "Select +"}
                        </button>
                    </div>


                </div>


                <div className="back">
                    <div className="condition-content">

                        <div className="condition-description">

                            <div className="info-card">
                                <p>{condition.overview}</p>
                            </div>

                            <br></br>
                            <div className="food-container">
                                <div className="food-content">

                                    <h3 style={{ fontSize: '16px', color: "var(--sage-text)" }}>✓ Foods to Eat</h3>
                                    <br></br>
                                    <div className="good-food">
                                        <ul>
                                            {condition.goodFoods.map((food, id) => (

                                                <li key={id}>{food}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className="food-content">

                                    <h3 style={{ fontSize: '17px', color: "var(--accent)" }}>✕ Foods to Avoid</h3>
                                    <br></br>
                                    <div className="bad-food">
                                        <ul>
                                            {condition.badFoods.map((food, id) => (

                                                <li key={id}>{food}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <h3 style={{ fontSize: '17px', color: "#A5A193" }}>Nutrition Focus: </h3>

                            <br></br>
                            <div className="food-tags">

                                {condition.tags.map(tagId => {
                                    const tag = tagData[tagId];
                                    return (

                                        <span
                                            key={tagId}
                                            className="food-tag"
                                            style={{
                                                backgroundColor: tag.bgColor,
                                                color: tag.color
                                            }}
                                        >
                                            {tag.label}

                                        </span>
                                    );
                                })}
                            </div>



                        </div>
                    </div>
                    <div className='buttons'>


                        <button onClick={handleFlip} className="learn-button">
                            ⤵︎
                        </button>
                    </div>
                </div>




            </div>


        </div >




    );


}


