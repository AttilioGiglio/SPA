import React from 'react'
import { heroes } from '../../data/heroes';
import HeroeCard from '../heroes/heroe_card';
import { useForm } from '../../hooks/use_form'

const Search = () => {

    const heroesFiltered = heroes;
    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });
    const {searchText} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( searchText )
    }

    return (
        <div>
        <h2>Search</h2>
        <hr />
        <div className='row'>
        <div className='col-5'>
        <h4>Search form</h4>
        <hr />
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Find your hero'
                className='form-control mb-3'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
            />
            <button
            type='submit'
            className='btn btn-block btn-outline-primary'
            >
            Buscar
            </button>
        </form>
        </div>
<div className='col-7'>
<h4>Results</h4>
<hr />
{
    heroesFiltered.map(hero =>
    ( 
        <HeroeCard
        key={hero.id}
        {...hero}
        />
    )
    )
}
</div>
        </div>   
        </div>
    )
}

export default Search
