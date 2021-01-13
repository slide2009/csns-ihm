import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Tableau from '../r2d2/Tableau'
const AccueilDossier = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => reponse.json())
            .then(json => setData(json))
    }

    return <>
        <div>Accueil du menu dossier</div>
        <Button onClick={getData}>Charger</Button>
        <Tableau data={data} />
    </>
}
export default AccueilDossier