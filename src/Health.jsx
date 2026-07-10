import './App.css'
import './Health.css'
import { useState } from 'react';
import { ConditionCard } from "./components"
import conditions from "./health-conditions.js";


export default function Health() {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <>
            <h1>Select your Health Condition</h1>
            <br></br>
            <h5>Learn about what foods to eat and avoid based on your conditions(s)</h5>

            <div className='condition-grid'>


                <button
                    onClick={() =>
                        setCurrentIndex((currentIndex - 1 + conditions.length) % conditions.length)
                    }
                >
                    ◀
                </button>
                <div className='condition-card-content'>


                    <ConditionCard condition={conditions[currentIndex]} />



                </div>

                <button
                    onClick={() =>
                        setCurrentIndex((currentIndex + 1) % conditions.length)
                    }
                >
                    ▶
                </button>



            </div >
            <div className="indicators">
                {conditions.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""} `}
                    />



                ))}
            </div>
        </>

    )

}