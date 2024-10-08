import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StoryCard = ({ text, onTextLoadComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset the text and index when the text prop changes
    useEffect(() => {
        setDisplayedText(''); // Clear the displayed text
        setCurrentIndex(0); // Reset the index
    }, [text]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 10); // Adjust typing speed (in ms)

            return () => clearTimeout(timer); // Cleanup on component unmount or re-render
        } else {
            // Notify that the text loading is complete once the whole text is rendered
            if (onTextLoadComplete) {
                onTextLoadComplete();
            }
        }
    }, [currentIndex, onTextLoadComplete]);

    return (
        <Card sx={{ margin: '20px auto' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {displayedText}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StoryCard;
