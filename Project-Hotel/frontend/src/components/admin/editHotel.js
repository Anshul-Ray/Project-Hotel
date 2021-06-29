import {useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { getHotels, editHotel } from '../../service/hotelapi';
import { useHistory, useParams } from 'react-router-dom';

const initialValues = {
    name : '',
    city: '',
    address : '',
    price : 0
}
const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
});

const EditHotel = () =>
{
    const [hotel, setHotel] = useState(initialValues);
    const { name, city, address, price } = hotel;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadHotelDetails();
    }, );


    const loadHotelDetails = async() => {
        const response = await getHotels(id);
        setHotel(response.data);
    }

    const editHotelDetails = async() => {
        // const response = 
        await editHotel(id, hotel);
        // console.log(response.data);
        history.push('/admin');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setHotel({...hotel, [e.target.name]: e.target.value})
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Hotel Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editHotelDetails()}>Edit Hotel</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditHotel;