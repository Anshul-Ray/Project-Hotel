import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getAdmin, deleteAdmin } from '../../service/adminapi';
// import { Link } from 'react-router-dom';

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


const AllAdmins = () => {
    const [admin, setAdmin] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllAdmins();
    }, []);

    const deleteAdminData = async (id) => {
        await deleteAdmin(id);
        getAllAdmins();
    }

    const getAllAdmins = async () => {
        let response = await getAdmin();
        setAdmin(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Username</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {admin.map((admin) => (
                    <TableRow className={classes.row} key={admin.id}>
                        <TableCell>{admin.username}</TableCell>
                        <TableCell>
                            <Button color="secondary" variant="contained" onClick={() => deleteAdminData(admin._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllAdmins;