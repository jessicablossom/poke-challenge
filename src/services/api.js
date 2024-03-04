import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const getTypes = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/type`);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching types:', error);
		throw error;
	}
};

const getPokemonListByType = async (type) => {
	try {
		const response = await axios.get(`${BASE_URL}/type/${type}`);
		return response.data.pokemon;
	} catch (error) {
		console.error('Error fetching types:', error);
		throw error;
	}
};

const getPokemonList = async (url = `${BASE_URL}/pokemon?limit=100000&offset=0`) => {
	try {
		const response = await axios.get(url);
		return response.data.results;
	} catch (error) {
		console.error('Error fetching Pokemon list:', error);
		throw error;
	}
};

const getPokemonDetail = async (name) => {
	try {
		const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
		const { sprites, base_experience } = response.data;
		const image = sprites.front_default;
		return { name, image, base_experience };
	} catch (error) {
		console.error('Error fetching Pokemon detail:', error);
		throw error;
	}
};

export { getTypes, getPokemonList, getPokemonDetail, getPokemonListByType };
