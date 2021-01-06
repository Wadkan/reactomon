import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

export class PokemonDetail extends Component {
	state = {
		name: null,
		picture: null,
		height: null,
		weight: null,
		hp: null,
		attack: null,
		defense: null,
	};

	componentDidMount() {
		const { id } = this.props.match.params;

		axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then((response) =>
			this.setState({
				name: response.data.name,
				picture: response.data.sprites.other['official-artwork'].front_default,
				height: response.data.height,
				weight: response.data.weight,
				hp: response.data.stats[0].base_stat,
				attack: response.data.stats[1].base_stat,
				defense: response.data.stats[2].base_stat,
				specialAttack: response.data.stats[3].base_stat,
				specialDefense: response.data.stats[4].base_stat,
				speed: response.data.stats[5].base_stat,
			})
		);
	}

	render() {
		return (
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
						src={this.state.picture}
						alt='Official-Artwork'
						style={{ maxWidth: '50%' }}
					/>
					<div className='stats'>
						<h3 style={{ padding: '1rem 0 1rem 1rem' }}>
							Name: {this.state.name}
						</h3>
						<p style={paragraphStyle}>Height: {this.state.height} </p>
						<p style={paragraphStyle}>Weight {this.state.weight} </p>
						<p style={paragraphStyle}>HP: {this.state.hp} </p>
						<p style={paragraphStyle}>Attack: {this.state.attack} </p>
						<p style={paragraphStyle}>Defense: {this.state.defense} </p>
						<p style={paragraphStyle}>
							Special Attack: {this.state.specialAttack}{' '}
						</p>
						<p style={paragraphStyle}>
							Special Defense: {this.state.specialDefense}{' '}
						</p>
						<p style={paragraphStyle}>Speed: {this.state.speed} </p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const paragraphStyle = {
	padding: '0.5rem 0rem 0.5rem 1rem',
};

export default withRouter(PokemonDetail);