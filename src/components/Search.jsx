import React, { useState } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const SearchContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	gap: 10px;
`;

const StyledTextField = styled(TextField)`
	&& {
		& .MuiInputBase-root {
			border: none;
		}

		& .MuiOutlinedInput-root {
			color:'white';
			border: 1px solid rgba(47, 47, 69, 1);
			background-color: rgba(255, 255, 255, 0.12);
			height: 60px;
			border-radius: 10px;
			&::placeholder {
				color: white;
			}
	
	& .MuiInputBase-input-MuiOutlinedInput-input {
		color: white;
	  }
	}
`;

const SearchButton = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	width: 60px;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.12);
	border: 1px solid rgba(47, 47, 69, 1);
	cursor: pointer;
	border-radius: 10px;
	&:hover {
		background-color: white;
		& svg {
			color: rgba(47, 47, 69, 1);
		}
	}
`;

const StyledSearchIcon = styled(SearchIcon)`
	&& {
		transition: ease-in-out color 0.4s;
	}
`;

const Search = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = () => {
		onSearch(searchTerm);
	};

	return (
		<SearchContainer>
			<StyledTextField
				placeholder='Quick Search..'
				value={searchTerm}
				onChange={handleSearchChange}
				fullWidth
				color='primary'
			/>
			<SearchButton onClick={handleSearchSubmit}>
				<StyledSearchIcon color='primary' />
			</SearchButton>
		</SearchContainer>
	);
};

export default Search;
