import './App.css';
import React from 'react';
import UserList from './components/User';
import axios from 'axios'
import MenuList from './components/Menu';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    }
  }

  componentDidMount() {

      axios.get('http://127.0.0.1:8000/users/').then(response => {

        this.setState({
          'users': response.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <MenuList/>
        <UserList users={this.state.users} />
        <Footer/>
      </div>
    );
  }
}

export default App;
