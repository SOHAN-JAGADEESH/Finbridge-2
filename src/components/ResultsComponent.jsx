import React from 'react';
import Plot from 'react-plotly.js';

function ResultsComponent({ data }) {
    // Preparing data for Sankey chart using the data prop
    const labels = Object.keys(data);
    const values = Object.values(data);

    // You'll need to create arrays representing the source, target, and value properties for the Sankey diagram
    // Here, I'm creating a simple example with a single source and multiple targets
    const source = Array(values.length).fill(0);
    const target = Array.from({ length: values.length }, (_, i) => i + 1);
    
    const trace = {
        type: 'sankey',
        orientation: 'h',
        node: {
            pad: 15,
            thickness: 30,
            line: {
                color: 'black',
                width: 0.5,
            },
            label: ['Source', ...labels]
        },
        link: {
            source: source,
            target: target,
            value: values,
        }
    };
    
    const layout = {
        title: 'Estimated Expenditure Sankey Diagram',
        font: {
            size: 10,
        }
    };
    
    return <Plot data={[trace]} layout={layout} />;
}

export default ResultsComponent;
