/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  List,
  ListItemText,
  ListItem, Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';
import api from '../../services/api';
import NavTop from '../../components/nav-top/NavTop';

function Material() {
  const [materials, setMaterials] = useState([]);
  const [material, setMaterial] = useState('');
  const [productSelected, setProductSelected] = useState('');
  const [userName, setUserName] = useState('');
  const [materialQt, setMaterialQt] = useState('');
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');

  useEffect(() => {
    function loadMaterials() {
			if (material.length > 0) {
				setTimeout(async () => {
					const response = await api.get(`products/${material}`, {
						headers: {
							'x-access-token': token,
						},
					});
					setMaterials(response.data);
				}, 500);
			}
    }
    loadMaterials();
  }, [material, token]);

  const listMaterials = materials.map((product) => (
    <ListItem
      button
      onClick={() => {
        setOpen(true);
        setProductSelected(product.productName);
        setUserName(name);
      }}
    >
      <ListItemText primary={product.productName} key={product.id} />
    </ListItem>
	));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavTop backButton />
      <div style={{ padding: '1rem' }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            label="Nome do Material"
            onChange={(e) => (e.target.value.length ? setMaterial(e.target.value) : setMaterials(['']))}
          />
          {
            materials.length > 1 && (
              <Typography variant="subtitle1">
              {
                materials.length
              }
              {' '}
              produtos encontrados.
              </Typography>
            )
          }
          <List>
            {listMaterials}
          </List>
        </Grid>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Solicitar Material,
          {' '}
          {name}
          ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
             {productSelected}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantidade a solicitar:"
            type="text"
            fullWidth
            onChange={(e) => setMaterialQt(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="Secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Solicitar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Material;
