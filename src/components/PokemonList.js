import React, { Component } from 'react'
export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {    
        }
    }
    render() {
        let {pokemons} = this.props;
        return (
            <div className='list'>
                {
                    pokemons.map(
                        (pokemon, index) => {
                            return (
                                <li key={index} className='li-item'>
                                    {pokemon.name}
                                </li>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
