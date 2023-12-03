import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Content from './Content';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{bgcolor: '#cfe8fc', height: '100vh' }} />
        <div>
            <h1>Mellon</h1>
            <Content/>
        </div>
      </Container>
    </React.Fragment>
  );
}