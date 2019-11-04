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
      <div className="login-form">

        <div className="login-form-errors">
          <ul>
            {errorList}
          </ul>
        </div> <br></br>

        <h2>Login</h2><br></br>

        <form>

          <div className="login-form-input">
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            </label>
          </div><br></br>

          <div className="login-form-input">
            <label>Password:
              <input
                type="text"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
          </div><br></br>

          <button onClick={this.handleSubmit}>Login</button><br></br>

        </form>

        <Link className="signup-form-link" to={"/signup"}>Do you need to sign up?</Link>

      </div>

    );
  }
}

export default FormLogin;