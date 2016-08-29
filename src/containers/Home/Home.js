import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';

class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    // console.log(this.props.bemy);
    return (
      <div>
        <h1>hello react!</h1>
      </div>
    );
  }
}

Home.propTypes = {
  bemy: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    bemy: state.bemy,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  // const actions = { facebook: require('../actions/facebook.js') };
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  // return actionMap;
  return {
    // harmonyActions: bindActionCreators(harmonyActions, dispatch),
    // fbActions: bindActionCreators(fbActions, dispatch),
    // viewActions: bindActionCreators(viewActions, dispatch),
    // invitationActions: bindActionCreators(invitationActions, dispatch),
    // testActions: bindActionCreators(testActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
