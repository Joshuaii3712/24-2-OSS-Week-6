import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';


const Home = () => {
    return (
        <Container maxWidth="lg">
            <Box my={5}>
            <Typography variant="h3" component="h2" align="center">React JS Crud</Typography>
            <Typography component="h2" align="center">Using Json Server</Typography>
            
            <Box my={2}> {/* This adds vertical margin */}
                    <Typography component="h3" align="center">Week6 Assignment of Younggee Chin</Typography>
            </Box>

            <Typography component="h3" align="center">
                    Customized the app made by suraj25809// https://github.com/suraj25809/React-CRUD-using-Json-Server
            </Typography>
            </Box>
        </Container>
    )
}

export default Home;