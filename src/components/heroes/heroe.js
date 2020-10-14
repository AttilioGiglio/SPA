import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/get_heroe_by_id';

const Heroe = () => {

    const {heroeId} = useParams();
    const hero = getHeroeById( heroeId ); 

    if ( !hero ){
        return <Redirect to='/' />
    }

    console.log(hero)
    return (
        <div>
            <h2>Heroe</h2>
        </div>
    )
}

export default Heroe
