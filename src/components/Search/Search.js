import React, { useState, useEffect } from "react";
import axiosWithAuth from "axios";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      axiosWithAuth()
      
    }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div>
      <input
          type="text"
          placeholder="Search by category"
          value={searchTerm}
          onChange={handleChange}
        />
        <div>
          
        </div>
         
    </div>
    
  )
}

export default Search;

