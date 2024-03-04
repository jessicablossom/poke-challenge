import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
// import { getPokemonPage } from '../services/api';
import styled from 'styled-components';

const StyledPagination = styled(Pagination)`
	margin-top: 2rem;
	display: flex;
	justify-content: center;

	.MuiPaginationItem-root {
		color: rgba(255, 255, 255, 0.47);
	}

	.Mui-selected {
		color: #6b46bf;
		font-weight: bold;
	}
`;

const CustomPagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
	const [totalPages, setTotalPages] = useState(0);
	useEffect(() => {
		setTotalPages(Math.ceil(totalItems / itemsPerPage));
	}, [totalItems, itemsPerPage]);

	return (
		<StyledPagination count={totalPages} page={currentPage} onChange={onPageChange} color='primary' size='large' />
	);
};

export default CustomPagination;
