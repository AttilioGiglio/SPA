import React, { useMemo } from 'react';
import HeroeCard from '../heroes/heroe_card';
import { useForm } from '../../hooks/use_form';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const Search = ({ history }) => {

    const queryString = require('query-string');

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
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
                    (q === '')
                    &&
                    <div className='alert alert-info'>
                        Busca tu Heroe !!
                    </div>
                    }
                    {
                    (q !== '' && heroesFiltered.length === 0)
                    &&
                    <div className='alert alert-danger'>
                        No hay un Heroe con el nombre buscado :(
                    </div>
                    }
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
