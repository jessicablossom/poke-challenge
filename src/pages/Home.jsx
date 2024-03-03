import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { Box, Container, Grid, Typography } from '@mui/material';

import { getPokemonList } from '../services/api';

import CustomPagination from '../components/CustomPagination';
import Search from '../components/Search';

const Home = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const itemsPerPage = useMediaQuery('(max-width:1024px)') ? 8 : 12;

	useEffect(() => {
		const fetchPokemonList = async () => {
			try {
				const data = await getPokemonList();
				setPokemonList(data);
			} catch (error) {
				console.error('Error fetching Pokemon list:', error);
			}
		};
		fetchPokemonList();
	}, []);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	const filteredPokemons = pokemonList.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPokemons = pokemonList.slice(startIndex, endIndex);

	return (
		<Box>
			<Container>
				<Typography color='primary' variant='h2' gutterBottom m={2}>
					Welcome to your trainer dashboard!
				</Typography>
				<Box m={2} display='flex' alignItems='center' justifyContent='center'>
					<Search onSearch={handleSearch} />
				</Box>
				<Grid container spacing={2}>
					{currentPokemons.map((pokemon, index) => (
						<Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ border: '1px solid white' }}>
							<Typography color='primary' variant='body2'>
								{pokemon.name}
							</Typography>
						</Grid>
					))}
				</Grid>
				<CustomPagination
					totalItems={pokemonList.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</Container>
		</Box>
	);
};

export default Home;
