import React, {useState} from 'react';
import touren from './touren';

const AddTourC = () => {

    const generateUniqueId = () => {
        return Date.now();
    };

    const [newTour, setNewTour] = useState({
        id: generateUniqueId(),
        datum: '',
        name: '',
        sehenswürdigkeiten: [],
        maxTeilnehmer: 0,
        gruppen: []
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewTour(prevTour => ({
            ...prevTour,
            [name]: value
        }));
    };

    const addTour = (e) => {
        e.preventDefault();

        touren.push(newTour);

        setNewTour({
            id: generateUniqueId(),
            datum: '',
            name: '',
            sehenswürdigkeiten: [],
            maxTeilnehmer: 0,
            gruppen: []
        });
        alert('Tour successfully added!');
    };

    return (
        <div>
            <h2>Neuen Tour hinzufügen</h2>
            <form onSubmit={addTour}>
                <label>
                    Datum:
                    <input type="text" name="datum" value={newTour.datum} onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Name:
                    <input type="text" name="name" value={newTour.name} onChange={handleChange}/>
                </label>
                <br/>

                <label>
                    Max Teilnehmer:
                    <input type="number" name="maxTeilnehmer" value={newTour.maxTeilnehmer} onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Tour hinzufügen</button>
            </form>
        </div>
    );
};

export default AddTourC;


