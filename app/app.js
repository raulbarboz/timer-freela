import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Dashboard from './components/Dashboard';
import CompanyId from './components/CompanyId';
import './style.css';


const customHistory = createBrowserHistory();
const store = configureStore();


class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                    <BrowserRouter history={customHistory}>
                        <Switch>
                            <Route path='/' exact={true} component={Dashboard}/>
                            <Route path='/company/:id' exact={true} component={CompanyId}/>
                        </Switch>
                    </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
