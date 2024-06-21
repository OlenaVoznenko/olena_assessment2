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
