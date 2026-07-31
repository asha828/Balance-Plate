import './App.css'
import { useMemo } from "react";
import diabetesIcon from './Images/diabetes.png';
import glutenIcon from './Images/gluten-free.png';
import hypertensionIcon from './Images/hypertension.png';
import ibsIcon from './Images/intestine.png';
import conditions from "./health-conditions.js";

import { Cards } from "./components"



export default function Home({ setPage, selectedConditions }) {
    const selectedConditionData = conditions.filter(condition =>
        selectedConditions.includes(condition.id)
    );
    const randomFacts = useMemo(() => {
        return selectedConditionData.map(condition => ({
            id: condition.id,
            title: condition.title,
            fact: condition.facts[
                Math.floor(Math.random() * condition.facts.length)
            ]
        }));
    }, [selectedConditionData]);
    return (

        <>
            <div style={{ textAlign: "left" }}>
                <br></br>
                <h1> <span style={{ color: "var(--accent)" }}>Balance Plate</span></h1>

                <h3><span style={{ color: "var(--text)", fontStyle: 'italic' }}>Find recipes that fit your health.</span> </h3>
            </div>
            <br></br>
            <br></br>
            <br></br>


            <div className='flex-container'>
                <div style={{
                    textAlign: "left", maxWidth: '420px', padding: '0px',

                }}>
                    <p>Balance Plate helps people with dietary restrictions and health conditions find safe recipes, plan their meals, and build groccery lists tailored to what their dietary needs are.</p>
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

                <div className='food-tip-container'>
                    <h4>Daily Food Tips</h4>

                    <div className='food-tip-content'>
                        <ul>
                            {randomFacts.map(condition => (
                                <div key={condition.id}>
                                    <li>{condition.fact}</li>
                                </div>
                            ))}


                        </ul>

                    </div>
                </div>

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