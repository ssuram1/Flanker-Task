import React, { useState, useEffect } from 'react';
import ArrowExperiment from './ArrowExperiment';
import FaceExperiment from './FaceExperiment';

const App = () => {
    const [experimentType, setExperimentType] = useState(null);
    // Scrape the URL for the experiment type 
    useEffect(() => {
        //create object of URLSearchParams
        const urlParams = new URLSearchParams(window.location.search);
        //expType will be A1, A2, or F1
        const expType = urlParams.get('expType') || 'A1'; // Default to 'A' if not found
        setExperimentType(expType);
    }, []);
    
    // Render correct experiment based on the experiment type state
    const renderExperiment = () => {
        if (experimentType === 'F') {
            return <FaceExperiment onExperimentComplete={() => console.log('Face experiment completed')} />;
        } 
        else {
          return <ArrowExperiment expType= {experimentType} onExperimentComplete={() => console.log('Arrow experiment completed')} />;
        }
    };

    return (
        <div>
            {renderExperiment()}
        </div>
    );
};

export default App;
