import React from 'react';
import { Link, useParams } from 'react-router-dom';
import wanderer from './wanderer';
import touren from './touren';

const WanderC = () => {

    const { id } = useParams();
    const wd = wanderer.find(w => w.id === parseInt(id, 10));
    const tr = touren.find(t => t.id === parseInt(id, 10));

    if (!wd) {
        return <div>Wander nicht gefunden</div>;
    }

    return (
        <div>
            <p>Wander</p>

            <div>Telefon: {tr.name}</div>




            <Link to={`/wanderer/${id}/touren`}>Wanderstouren</Link>

        </div>
    );
};

export default WanderC;

/*

            <div>Tour: {tr.name}</div>
            <div>Datum: {tr.datum}</div>
            <div><p>Gruppen: {tr.gruppen.join(', ')}</p></div>
 */
/*
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import touren from './touren';

const TourC = () => {
    const { id } = useParams();
    const tr = touren.find(t => t.id === parseInt(id, 10));

    if (!tr) {
        return <div>Tour nicht gefunden</div>;
    }

    return (
        <div>
            <p>Tour</p>
            <h2>😼 {tr.name} 😼</h2>
            <div>{tr.datum}</div>
            <div><p>Sehenswürdigkeiten: {tr.sehenswürdigkeiten.join(', ')}</p></div>
            <div><p>Max Teilnehmer: {tr.maxTeilnehmer}</p></div>
            <div><p>Gruppen: {tr.gruppen.join(', ')}</p></div>

            <Link to={`/touren/${id}/groupen`}>Groupen</Link>
        </div>
    );
};

export default TourC;


 */