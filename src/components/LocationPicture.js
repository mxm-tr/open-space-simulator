import { Box, Slide } from '@mui/material';
import BlueSkyPicture from '../assets/blue-sky.jpg';
import HousePicture from '../assets/house.png';
import OfficePicture from '../assets/office.jpg';
import BreakPicture from '../assets/break.jpg';
import PubPicture from '../assets/pub.jpg';
import ToiletsPicture from '../assets/toilets.PNG';

const LocationsImages = {
    House: HousePicture,
    Office: OfficePicture,
    BlueSky: BlueSkyPicture,
    Break: BreakPicture,
    Pub: PubPicture,
    Toilets: ToiletsPicture,
};

const LocationPicture = ({ place: location }) => {
    return (
        <>
            {Object.entries(LocationsImages).map(entry => {
                return <Slide direction="right" in={entry[0] === location} mountOnEnter unmountOnExit>
                    <Box
                        component='img'
                        sx={{
                            position: 'absolute',
                            zIndex: -1,
                            height: '100%',
                            width: "100%",
                            alignSelf: 'center',
                            top: 0,
                            left: 0,
                        }}
                        src={entry[1]}
                    />
                </Slide>
            })}
        </>
    );
};

export default LocationPicture;