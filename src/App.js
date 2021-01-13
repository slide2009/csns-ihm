import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import AccueilDossier from './components/dossiers/AccueilDossier';
import Menu from './components/menus/Menu';
import AccueilOperation from './components/operations/AccueilOperation';
import { UriFront } from './constantes/UriFront';
import './lib/css/bootstrap.min.css';

const App = () => {
    return <BrowserRouter>
        <Menu>
            <Switch>
                <Route path={UriFront.accueil} component={Accueil} />
                <Route path={UriFront.operations} component={AccueilOperation} />
                <Route path={UriFront.dossiers} component={AccueilDossier} />
            </Switch>
        </Menu>
    </BrowserRouter>
}

export default App;
