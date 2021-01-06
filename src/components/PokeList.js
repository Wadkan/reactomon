import React from 'react'

function PokeList(props) {
    const pokes = props.pokeList;
    const pokeListItems = pokes.map((poke) => <li>{poke.name}</li>);       

    return (
        <div>
            <ol>
                {pokeListItems}
            </ol>
        </div>
    )
}

export default PokeList
