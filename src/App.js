import { range } from 'lodash';
import React from 'react';
import FormulaireContainer from './components/r2d2/FormulaireContainer';
import './lib/css/bootstrap.min.css';

const App = () => {
return <>
<FormulaireContainer numeros={range(1,10)}/>
</>}

export default App;
