import { useState } from "react";
import React from 'react';

const Input = ({ setAmount }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setError(null);
            setInputValue("");
        } else if (value < 0) {
            setError("Please enter a value greater than or equal to 0");
        } else {
            setError(null);
            setInputValue(value);
        }
    };

    const handleSubmit = () => {
        if (inputValue >= 0) {
            setAmount(inputValue);
        }
    };

    return (
      <div className="input-section w-full max-w-md">
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter amount in AUD" 
          className="w-full p-2 border rounded-md"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button 
          onClick={handleSubmit} 
          className="mt-2 w-full bg-blue-500 py-4 px-6 font-poppins text-primary bg-blue-gradient rounded-md hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>
      </div>
    );
}

export default Input;
