import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import Authors from './components/author/authors';
class App extends React.Component{
    render(){
        let route = this.props.route;
        let Child;
        switch(route){
            case 'about':Child=About;break;
            case 'authors':Child=Authors;break;
            case 'home':Child=Home;break;
        }
        return(
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }

}
function render(){
    let route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route}/>,document.getElementById("app"));
}
window.addEventListener('hashchange',render);
render();