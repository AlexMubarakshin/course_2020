import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '30px',
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h1" component="h2" gutterBottom>
        Title
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Container>
  );
};

export default Home;
