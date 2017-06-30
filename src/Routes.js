import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import BasePage from './views/BasePage.js';
import InicioPage from './views/InicioPage.js';
import ServiciosPage from './views/ServiciosPage.js';
import RegistroPage from './views/RegistroPage.js';

class Routes extends React.Component{
    render(){
        return(
            <Router history={appHistory}>
                <Route path="/" component={BasePage}>
                    <IndexRoute component={InicioPage}/>
                    <Route path="Servicios" component={ServiciosPage} />
                    <Route path="Registro" component={RegistroPage} />
                </Route>
            </Router>
        );
    }
}

module.exports = Routes;