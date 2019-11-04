import React from 'react';
import { Link } from 'react-router-dom';

class FormSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
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
      <div className="signup-form">

        <div className="signup-form-errors">
          <ul>
            {errorList}
          </ul>
        </div> <br></br>

        <h2>Sign Up</h2><br></br>

        <form>

          <div className="signup-form-input">
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
            </label>
          </div><br></br>

          <div className="signup-form-input">
            <label>Password:
              <input
                type="text"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
          </div><br></br>

          <div className="signup-form-input">
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
          </div><br></br>

          <button onClick={this.handleSubmit}>Sign Up</button><br></br>

        </form>

        <Link className="login-form-link" to={"/login"}>Do you need to login?</Link>

      </div>

    );
  }
}

export default FormSignup;