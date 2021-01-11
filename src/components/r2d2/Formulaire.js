import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SelectComponent from '../commons/SelectComponent';

const Formulaire = ({numeros=[]}) => {

    const [numeroChoisi, setNumeroChoisi] = useState(1);
    const [organismesChoisis, setOrganismesChoisis] = useState([]);
    const [email, setEmail] = useState("a.b@insee.fr");

    const changerOrganisme = options => setOrganismesChoisis(options);
    
    const enregistrer = e => {
        e.preventDefault()
        const demande = {};
        demande.numero = numeroChoisi;
        demande.email = email;
        demande.organismeChoisi = organismesChoisis;
        console.log(demande)
    }

    return <Form onSubmit={enregistrer}>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email}/>
        </Form.Group>

        <SelectComponent label="Toto" id="numOp1" onChange={setNumeroChoisi} value={numeroChoisi} options={numeros}/>

        <SelectComponent label="Organisme concerné" id="numOp2" onChange={changerOrganisme} value={organismesChoisis} 
                        options={['A','B']} multiple={true}/>
        <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Fichier à envoyer" />
        </Form.Group>

        <Form.Row>
            <Button type="submit">Enregistrer</Button>
        </Form.Row>

    </Form>
}

export default Formulaire;