import React from 'react';
import { Link } from 'react-router-dom';
import wanderer from './wanderer';

const WandererC = () => {
    return (
        <div>
            <p>Wanderer Liste</p>

            <ul>
                {wanderer.map(w => (
                    <li key={w.id}>
                        <Link to={`/wanderer/${w.id}`}>{w.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default WandererC;

