import { Box, Slide } from '@mui/material';
import HouseImage from '../assets/house.jpg';
import OfficeImage from '../assets/office.jpg';
import VoidImage from '../assets/void.jpg';

export const LocationsImages = {
    House: HouseImage,
    Office: OfficeImage,
    Void: VoidImage,
}

export const LocationImage = ({ place: location }) => {
    return <>
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
}