import { useState, useEffect } from "react";
import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";
import Input from "../components/Input";
import Output from "../components/Output";
import AnimatedHeader from '../components/AnimatedHeader';


const Dollar = () => {
  const [amount, setAmount] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (amount !== null) {
      const integerAmount = parseInt(amount, 10);
      // Define the API endpoint and options
      const apiUrl = "https://g0d2ycfkvg.execute-api.ap-southeast-2.amazonaws.com/test/users";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "number" : integerAmount })
      };

      // Make the API call
      fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data && data.statusCode === 200) {
              let parsedBody = JSON.parse(data.body);
              if (parsedBody && parsedBody.results) {
                  setResponse(parsedBody);
              }
          } else {
              console.error('Unexpected data format received:', data);
          }
      })
      .catch(error => console.error('There was an error!', error));
    }
  }, [amount]);

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative">
  
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
            <div className={`mt-8  text-center`}>
              <AnimatedHeader text="Understanding Your Money's Worth in Australia" />
              <p className="font-poppinstext-justify text-[20px] text-white leading-[28px] mt-4 ">
                It could be challenging to evaluate the purchasing power  of your money in a foreign country.
                  We are here to help,
                  Enter any amount of Australian Dollar here and see what it can get you.
                  Every dollar spent is a reminder of the sacrifices made by your family miles away, spend it wisely!
                </p>
              
              <p className="font-poppins text-[16px] text-gradient leading-[26px] mt-4">
                Remember, these are approximate values based on average costs and are meant to serve as a general guideline. Actual expenses can vary based on individual preferences, location, and current market conditions.
            </p>
            <br/>
            </div>

          <div className="w-full border-2 border-green-300 my-4"></div>

          <div className="text-center mb-4">
            <br/>
              <h2 className="text-3xl font-bold text-gradient">See what your money can get you ?</h2>
              <br/>
          </div>

          <div className={`bg-primary ${styles.paddingX} flex justify-center`}>
            <div className={`w-full flex justify-center`}>
              <Input setAmount={setAmount} />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <br/>
              {response && <Output response={response} />}
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dollar;
