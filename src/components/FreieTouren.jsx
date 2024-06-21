import React from 'react';
import touren from '../data/touren';
import groupen from '../data/groupen';

const TourenListe = () => {

    const zeigenFreieTouren = (tour) => {
        const ids = tour.gruppen;
        const wanderer = groupen.filter(g => ids.includes(g.id)).map(g => g.wanderid);
        return wanderer.length < tour.maxTeilnehmer;
    };

    const freieTouren = touren.filter(tour => zeigenFreieTouren(tour));

    return (
        <div>
            <h2>Freie Touren</h2>
            <ul>
                {freieTouren.map(tour => (
                    <li key={tour.id}>
                        <p>{tour.name}</p>
                        <p>Datum: {tour.datum}</p>
                        <p>Sehenswürdigkeiten: {tour.sehenswürdigkeiten.join(', ')}</p>
                        <p>Maximale Teilnehmer: {tour.maxTeilnehmer}</p>
                        <p>Teilnehmer in Gruppen: {groupen.filter(g => tour.gruppen.includes(g.id)).length}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TourenListe;
