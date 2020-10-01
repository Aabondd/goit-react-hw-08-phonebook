import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import PageTitle from '../components/PageTitle';
import image from '../images/cellphone.jpg';

const useStyles = makeStyles(theme => ({
  icon: {
    minWidth: 'unset',
    marginRight: theme.spacing(1.5),
  },
  img: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
}));

const HomeView = ({ loading }) => {
  const classes = useStyles();

  return (
    <div>
      <PageTitle title="Your digital phonebook" />

      <Box pt={6} pb={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={7}>
            <Typography variant="h4" color="secondary">
              Top features:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                Secure
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                Free
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                Online
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <img className={classes.img} src={image} alt="cellphone" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeView;
