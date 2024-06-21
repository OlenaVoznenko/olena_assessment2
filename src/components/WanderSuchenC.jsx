import React, { useState } from 'react';
import wanderer from './wanderer';
import {Link} from "react-router-dom";

const WanderSuchenC = () => {
    const [keyword, setKeyword] = useState('');
    const [wander, setWander] = useState(null);

    const suchenWander = () => {
        const wd = wanderer.find(w => w.name.toLowerCase().includes(keyword.toLowerCase()));
        setWander(wd);
    };

    return (
        <div>
            <h2>Wander suchen</h2>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Name..."
            />
            <button onClick={suchenWander}>Suchen</button>

            <ul>
                <p>Gefunden: {wander.length}</p>
            </ul>


        </div>
    );
};

export default WanderSuchenC;

/*
{wander.map(w => (
                    <li key={w.id}>
                        <Link to={`/wanderer/${w.id}`}>{w.name}</Link>
                    </li>
                ))}
 */
