import React from 'react';
import { range } from 'lodash';
import Formulaire from './components/r2d2/Formulaire';
import './lib/css/bootstrap.min.css';

const App = () => {
return <>
<Formulaire numeros={range(1,10)}/>
</>}

export default App;
