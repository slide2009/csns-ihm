import React from 'react'
import Tableau from '../r2d2/Tableau'
const AccueilDossier = () => {
    const data = [
        ["Roman", "6ème"],
        ["Corentin", "5ème"],
    ]
return <>
<div>Accueil du menu dossier</div>
 <Tableau data={data}/>
</>
}
export default AccueilDossier