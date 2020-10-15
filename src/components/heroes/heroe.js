import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/get_heroe_by_id';

const Heroe = ({history}) => {

    const {heroeId} = useParams();
    const hero = getHeroeById( heroeId ); 

    if ( !hero ){
        return <Redirect to='/' />
    }

    const { 
        id,
        superhero,
        alter_ego,
        first_appearance,
        publisher,
        characters
    } = hero;

    const handleReturn = () => {
        if( history.push <= 2 ){
            history.push('/')
        } else {
            history.goBack();
        }
    }

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    src={require(`../../assets/heroes/${heroeId}.jpg`)}
                    alt={superhero}
                    className='img-thumbnail'
                />
            </div>
        <div className='col-8'>
            <h3>{superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Alter ego</b>{alter_ego}</li>
                <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
                <li className='list-group-item'><b>First appearance</b>{first_appearance}</li>
            </ul>
            <h5>characters</h5>
            <p>characters</p>
            <button
            className='btn btn-outline-info'
            onClick={handleReturn}
            >
            Return
            </button>
        </div>
        </div>
    )
}

export default Heroe
