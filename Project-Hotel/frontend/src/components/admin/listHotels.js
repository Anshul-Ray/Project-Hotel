import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getHotels, deleteHotel } from '../../service/hotelapi';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllHotels = () => {
    const [hotels, setHotels] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllHotels();
    }, []);

    const deleteHotelData = async (id) => {
        await deleteHotel(id);
        getAllHotels();
    }

    const getAllHotels = async () => {
        let response = await getHotels();
        setHotels(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {hotels.map((hotels) => (
                    <TableRow className={classes.row} key={hotels.id}>
                        <TableCell>{hotels.name}</TableCell>
                        <TableCell>{hotels.address}</TableCell>
                        <TableCell>{hotels.city}</TableCell>
                        <TableCell>₹ {hotels.price}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/admin/signed/edit/${hotels._id}`}>Edit</Button> {/* change it to hotel.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteHotelData(hotels._id)}>Delete</Button> {/* change it to hotel.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllHotels;
