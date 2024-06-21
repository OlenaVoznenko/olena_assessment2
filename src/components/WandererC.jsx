import React from 'react';
import { Link } from 'react-router-dom';
import wanderer from './wanderer';

const WandererC = () => {
    return (
        <div>
            <p>Wanderer Liste</p>

            <ul>
                {wanderer.map(t => (
                    <li key={t.id}>
                        <Link to={`/wanderer/${t.id}`}>{t.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default WandererC;

