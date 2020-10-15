import React, {useMemo} from 'react';
import { getHeroesByPublisher } from '../../selectors/get_heroes_by_publisher';
import HeroeCard from './heroe_card';

const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
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
