import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getPokemonList, getPokemonDetail, getPokemonListByType } from '../services/api';
import usePagination from '../hooks/usePagination';

import CustomPagination from '../components/CustomPagination';
import Filter from '../components/Filter';
import Search from '../components/Search';
import CustomCard from '../components/CustomCard';

const Home = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [currentListByType, setCurrentListByType] = useState([]);
	const [newNameList, setNewNameList] = useState([]);
	const [detailsLoaded, setDetailsLoaded] = useState(false);

	const [itemsPerPage] = useState(8);
	const [totalItems, setTotalItems] = useState(0);
	const { currentPage, setCurrentPage } = usePagination(totalItems, itemsPerPage);

	const fetchPokemonList = async () => {
		try {
			const response = await getPokemonList();
			const data = response;
			setPokemonList(data);
		} catch (error) {
			console.error('Error fetching Pokemon list:', error);
		}
	};

	const handlePokemonTypeChange = async (type) => {
		try {
			const updatedList = await getPokemonListByType(type);
			setDetailsLoaded(false);
			setCurrentPage(1);
			setCurrentListByType(updatedList);
			setTotalItems(updatedList.length);
		} catch (error) {
			console.error('Error fetching Pokemon list:', error);
		}
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPokemons = currentListByType.slice(startIndex, endIndex);

	const fetchPokemonDetails = async () => {
		try {
			const detailedPokemons = await Promise.all(
				currentPokemons.map(async (pokemonData) => {
					return await getPokemonDetail(pokemonData.pokemon.name);
				})
			);
			setNewNameList(detailedPokemons);
		} catch (error) {
			console.error('Error fetching Pokemon details:', error);
		}
	};

	const handleSearch = async (term) => {
		if (term == '') {
			fetchPokemonDetails();
			return;
		}
		const matchedPokemon = pokemonList.filter((elem) => elem.name.includes(term));
		try {
			const detailedPokemons = await Promise.all(
				matchedPokemon.map(async (pokemonData) => {
					return await getPokemonDetail(pokemonData.name);
				})
			);
			setNewNameList(detailedPokemons);
		} catch (error) {
			console.error('Error fetching Pokemon details:', error);
		}
	};

	const onPageChange = (event) => {
		setDetailsLoaded(false);
		setCurrentPage(parseInt(event.target.innerText, 10));
	};

	useEffect(() => {
		if (currentPokemons.length > 0 && !detailsLoaded) {
			fetchPokemonDetails();
			setDetailsLoaded(true);
		}
	}, [currentListByType, detailsLoaded, currentPage]);

	useEffect(() => {
		fetchPokemonList();
	}, []);

	return (
		<Box>
			<Container>
				<Typography color='primary' variant='h2' gutterBottom m={2}>
					Welcome to your trainer dashboard!
				</Typography>
				<Box m={2} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
					<Search onSearch={handleSearch} />
					<Filter onChange={handlePokemonTypeChange} />
				</Box>
				{currentListByType.length == 0 ? (
					<Typography color='primary' variant='h2' gutterBottom m={2}>
						No se encontraron Pokemones
					</Typography>
				) : (
					<Grid container spacing={5}>
						{newNameList.map((pokemon, index) => {
							return <CustomCard pokemon={pokemon} index={index} key={pokemon.name} />;
						})}
					</Grid>
				)}
				{currentListByType.length > 0 && (
					<CustomPagination
						currentPage={currentPage}
						totalItems={totalItems}
						itemsPerPage={itemsPerPage}
						onPageChange={onPageChange}
					/>
				)}
			</Container>
		</Box>
	);
};

export default Home;
