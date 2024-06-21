import React from 'react';
import { Link, useParams } from 'react-router-dom';
import wanderer from '../data/wanderer';
import touren from '../data/touren';
import groupen from '../data/groupen';

const WanderC = () => {
    const { id } = useParams();
    const wandererId = parseInt(id, 10);

    const wd = wanderer.find(w => w.id === wandererId);

    if (!wd) {
        return <div>Wander nicht gefunden</div>;
    }

    const groupeIds = groupen
        .filter(g => g.wanderid === wandererId)
        .map(g => g.id);

    const tr = touren.filter(t =>
        t.gruppen.some(g => groupeIds.includes(g))
    );

    return (
        <div>
            <h1>{wd.name}</h1>
            <p>Telefon: {wd.telefon}</p>

            <h2>Teilnehmende Touren</h2>

            <ul>
                {tr.map(tour => (
                    <li key={tour.id}>
                        <Link to={`/touren/${tour.id}`}>{tour.name}</Link>
                        <ul>
                            <li>Datum: {tour.datum}</li>
                            <li>Sehenswürdigkeiten: {tour.sehenswürdigkeiten.join(', ')}</li>
                            <li>Max Teilnehmer: {tour.maxTeilnehmer}</li>
                            <li>
                                Gruppen: {tour.gruppen.filter(g => groupeIds.includes(g)).join(', ')}
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WanderC;