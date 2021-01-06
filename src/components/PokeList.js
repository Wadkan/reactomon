import PokeItem from './PokeItem';

const divStyle = {   
    display: 'flex',
    flexFlow: 'wrap'
    }

    const PokeList = (props) => {
        const getPokemons = () =>
            props.pokeList.map((pokemon) => (
                <PokeItem key={pokemon.url} name={pokemon.name} url={pokemon.url} />
            ));

            return <div style={divStyle}>{getPokemons()}</div>
    };

export default PokeList;

