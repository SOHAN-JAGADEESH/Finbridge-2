import React from 'react';
import Plot from 'react-plotly.js';

function ResultsComponent({ data }) {
    // Exclude total_monthly_cost from the labels and values arrays
    const labels = Object.keys(data).filter(key => key !== "total_monthly_cost");
    const values = labels.map(label => data[label]);

    // Set total_monthly_cost as the only source node
    const source = Array(values.length).fill(0);
    const target = Array.from({ length: values.length }, (_, i) => i + 1);

    const trace = {
        type: 'sankey',
        orientation: 'h',
        node: {
            pad: 15,
            thickness: 30,
            line: {
                color: 'white',
                width: 0.5,
            },
            label: ['Total Monthly Cost', ...labels.map(label => label.replace(/_/g, ' '))],
            color: ['emerald', ...Array(labels.length).fill('lightgrey')], // Set array of colors
        },
        link: {
            source: source,
            target: target,
            value: values,
            color: Array(values.length).fill('green'), // Set array of colors
        }
    };
    
    
    const layout = {
        title: 'Estimated Expenditure Sankey Diagram',
        font: {
            size: 10,
            color: 'white',
        },
        paper_bgcolor: 'black',
        
    };
    
    return <Plot data={[trace]} layout={layout} />;
}

export default ResultsComponent;
