import React from 'react';
import { Form } from 'react-bootstrap';

const SelectComponent = ({label, options = [], id, multiple=false, onChange, value }) => 
    <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" 
            onChange={e => {
                if(multiple) {
                    const valeurs = [];
                    for(let option of e.target.selectedOptions) {
                        valeurs.push(option.value)
                    }
                    onChange(valeurs)
                }
                else {
                    onChange(e.target.value)
                }
                
            }} 
            value={value} multiple={multiple?'multiple':null} >
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </Form.Control>
    </Form.Group>

export default SelectComponent;