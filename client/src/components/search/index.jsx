import React, { useState } from "react";
import "./search.css";
import { fetchData, exerciseOPtions } from "../../utils/fetchData";
import { NavLink } from "react-router-dom";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
        const res = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOPtions);
        
        console.log(res);
    }
    };
    
    console.log(search);
  return (
    <div className="main-common-styles center">
      <div className="container-common-style search-container-adjustments column-center">
        <h1 className="search-exercise-title">Search for Exercises</h1>
        <form className="center form">
          <div className="imput-wrapper">
            <input
              className="input"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              type="text"
            />
            <label className="label">Search any exercise</label>
          </div>
          <NavLink style={{textDecoration: "none"}} to="/">
            <button
              className="regular-btn-style search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
          </NavLink>
        </form>
        <div className="center gap-20">
          <div className="exercise-box ex-box1"></div>
          <div className="exercise-box ex-box2"></div>
          <div className="exercise-box ex-box3"></div>
          <div className="exercise-box ex-box4"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchExercise;
