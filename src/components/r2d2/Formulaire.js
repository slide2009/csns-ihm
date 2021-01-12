import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addMessageAction } from '../../redux/r2d2/message.action';
import SelectComponent from '../commons/SelectComponent';
import MonComposant from './MonComposant';
import MonComposantContainer from './MonComposantContainer';

const Formulaire = ({numeros=[], enregistrerDansStore}) => {

    const [numeroChoisi, setNumeroChoisi] = useState(1);
    const [organismesChoisis, setOrganismesChoisis] = useState([]);
    const [email, setEmail] = useState("a.b@insee.fr");
    const [messageChoisi, setMessageChoisi] = useState("Message initial");

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

        <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="input" onChange={e => setMessageChoisi(e.target.value)} value={messageChoisi}/>
        </Form.Group>

        <SelectComponent label="Toto" id="numOp1" onChange={setNumeroChoisi} value={numeroChoisi} options={numeros}/>

        <SelectComponent label="Organisme concerné" id="numOp2" onChange={changerOrganisme} value={organismesChoisis} 
                        options={['A','B']} multiple={true}/>
        <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Fichier à envoyer" />
        </Form.Group>

        <MonComposant message={messageChoisi}/>
        <MonComposantContainer/>
        <Form.Row>
            <Button type="submit">Enregistrer</Button>
            <Button onClick={()=> enregistrerDansStore(messageChoisi)}>Valider</Button>
        </Form.Row>

    </Form>
}

export default Formulaire;