import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    birthday: "",
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone, birthday} = user;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history.push('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add New User</Typography>
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
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } align="center" style={{backgroundColor: 'skyblue', color: 'white', margin: '0px 20px'}}>Add User</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" align="center" style={{backgroundColor: 'yellow', color: 'black', margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;