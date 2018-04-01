import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import _ from 'lodash';

// Home grids
import Grid from 'material-ui/Grid';

import YearPreview from './YearPreview';

const styles = theme => ({
  root: { marginTop: theme.spacing.unit * 2 },
});

const Home = props => {
  const { classes } = props;

  return (
    <div>
      <div>
        <Grid className={classes.root}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {_.map(props.years, (year, index) => (
                <Grid key={index} item>
                  <YearPreview year={year} index={index} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Home.propTypes = {
  years: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

Home.defaultProps = {};

export default withStyles(styles)(Home);
