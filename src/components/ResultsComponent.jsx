import React from 'react';
import Plot from 'react-plotly.js';

function ResultsComponent({ data }) {
    // Exclude total_monthly_cost from the labels and values arrays
    const labels = Object.keys(data).filter(key => key !== "total_monthly_cost");
    const values = labels.map(label => data[label]);

    // Set total_monthly_cost as the only source node
    const source = Array(values.length).fill(0);
    const target = Array.from({ length: values.length }, (_, i) => i + 1);
    const formattedLabels = labels.map((label, index) => `${label.replace(/_/g, ' ')}: $${values[index]}`);
    const linkColors = ['#FF6F61', '#C44D51', '#C70039', '#900C3F', '#581845'];
    const nodeColors = ['#A5678E', '#FF6F61', '#C44D51', '#C70039', '#900C3F', '#581845'];


    const trace = {
    type: 'sankey',
    orientation: 'h',
    node: {
        pad: 15,
        thickness: 50, // Increase the thickness to make the bar wider
        line: {
            color: 'white',
            width: 0.5,
        },
        label: [`Total Monthly Cost: $${data.total_monthly_cost}`, ...formattedLabels], // Use formattedLabels here
        color: nodeColors.slice(0, values.length), // Set the first color to emerald for the total monthly cost
    },
    link: {
        source: source,
        target: target,
        value: values,
        color: linkColors.slice(0, values.length), // Use the linkColors array here
    },
};

const layout = {
    title: 'Estimated Expenditure Sankey Diagram',
    font: {
        size: 10,
        color: 'white',
    },
    paper_bgcolor: 'black',
};
    
    
    
    
    
    return (
        <div>
            <div className="results-panel">
            <p className=" text-center">
                <span className="text-gradient text-2xl">Your estimated cost of living in Victoria is </span> 
                <br/><span role="img" aria-label="dollar bill icon" style={{ fontSize: '1.5em', color: 'initial' }}>💵</span> 
                <span className="text-gradient text-3xl font-bold"> ${data.total_monthly_cost}</span>
            </p>
        </div>
            <Plot data={[trace]} layout={layout} />
        </div>
    );
}

export default ResultsComponent;
