import React from 'react';
import AuthorApi from '../../api/authorApi';
import {Table} from 'reactstrap';

export default class Authors extends React.Component{
    constructor(props) {
        super(props);
        this.state = { authors:[]};
    }
    componetWillMount(){
        this.setState({authors:getAuthors()});
    }    
    render(){
        let authorRow=function(author){
            return(
            <tr key={author.id}>
                <th scope="row" a href={'#authors/'+author.id}>author.id</th>
                <td>{author.firstName} {author.lastName}</td>                             
            </tr>);
        };
        return(
        <div>
            <h1>Authors</h1>
            <Table striped>
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
            </Table>
        </div>
        );
    }
}