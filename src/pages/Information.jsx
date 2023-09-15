import React from 'react';
import Navbar from "../components/Navbar";
import styles from "../style";
import { Chrono } from "react-chrono";


const Information = () => {
  const dummyData = [
    { title: "Event 1", cardTitle: "Card Title 1", cardSubtitle: "Card Subtitle 1" },
    { title: "Event 2", cardTitle: "Card Title 2", cardSubtitle: "Card Subtitle 2" },
    { title: "Event 3", cardTitle: "Card Title 3", cardSubtitle: "Card Subtitle 3" },
    { title: "Event 4", cardTitle: "Card Title 4", cardSubtitle: "Card Subtitle 4" },
    { title: "Event 5", cardTitle: "Card Title 5", cardSubtitle: "Card Subtitle 5" },
    { title: "Event 6", cardTitle: "Card Title 6", cardSubtitle: "Card Subtitle 6" },
    { title: "Event 7", cardTitle: "Card Title 7", cardSubtitle: "Card Subtitle 7" },
    { title: "Event 8", cardTitle: "Card Title 8", cardSubtitle: "Card Subtitle 8" },
    { title: "Event 9", cardTitle: "Card Title 9", cardSubtitle: "Card Subtitle 9" },
    { title: "Event 10", cardTitle: "Card Title 10", cardSubtitle: "Card Subtitle 10" },
  ];

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen relative">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold text-gradient">Information Timeline</h1>
            <p className="font-poppins text-[20px] text-white leading-[28px] mt-4">
            Welcome to the information timeline. Here you will find a chronological series of events displayed with detailed information. Navigate through the timeline to explore each event in detail.
            </p>          
            </div>

          <div style={{ width: "100%", height: "70vh" }}>
            <Chrono 
              items={dummyData} 
              mode="VERTICAL_ALTERNATING" 
              cardHeight={250} 
              slideShow 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
