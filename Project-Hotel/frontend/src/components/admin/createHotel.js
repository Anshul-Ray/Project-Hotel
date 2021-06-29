import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addHotel } from '../../service/hotelapi';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    address: '',
    city: '',
    price: 0
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddHotel = () => {
    const [hotel, setHotel] = useState(initialValue);
    const { name, address, city, price} = hotel;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setHotel({...hotel, [e.target.name]: e.target.value})
    }

    const addHotelDetails = async() => {
        await addHotel(hotel);
        history.push('./');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Hotel</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addHotelDetails()}>Add Hotel</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddHotel;