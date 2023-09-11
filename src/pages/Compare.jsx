import React from 'react'
import Navbar from "../components/Navbar";
import styles from "../style";
import { useState, useEffect } from "react";

const Compare = () => {
  const [showHowToGuide, setShowHowToGuide] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [hourlyWage, setHourlyWage] = useState(null);
  const [confirmedHourlyWage, setConfirmedHourlyWage] = useState(null); // New state
  const [modalOpen, setModalOpen] = useState(false);
  const [wageError, setWageError] = useState(false);

  const closeModal = () => {
      setShowHowToGuide(false);
      setShowBenefits(false);
  };

  // If hourlyWage is provided, calculate the monthly salary, otherwise use the default
  const melbourneMonthlySalary = confirmedHourlyWage 
  ? confirmedHourlyWage * 24 * 4 
  : 4000; // default value

  const handleHourlyWageSubmit = () => {
    // Here, we just trigger a re-render which will use the latest hourly wage to update the displayed values
    setConfirmedHourlyWage(hourlyWage);
  };


  // Hardcoded data for Melbourne and India
  const melbourneData = {
      averageMonthlySalary: melbourneMonthlySalary,
      rent: 1200,
      foodCost: 600,
      transportationCosts: 300,
      utilities: 300
  };

  const indiaData = {
      averageMonthlySalary: 46000,
      rent: 18000,
      foodCost: 8000,
      transportationCosts: 3000,
      utilities: 2000
  };


  const melbourneRatios = {
      rent: (melbourneData.rent / melbourneData.averageMonthlySalary).toFixed(2),
      food: (melbourneData.foodCost / melbourneData.averageMonthlySalary).toFixed(2),
      transport: (melbourneData.transportationCosts / melbourneData.averageMonthlySalary).toFixed(2),
      utilities: (melbourneData.utilities / melbourneData.averageMonthlySalary).toFixed(2)
  };

  const indiaRatios = {
      rent: (indiaData.rent / indiaData.averageMonthlySalary).toFixed(2),
      food: (indiaData.foodCost / indiaData.averageMonthlySalary).toFixed(2),
      transport: (indiaData.transportationCosts / indiaData.averageMonthlySalary).toFixed(2),
      utilities: (indiaData.utilities / indiaData.averageMonthlySalary).toFixed(2)
  };

  return (
      <div className="bg-primary min-h-screen relative">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
                  <div className="mt-8 text-center">
                      <h2 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[42px] text-gradient ss:leading-[70.8px] leading-[60px]">Cost Comparison for Students in Melbourne</h2>
                      <p className="font-poppins text-[20px] text-white leading-[28px] mt-4 text-align: justify">
                        Ever wonder how many hours of work covers your monthly rent or weekly groceries?
                        Relative Price is an economic concept to interpret the monetary price tag of an item in terms of another
                        To enhance your understanding of Melbourne's prices, this page gives the Relative Prices of some necessities based on your hourly wage
                        Always remember, the fruit after hard work is the sweetest.
                        Every hour you work brings you a step closer to becoming a self-sufficient individual. 
                      </p>
                      <p className="font-poppins text-[15px] text-white leading-[28px] mt-4">
                          <button className="text-emerald-400 underline" onClick={() => setShowHowToGuide(true)}>How to use this tool?</button>
                          <span className="mx-2">|</span>
                          <button className="text-emerald-400 underline" onClick={() => setShowBenefits(true)}>Benefits</button>
                      </p>
                      <br />
                  </div>

                  <div className="w-full border-2 border-green-300 my-4"></div>

                  <div className="text-center mb-4">
                      <h2 className="text-2xl font-bold text-gradient">Living Cost Comparison</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-blue-gradient p-4 rounded shadow-lg min-h-64 relative">
                        <button className="absolute top-2 right-2 text-gray-500 z-10" onClick={() => setModalOpen(true)}>How we calculate?</button>
                        <h3 className="text-2xl font-bold mb-4">Melbourne</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="hourlyWage">
                                Enter your hourly wage (AUD):
                            </label>
                            <div className="flex">
                              <input 
                                  type="number" 
                                  id="hourlyWage" 
                                  name="hourlyWage" 
                                  onChange={e => {
                                    setHourlyWage(parseFloat(e.target.value));
                                    if (parseFloat(e.target.value) < 23) {
                                        setWageError(true);
                                    } else {
                                        setWageError(false);
                                    }
                                }}
                                  placeholder="e.g. 20"
                                  className="mt-1 p-2 border rounded-md flex-grow"
                              />
                              <button 
                                  onClick={handleHourlyWageSubmit}
                                  className="ml-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
                                  >
                                  Submit
                              </button>
                            </div>
                            <p className="text-red-500 text-xs mt-1" role="alert">Hourly wage should be at least 23 AUD.</p>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mb-4 font-bold">
                        <div>Category</div>
                        <div>Cost</div>
                        <div>Ratio</div>
                        <div>Hours Taken</div>
                        </div>  
                        <div className="grid grid-cols-4 gap-4 mb-4">
                            <div>Monthly Salary</div>
                            <div>${melbourneData.averageMonthlySalary.toFixed(2)}</div>
                            <div>1</div>
                            <div>96 (max)</div>

                            <div>Rent</div>
                            <div>${melbourneData.rent}</div>
                            <div>{melbourneRatios.rent}</div>
                            <div>{(melbourneData.rent / confirmedHourlyWage).toFixed(2)}</div>

                            <div>Food Cost</div>
                            <div>${melbourneData.foodCost}</div>
                            <div>{melbourneRatios.food}</div>
                            <div>{(melbourneData.foodCost / confirmedHourlyWage).toFixed(2)}</div>

                            <div>Transportation</div>
                            <div>${melbourneData.transportationCosts}</div>
                            <div>{melbourneRatios.transport}</div>
                            <div>{(melbourneData.transportationCosts / confirmedHourlyWage).toFixed(2)}</div>

                            <div>Utilities</div>
                            <div>${melbourneData.utilities}</div>
                            <div>{melbourneRatios.utilities}</div>
                            <div>{(melbourneData.utilities / confirmedHourlyWage).toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="bg-blue-gradient p-4 rounded shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">India</h3>
                        <br/>
                        <div className="grid grid-cols-4 gap-4 mb-4 font-bold">
                        <div>Category</div>
                        <div>Cost</div>
                        <div>Ratio</div>
                        <div>Hours Taken</div>
                        </div> 
                        <div className="grid grid-cols-4 gap-4 mb-4">
                            <div>Monthly Salary</div>
                            <div>₹{indiaData.averageMonthlySalary}</div>
                            <div>1</div>
                            <div>160 (avg)</div>

                            <div>Rent</div>
                            <div>₹{indiaData.rent}</div>
                            <div>{indiaRatios.rent}</div>
                            <div>{(indiaData.rent / 287.5).toFixed(2)}</div>

                            <div>Food Cost</div>
                            <div>₹{indiaData.foodCost}</div>
                            <div>{indiaRatios.food}</div>
                            <div>{(indiaData.foodCost / 287.5).toFixed(2)}</div>

                            <div>Transportation</div>
                            <div>₹{indiaData.transportationCosts}</div>
                            <div>{indiaRatios.transport}</div>
                            <div>{(indiaData.transportationCosts / 287.5).toFixed(2)}</div>

                            <div>Utilities</div>
                            <div>₹{indiaData.utilities}</div>
                            <div>{indiaRatios.utilities}</div>
                            <div>{(indiaData.utilities / 287.5).toFixed(2)}</div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                  </div>
              </div>
          </div>

          {/* How-to Guide Modal */}
          {showHowToGuide && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                  <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                      <h3 className="text-xl font-bold mb-4">How to use this tool?</h3>
                      <ol className="list-decimal ml-8">
                          <li className="mb-2">Observe the Columns: On the left, you'll find the average costs in Melbourne, and on the right, the average costs in India.</li>
                          <li className="mb-2">Understand the Ratios: For every cost item, there's a ratio that indicates its proportion to the average monthly salary.</li>
                          <li className="mb-2">Make Informed Decisions: By understanding these comparisons, you can better budget and plan for your time in Melbourne.</li>
                      </ol>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            {/* Benefits Modal */}
            {showBenefits && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Benefits</h3>
                        <ul className="list-disc ml-8">
                            <li className="mb-2">Informed Budgeting: Understand how your expenses in Melbourne might compare to those in India.</li>
                            <li className="mb-2">Financial Planning: Use the ratios to understand where your salary might go.</li>
                            <li className="mb-2">Peace of Mind: With knowledge, you can focus on your studies and enjoy your time in Melbourne.</li>
                        </ul>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">How We Calculate</h2>
                        <p>
                            <strong>Salary:</strong> The average monthly salary is calculated based on the hourly wage you provide. 
                            As a student, you can work a maximum of 24 hours per week. Therefore, the monthly salary is computed 
                            by multiplying your hourly wage by 24 hours and then by 4 weeks, representing a month.
                        </p>
                        <p>
                            <strong>Ratio:</strong> The ratio represents the proportion of your monthly salary that is spent on 
                            a specific expense category. It's calculated by dividing the cost of the expense by your average monthly salary.
                        </p>
                        <p>
                            <strong>Hours Needed:</strong> The number of hours needed to earn the amount for a particular expense category 
                            is derived by dividing the cost of the expense by your hourly wage. This represents how many hours you need 
                            to work to cover that specific expense.
                        </p>
                        <button className="mt-4 text-blue-500" onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Compare