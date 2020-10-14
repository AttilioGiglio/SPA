import React from 'react';
import { getHeroesByPublisher } from '../../selectors/get_heroes_by_publisher';

const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map( hero => (
                    <li key={hero.id}>
                        { hero.superhero }
                    </li>
                ))
            }
        </ul>
    )
}

export default HeroeList
