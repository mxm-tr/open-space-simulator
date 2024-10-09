import React, { useState } from 'react';
import StoryCard from './components/StoryCard';
import ChoiceButtons from './components/ChoiceButtons';
import DropEmoji from './components/DropEmoji';
import NameForm from './components/NameForm'; // Import du nouveau composant
import storyData from './data/storyData';
import { Box, Container, Typography, Button } from '@mui/material';
import backgroundImage from './assets/office.jpg';

function App() {
  const [currentStoryId, setCurrentStoryId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

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

  // Handles name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameSet(true); // name is defined
  };

  const handleTextLoadComplete = () => {
    setLoading(false);  // Text has finished rendering
  };

  // Fetch the current story or fallback to a default message if the story is undefined
  const currentStory = storyData[currentStoryId] || { text: 'No story available.', options: [] };

  const getPersonalizedStory = (storyText, userName) => {
    return storyText.replace('xxx', userName);
  };

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
          borderRadius: "10px",
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
        {currentStory.emoji && <DropEmoji emoji={currentStory.emoji} count={50} />}
        {!isNameSet ? (
          // Utilisation du composant NameForm
          <NameForm userName={userName} setUserName={setUserName} handleSubmit={handleNameSubmit} />
        ) : (
          <div>
            <StoryCard
              text={getPersonalizedStory(currentStory.text, userName)}
              onTextLoadComplete={handleTextLoadComplete}
            />
            {/* Check if there are options or a coinflip */}
            {currentStory.options && currentStory.options.length > 0 ? (
              <ChoiceButtons
                options={currentStory.options}
                handleChoice={handleChoice}
                disabled={loading}
              />
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
          </div>
        )}
      </Box>
    </Container>
  );
}

export default App;
