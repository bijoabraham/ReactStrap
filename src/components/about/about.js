import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About</h1>
                <ListGroup>
                    <ListGroupItem>
                    <ListGroupItemHeading>React</ListGroupItemHeading>
                    <ListGroupItemText>
                    a facebook miracle
                    </ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                    <ListGroupItemHeading>React Strap</ListGroupItemHeading>
                    <ListGroupItemText>
                    a bootstrap 4 component in react
                    </ListGroupItemText>
                    </ListGroupItem>                
                </ListGroup>
            </div>
        );

    }

}
export default About;