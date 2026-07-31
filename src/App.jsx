import { useState } from 'react';
import Navbar from "./Navbar";
import './App.css'

import Recipe from "./Recipe";
import Home from "./Home";
import Health from "./Health";



export default function App() {
  const [page, setPage] = useState("home");
  const [selectedConditions, setSelectedConditions] = useState([]);
  return (
    // layout 
    // sidebar 
    // important to have a bottom 


    <div className='layout'>

      <div className="homeBanner"></div>

      <div className="bottom">
        <Navbar setPage={setPage} />

        <main className='content'>
          {page === "home" && (<Home
            setPage={setPage}
            selectedConditions={selectedConditions} />)}
          {page === "health" && (<Health
            selectedConditions={selectedConditions}
            setSelectedConditions={setSelectedConditions}
          />)}
          {page === "recipes" && (<Recipe />)}
          {page === "groceries" && (<Groceries />)}

        </main >
      </div>


    </div >




  );

}


