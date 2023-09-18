import styles from "./style";
import { Business, CardDeal, CTA, Footer, Navbar, Hero, Section2 } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

<     div className="h-screen flex flex-col">  {/* Set the height to be 100vh and use flexbox */}
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>

        {/* flex-1 ensures that this section takes up any remaining space */}
          <div className={`flex-1 mx-auto ${styles.boxWidth}`}>
            <Hero />
          </div>
        
      </div>

    
    <div className={`bg-primary overlay ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <div style={{ border: '1px solid #1CE8A8', borderRadius: '10px', boxShadow: 'inset 0 0 5px #1CE8A8', padding: '10px', margin: '10px 0' }}>
          <Section2 />
        </div>
        <CardDeal />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
