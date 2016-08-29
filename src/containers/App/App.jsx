import React, { PropTypes } from 'react';
import styles from './App.scss';
// import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import Alert from 'react-bootstrap/lib/Alert';
// import Helmet from 'react-helmet';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// import { Notifs, InfoBar } from 'components';
// import { push } from 'react-router-redux';
// import config from 'config';
// import { asyncConnect } from 'redux-connect';
require('../../components/main.scss');
// import cookie from 'js-cookie';

// @asyncConnect([{
//   promise: ({ store: { dispatch, getState } }) => {
//     const promises = [];

//     if (!isAuthLoaded(getState())) {
//       promises.push(dispatch(loadAuth()));
//     }
//     if (!isInfoLoaded(getState())) {
//       promises.push(dispatch(loadInfo()));
//     }
//     return Promise.all(promises);
//   }
// }])
// @connect(
//   state => ({
//     notifs: state.notifs,
//     user: state.auth.user
//   }),
//   { logout, pushState: push })
// class App extends Component {
  // static propTypes = {
  //   children: PropTypes.object.isRequired,
  //   user: PropTypes.object,
  //   notifs: PropTypes.object,
  //   logout: PropTypes.func.isRequired,
  //   pushState: PropTypes.func.isRequired
  // };

  // static contextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.user && nextProps.user) {
  //     // login
  //     this.props.pushState('/loginSuccess');
  //   } else if (this.props.user && !nextProps.user) {
  //     // logout
  //     this.props.pushState('/');
  //   }
  // }

  // handleLogout = (event) => {
  //   event.preventDefault();
  //   // Unsupported reconnection socket for now
  //   // cookie.set('feathers-session', '', { expires: -1 });
  //   this.props.logout();
  // };

//   render() {
//     return (
//       <div className={styles.app}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

function App(props) {
  return (
    <div className={styles.app}>
      {props.children}
    </div>
    );
}

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object,
  notifs: PropTypes.object,
  // logout: PropTypes.func.isRequired,
  // pushState: PropTypes.func.isRequired
};

export default App;
