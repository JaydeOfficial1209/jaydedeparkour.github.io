const users = [{ email: "jayde", password: "1209" }];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, email: '', err: '' };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(email, password) {
    users.find(obj => {
      if (obj.email === email && obj.password === password) {
        this.setState({ loggedIn: true, email: email, err: '' });
      } else {
        this.setState({ err: 'User not found/ username or password is incorrect' });
      }
    });
  }

  logout() {
    this.setState({ loggedIn: false, email: '' });
  }

  render() {
    var page;
    if (this.state.loggedIn) {
      page = /*#__PURE__*/React.createElement(Profile, { email: this.state.email, onLogout: this.logout });
    } else {
      page = /*#__PURE__*/React.createElement(Login, { onLogin: this.login });
    }
    return /*#__PURE__*/(
      React.createElement("div", null,
      page, /*#__PURE__*/
      React.createElement("span", { className: "centre" }, this.state.err)));


  }}


class Login extends React.Component {

  submitForm(event) {
    event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.refs.email.value = '';
    this.refs.password.value = '';
    this.props.onLogin(email, password);
  }

  