import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const PokemonDetail = props => {
	const [name, setName] = useState(null);
	const [picture, setPicture] = useState(null);
	const [height, setHeight] = useState(null);
	const [weight, setWeight] = useState(null);
	const [hp, setHp] = useState(null);
	const [attack, setAttack] = useState(null);
	const [defense, setDefense] = useState(null);

	useEffect(() => {
		const { id } = props.match.params;

		axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then(
			(response) => {
				setName(response.data.name);
				setPicture(response.data.sprites.other['official-artwork'].front_default);
				setHeight(response.data.height);
				setWeight(response.data.weight);
				setHp(response.data.stats[0].base_stat);
				setAttack(response.data.stats[1].base_stat);
				setDefense(response.data.stats[2].base_stat)
			}
		);
	}, [props.match.params]);
	
	const paragraphStyle = {
		padding: '0.5rem 0rem 0.5rem 1rem',
	
	}
	let content = (
		<React.Fragment>
			<h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Profile</h1>
			<div
				style={{
					display: 'flex',
					flexWrap: 'row',
					justifyContent: 'center',
					textTransform: 'capitalize',
				}}
			>
				<img
					src={picture}
					alt='Official-Artwork'
					style={{ maxWidth: '50%' }}
				/>
				<div className='stats'>
					<h3 style={{ padding: '1rem 0 1rem 1rem' }}>
						Name: {name}
					</h3>
					<p style={paragraphStyle}>Height: {height} </p>
					<p style={paragraphStyle}>Weight {weight} </p>
					<p style={paragraphStyle}>HP: {hp} </p>
					<p style={paragraphStyle}>Attack: {attack} </p>
					<p style={paragraphStyle}>Defense: {defense} </p>
				</div>
			</div>
		</React.Fragment>
	);
	return content;
	
	
}

export default withRouter(PokemonDetail);