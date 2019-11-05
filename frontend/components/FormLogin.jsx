import React from 'react';
import { Link } from 'react-router-dom';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {

    const errorList = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)

    return (
      <div className="login-main">
        <div className="login-clearfix"></div>

        <div className="login-form">

          <h2 className="login-form-brand">
            <span className="login-G">G</span>
            <span className="login-o1">o</span>
            <span className="login-o2">o</span>
            <span className="login-g">g</span>
            <span className="login-l">l</span>
            <span className="login-e">e</span>
          </h2>

          <h2 className="login-form-title">Log In</h2>
          <h2 className="login-form-subtitle">Use your Google Account</h2>

          <div>
            <ul className="login-error-ul">
              {errorList}
            </ul>
          </div>

          <form>

              <label className="login-form-username">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                  placeholder="Username"
                />
              </label>

              <label className="login-form-password">
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  placeholder="Password"
                />
              </label>

          </form>

          <div className="login-link-and-button">
            <Link className="signup-form-link" to={"/signup"}>Sign Up for Account</Link>
            <button className="login-form-button" onClick={this.handleSubmit}>Login</button>
          </div>

        </div>
      </div>

    );
  }
}

export default FormLogin;