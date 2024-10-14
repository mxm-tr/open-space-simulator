import { Box, Slide } from '@mui/material';
import CoworkerPicture from '../assets/coworker.jpg';
import BlueSkyPicture from '../assets/blue-sky.jpg';
import BossPicture from '../assets/boss.jpg';
import ElevatorPicture from '../assets/elevator.jpg'
import HousePicture from '../assets/house.png';
import OfficePicture from '../assets/office.jpg';
import BreakPicture from '../assets/break.jpg';
import OutsidePicture from '../assets/outside.jpg';
import PubPicture from '../assets/pub.jpg';
import RestaurantPicture from '../assets/restaurant.jpg';
import ToiletsPicture from '../assets/toilets.PNG';

const LocationsImages = {
    BlueSky: BlueSkyPicture,
    Boss: BossPicture,
    Break: BreakPicture,
    Coworker: CoworkerPicture,
    Elevator: ElevatorPicture,
    House: HousePicture,
    Office: OfficePicture,
    Outside: OutsidePicture,
    Pub: PubPicture,
    Restaurant: RestaurantPicture,
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
                            maxWidth: "80%",
                            left: 0,
                            right: 0,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        src={entry[1]}
                    />
                </Slide>
            })}
        </>
    );
};

export default LocationPicture;