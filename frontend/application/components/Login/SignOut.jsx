import React from 'react';
import PropTypes from 'prop-types';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push('/');
    this.props.removeProfile();
    window.location.reload();
  }

  render() {
    return (<div>Sign out</div>);
  }
}

SignOut.propTypes = {
  history: PropTypes.shape().isRequired,
  removeProfile: PropTypes.func.isRequired,
};
