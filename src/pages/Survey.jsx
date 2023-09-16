import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import Navbar from "../components/Navbar";
import styles from "../style";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    
    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                    <Survey model={survey} />
                </div>
            </div>
        </div>   
        
    );
}

export default SurveyComponent;
