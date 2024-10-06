import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUser, getallUsers } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    birthday: "",
}

const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone, birthday} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const editUserDetails = async () =>{
       await editUser(id,user);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                <FormControl>
                    <InputLabel>Birthday</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="birthday" value={birthday} />
                </FormControl>
                <Box my={3} display="flex" justifyContent="space-between">
                    <Button variant="contained" onClick={() => editUserDetails()} style={{ backgroundColor: 'skyblue', color: 'white' }}>Edit</Button>
                    <Button onClick={() => history.push("/all")} variant="contained" style={{ backgroundColor: 'yellow', color: 'black', marginLeft: '10px' }}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default EditUser;