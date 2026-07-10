import timeIcon from './Images/time.png';
import calIcon from './Images/calories.png';
import tagData from "./tags.json";
import './App.css'
import './Health.css'

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

export function ConditionCard({ condition }) {
    return (
        <div className="condition-card">
            <div className="img-condition">
                <img src={condition.image} alt="Health Icon" width="40" height="40" />
            </ div >



            <div className="condition-content">
                <h2>{condition.title}</h2>
                <div className="condition-description">

                    <p>{condition.shortDescription}</p>
                </div>




            </div>
            <button className="learn-button">
                Learn more ⤵︎
            </button>



        </div>
    );

}

