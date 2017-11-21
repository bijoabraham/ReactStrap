import React from 'react';
import { Jumbotron, Button} from 'reactstrap';

class Home extends React.Component{
    render()
    {
        return(
            <div>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple web application using react and react bootstrap</p>
                <hr className="my-2" />        
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            </div>
        );
    }
}

export default Home;