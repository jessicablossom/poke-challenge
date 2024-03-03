import React, { useState } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = () => {
		onSearch(searchTerm);
	};

	return (
		<Box display='flex' alignItems='center' justifyContent='space-between' width='100%' height={60} gap={1}>
			<TextField
				placeholder='Quick Search..'
				value={searchTerm}
				onChange={handleSearchChange}
				fullWidth
				sx={{
					'& .MuiInputBase-root': {
						border: 'none',
					},
				}}
			/>
			<IconButton
				variant='square'
				onClick={handleSearchSubmit}
				sx={{
					color: 'white',
					width: 60,
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.12)',
					cursor: 'pointer',
					borderRadius: 18,
					'&:hover': {
						backgroundColor: 'white',
					},
				}}
			>
				<SearchIcon color='secondary' />
			</IconButton>
		</Box>
	);
};

export default Search;
