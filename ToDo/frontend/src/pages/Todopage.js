import React from "react";
import axios from 'axios';
import TodoList from '../components/Todo'


class Todopage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todo': []
    }
  }

  componentDidMount() {

      axios.get('http://127.0.0.1:8000/todo/').then(response => {

        this.setState({
          'todo': response.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}



export default Todopage;