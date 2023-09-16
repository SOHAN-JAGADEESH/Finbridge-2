import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import Navbar from "../components/Navbar";
import styles from "../style";
import ResultsComponent from "../components/ResultsComponent"; 
import AnimatedHeader from '../components/AnimatedHeader'; // Import the AnimatedHeader component

function SurveyComponent() {
    const [surveyData, setSurveyData] = useState(null);
    const [showSurvey, setShowSurvey] = useState(false);

    const survey = new Model(json);
    survey.applyTheme(themeJson);

    survey.onComplete.add(async (sender, options) => {
        setShowSurvey(false);
        try {
            const data = await dummyApiCall(sender.data);
            setSurveyData(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    });

    const dummyApiCall = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    Food: 200,
                    Rent: 500,
                    Utilities: 150,
                    Entertainment: 100,
                    Miscellaneous: 50,
                });
            }, 1000);
        });
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                    
                    {!showSurvey && (
                    <div className="mt-8 text-center">
                        <AnimatedHeader text="Discover Your Estimated Expenditure in Australia" />
                        <p className="font-poppinstext-justify text-[20px] text-white leading-[28px] mt-4 ">
                            Moving to a new country comes with its set of challenges, one of which is managing your finances smartly. 
                            Take our questionnaire to get an estimate of your monthly expenditure based on your lifestyle preferences.
                        </p>
                        <p className="font-poppins text-[16px] text-gradient leading-[26px] mt-4">
                            Note: The values provided are approximate and based on average costs in Australia. Individual expenses may vary.
                        </p>
                        <div className="w-full border-2 border-green-300 my-4"></div>
                    </div>
                    )}
                          
                    {showSurvey ? (
                        <div className="w-full h-70vh">
                            <Survey model={survey} />
                        </div>
                    ) : (
                        <div className="text-center mb-4">
                            <button onClick={() => setShowSurvey(true)} className="py-2 px-4 bg-green-300 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                                Start Questionnaire
                            </button>
                        </div>
                    )}
                    {!showSurvey && surveyData && <ResultsComponent data={surveyData} />}
                </div>
            </div>
        </div>
    );
}

export default SurveyComponent;
