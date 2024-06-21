import React from 'react';
import { useParams } from 'react-router-dom';
import wanderer from './wanderer';
import groupen from './groupen';

const GroupenC = () => {
    const { id } = useParams();
    const tourId = parseInt(id, 10);

    const gruppen = groupen.filter(gruppe => gruppe.id === tourId);

    return (
        <div>
            <h2>Group Participants</h2>
            <ul>
                {gruppen.map(gruppe => {
                    const participant = wanderer.find(w => w.id === gruppe.wanderid);
                    return (
                        <li key={participant.id}>
                            <strong>{participant.name}</strong> - {participant.telefon}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GroupenC;
