import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const getPokemonList = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/pokemon`);
		return response.data.results.map((pokemon) => ({
			name: pokemon.name,
			detailUrl: pokemon.url,
		}));
	} catch (error) {
		console.error('Error fetching Pokemon list:', error);
		throw error;
	}
};

const getPokemonDetail = async (detailUrl) => {
	try {
		const response = await axios.get(detailUrl);
		return response.data.sprites.front_default;
	} catch (error) {
		console.error('Error fetching Pokemon detail:', error);
		throw error;
	}
};

export { getPokemonList, getPokemonDetail };
