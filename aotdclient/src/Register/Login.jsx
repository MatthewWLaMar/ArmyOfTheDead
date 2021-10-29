import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    componentDidMount() {
        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            body: JSON.stringify({user:{username: this.state.username, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => { 
            this.setState(data.sessionToken)
            this.setState(data.ID)
            console.log(data)
        }).catch(err => {
            alert('failed to login')
            console.log(err)
        })
    }
    render() { 
        return ( <div>

        </div> );
    }
}
 
export default Login;