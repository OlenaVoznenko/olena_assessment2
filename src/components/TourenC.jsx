import React from 'react';
import {Link} from 'react-router-dom';
import touren from './touren';

const TourenC = () => (
    <div>
        <h1>Touren Liste</h1>
        <ul>
            {touren.map(t => (
                <li key={t.id}>
                    <Link to={`/touren/${t.id}`}>{t.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default TourenC;