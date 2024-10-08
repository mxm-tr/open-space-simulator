import React from 'react';
import { Button, Box } from '@mui/material';

const ChoiceButtons = ({ options, handleChoice, disabled }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
            {options.map((option, index) => (
                <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    sx={{ marginBottom: 2 }}
                    onClick={() => handleChoice(option.nextId)}
                    fullWidth
                    disabled={disabled}
                >
                    {option.label}
                </Button>
            ))}
        </Box>
    );
};

export default ChoiceButtons;
