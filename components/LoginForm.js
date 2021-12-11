import React from 'react';

class LoginForm extends React.Component {

    state = {
        email:'',
        password: ''
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    //prevent default of sending the form
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="mt-5" onSubmit={this.handleSubmit}>
                <div>
                    <input type="email"
                            name = "email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            />
                </div>
                   
                <div className="mt-2"> 
                <input type="password"
                            name = "password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            />
                </div>
                <button className ="mt-2" type = "Login">Login</button>

            </form>
        )
    }
}

export default LoginForm;
