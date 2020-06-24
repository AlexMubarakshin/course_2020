import React from 'react';
import { observer } from 'mobx-react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useDataStore } from '../../../store/provider';
import { Item } from '../../../model/Item';

const useStyles = makeStyles({
  container: {
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '30px',
  },
});

const Home: React.FC = observer(() => {
  const classes = useStyles();
  const store = useDataStore();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id, title, description /*image*/ } = event.target as any;
    const item: Item = {
      id: id.value,
      title: title.value,
      description: description.value,
      image: 'https://material-ui.com/static/in-house/themes.png',
    };

    store.favorites.add(item);
  };

  const onSearchInputChange = (e: any) => {
    const { value } = e.target;
    store.favorites.setSearchQuery(value);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <form onSubmit={onSubmit}>
        <TextField name="id" label="ID" variant="outlined" />
        <TextField name="title" label="Title" variant="outlined" />
        <TextField name="description" label="Description" variant="outlined" />
        <TextField name="image" label="Image Url" variant="outlined" />

        <Button variant="contained" color="primary" type="submit">
          Готово
        </Button>
      </form>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="search"
            label="Search"
            variant="standard"
            fullWidth
            onChange={onSearchInputChange}
          />
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={2}>
        {store.favorites.filtredItems.map((item) => (
          <Grid key={item.id} item xs={3}>
            <Card>
              <CardActionArea>
                <CardMedia image={item.image} title={item.title} style={{ height: '100px' }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default Home;
