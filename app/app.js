import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './style.css';


const store = configureStore();


class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Container>
                    <Navbar />
                    <Content />
                </Container>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
