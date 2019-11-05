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

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className="signup-main">
        <div className="signup-clearfix"></div>

        <div className="signup-form">

          <h2 className="signup-form-brand">
            <span className="signup-G">G</span>
            <span className="signup-o1">o</span>
            <span className="signup-o2">o</span>
            <span className="signup-g">g</span>
            <span className="signup-l">l</span>
            <span className="signup-e">e</span>
          </h2>

          <h2 className="signup-form-title">Sign Up</h2>
          <h2 className="signup-form-subtitle">Use your Google Account</h2>

          <div>
            <ul className="signup-error-ul">
              {errorList}
            </ul>
          </div>

          <form>

              <label className="signup-input">
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput('username')}
                  placeholder="Username"
                />
              </label>
        
              <label className="signup-input">
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  placeholder="Password"
                />
              </label>

              <label className="signup-input">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  placeholder="Email"
                />
              </label>

          </form>

          <div className="signup-link-and-button">
            <Link className="login-form-link" to={"/login"}>Login to Account</Link>
            <button className="signup-form-button" onClick={this.handleSubmit}>Sign Up</button>
          </div>

        </div>
      </div>

    );
  }
}

export default FormSignup;