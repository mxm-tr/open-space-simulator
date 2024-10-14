import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import storyData from '../data/storyData';

const StoryGraph = () => {
  const cyRef = useRef(null);

  useEffect(() => {
    // Prepare the elements for Cytoscape.js
    const elements = [];

    // Loop through storyData and create nodes and edges
    Object.keys(storyData).forEach((storyId) => {
      const story = storyData[storyId];

      // Add a node for each story
      elements.push({
        data: { id: storyId, label: story.text },
        position: { x: Math.random() * 500, y: Math.random() * 500 }, // Random position for now
      });

      // Handle normal options (branching paths)
      if (story.options) {
        story.options.forEach((option) => {
          elements.push({
            data: {
              source: storyId,  // Current story as source
              target: option.nextId.toString(), // Target story (nextId)
              label: option.label, // Option label
            },
          });
        });
      }

      // Handle coinflip options
      if (story.coinflip) {
        story.coinflip.forEach((flipOption) => {
          elements.push({
            data: {
              source: storyId,  // Current story as source
              target: flipOption.nextId.toString(), // Target story (nextId)
              label: flipOption.label, // Coinflip label ("Pile" or "Face")
            },
          });
        });
      }
    });

    // Initialize Cytoscape
    cyRef.current = cytoscape({
      container: document.getElementById('cy'), // Reference to the div container

      elements, // Pass the generated elements

      style: [ // Style for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#66b2ff',
            'label': 'data(label)',
            'font-size': '12px',
            'text-valign': 'center',
            'text-halign': 'center',
            'width': '140px',
            'height': '40px',
            'shape': 'rectangle',
            'color': '#000',
            'text-wrap': 'wrap',
            'text-max-width': '150px', // Wrap long text
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(label)',
            'font-size': '10px',
            'color': '#666',
          },
        },
      ],

      layout: {
        name: 'breadthfirst', // Layout: hierarchical
        directed: true, // Directed graph
        padding: 10,
      },
    });

    return () => {
      if (cyRef.current) {
        cyRef.current.destroy(); // Cleanup Cytoscape on component unmount
      }
    };
  }, []);

  return (
    <Box>
      <Button variant="contained" component={Link} to="/" sx={{ marginBottom: 2 }}>
        Back to Story
      </Button>
      <div id="cy" style={{ width: '100%', height: '100vh' }} />
    </Box>
  );
};

export default StoryGraph;
