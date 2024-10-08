import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteUser ,getallUsers } from '../service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '40px 90px 90px 120px',
    },
    thead:{
        '& > *':{
            background: '#3DED97',
            color:'#028A0F',
            fontSize: '16px'
        }
    },
    trow:{
        '& > *':{
            fontSize: '16px'
        }
    }
})

const AllUsers = () => {

    const classes = useStyle();

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                user.map((data) => (
                    <TableRow className={classes.trow}>
                        <TableCell>{data.id}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.username}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>{data.birthday}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{backgroundColor: 'skyblue', color: 'white', margin: '0px 20px'}} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                            <Button variant="contained" style={{backgroundColor: 'yellow', color: 'black', margin: '0px 20px'}} onClick={() => deleteData(data.id)}>Delete</Button>
                        </TableCell>
                


                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default AllUsers;
