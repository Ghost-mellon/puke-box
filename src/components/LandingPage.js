import React from 'react';
import { Button, Typography, Container,Grid, Paper } from '@mui/material';



export default function LandingPage() {
  return (
    <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center'}}>
                    <Typography variant="h2" gutterBottom>
                        Mellon
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                        Welcome to the future!!
                    </Typography>
                    <Button variant='contained' color='primary'>
                        Get Started
                    </Button>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center'}}>
                    <Typography variant='h4' gutterBottom>
                        Our Misson
                    </Typography>
                    <Typography variant='body1' paragraph>
                        This is the start of a new era
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center'}}>
                    <Typography variant='h4' gutterBottom>
                        Why Web 3?
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Are you dumb? Why Not?
                    </Typography>
                </Paper>
            </Grid>

        </Grid>
    </Container>
  )
}
