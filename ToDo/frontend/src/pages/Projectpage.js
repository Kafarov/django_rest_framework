import React from "react";
import axios from 'axios';
import ProjectList from "../components/Project";



class Projectpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'project': []
    }
  }

  componentDidMount() {

      axios.get('http://127.0.0.1:8000/project/').then(response => {

        this.setState({
          'project': response.data
        })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <ProjectList project={this.state.project} />
      </div>
    );
  }
}



export default Projectpage;