import React, { useState } from 'react';
import wanderer from '../data/wanderer';
import WanderC from "./WanderC";
import {Link} from "react-router-dom";

const WanderSuchenC = () => {
    const [keyword, setKeyword] = useState('');
    const [wander, setWander] = useState([]);

    const suchenWander = () => {
        const filteredWander = wanderer.filter(w => w.name.toLowerCase().includes(keyword.toLowerCase()));
        setWander(filteredWander);
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

            <p>Gefunden: {wander.length} bei "{keyword}"</p>

            <ul>
                {wander.map(w => (
                    <li key={w.id}>
                        <p>Name: {w.name}</p>
                        <p>Telefon: {w.telefon}</p>
                        <Link to={`/wanderer/${w.id}`}>Informationen zu Touren anzeigen</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WanderSuchenC;

/*
{wander.map(w => (
    <li key={w.id}>
        <WanderC id={w.id} />
    </li>
))}
*/

/*
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
                <p>Gefunden: {wander ? wander.length : "0"} bei {keyword}</p>

            </ul>


        </div>
    );
};

export default WanderSuchenC;
*/
/*
{wander.map(w => (
                    <li key={w.id}>
                        <Link to={`/wanderer/${w.id}`}>{w.name}</Link>
                    </li>
                ))}
 */
