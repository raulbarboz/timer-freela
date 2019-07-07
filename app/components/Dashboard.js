import React from 'react';
import Container from './Container';
import Navbar from './Navbar';
import Content from './Content';

function Dashboard() {
    return(
        <Container>
            <Navbar />
            <Content />
        </Container>
    )
}

export default Dashboard;