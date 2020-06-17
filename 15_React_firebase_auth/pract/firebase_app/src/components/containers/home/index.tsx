import React from 'react';

import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore, /* isEmpty */ } from 'react-redux-firebase';
import { AppStore } from '../../../core/redux/store';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Card from '../../elements/card';
import { Product } from '../../../core/model/product';
import CreateDialog from './elements/create-dialog';


const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const HomeContainer: React.FC = () => {
  const classes = useStyles();
  const [isCreateModalOpen, toogleModalOpen] = React.useState(false);
  const firestore = useFirestore();

  useFirestoreConnect([
    { collection: 'products' }
  ]);

  // const auth = useSelector<AppStore>(state => state.firebase.auth);
  const products = useSelector<AppStore>((state) => state.firestore.ordered.products);

  const onCreateProductClick = (): void => toogleModalOpen(true);
  const onCloseCreateModal = (): void => toogleModalOpen(false);

  const onCreateSubmit = async (product: Partial<Product>): Promise<void> => {
    await firestore.collection('products').add(product);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={4}>
        {
          products && (products as Product[]).map((product) => (
            <Grid item xs={12} md={6} xl={4} key={product.id}>
              <Card
                title={product.name}
                description={product.description}
                image={product.image}
              />
            </Grid>
          ))
        }
      </Grid>

      {isCreateModalOpen && <CreateDialog
        onClose={onCloseCreateModal}
        onSubmit={onCreateSubmit}
      />}

      {
        // !isEmpty(auth) &&
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={onCreateProductClick}
        >
          <AddIcon />
        </Fab>
      }
    </Container>
  );
};

export default HomeContainer;
