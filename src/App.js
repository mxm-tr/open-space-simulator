import React, { useState } from 'react';
import StoryCard from './components/StoryCard';
import ChoiceButtons from './components/ChoiceButtons';
import storyData from './data/storyData';
import { Box, Container, Typography, Button } from '@mui/material';
import backgroundImage from './assets/office.jpg'

function App() {
  const [currentStoryId, setCurrentStoryId] = useState(1);
  const [loading, setLoading] = useState(true);

  // Handles user choices or coinflip results
  const handleChoice = (nextId) => {
    setLoading(true);
    setCurrentStoryId(nextId);
  };

  // Handles coin flip, randomly selects an outcome
  const handleCoinflip = (coinflipOptions) => {
    setLoading(true);
    const result = Math.random() < 0.5 ? 0 : 1; // 50/50 chance
    const nextId = coinflipOptions[result].nextId;
    setCurrentStoryId(nextId); // Navigate to the next part based on the coinflip
  };

  const handleTextLoadComplete = () => {
    setLoading(false);  // Text has finished rendering
  };

  // Fetch the current story or fallback to a default message if the story is undefined
  const currentStory = storyData[currentStoryId] || { text: 'No story available.', options: [] };

  return (
    <Container
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        alignContent: 'normal',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF90",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: 800,
          margin: "auto",
          marginTop: "10%",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: '20px',
            fontFamily: 'Roboto, sans-serif',
            color: '#1A237E', // Dark blue color for the title
          }}
        >
          👔 Open Space Simulator
        </Typography>
        <StoryCard text={currentStory.text} onTextLoadComplete={handleTextLoadComplete} />

        {/* Check if there are options or a coinflip */}
        {currentStory.options && currentStory.options.length > 0 ? (
          <ChoiceButtons options={currentStory.options} handleChoice={handleChoice} disabled={loading} />
        ) : currentStory.coinflip ? (
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleCoinflip(currentStory.coinflip)}
              fullWidth
              disabled={loading}
            >
              🪙 Pile ou Face ?
            </Button>
          </Box>
        ) : (
          <Typography align="center" variant="h6" color="textSecondary">
            The End.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default App;
