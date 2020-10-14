import React from 'react';
import { getHeroesByPublisher } from '../../selectors/get_heroes_by_publisher';
import HeroeCard from './heroe_card';

const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <div className='card-columns'>
            {
                heroes.map( heroe => (
                    <HeroeCard 
                    key={heroe.id}
                    { ...heroe }
                        />
                ))
            }
        </div>
    )
}

export default HeroeList
