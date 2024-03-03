import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import styled from 'styled-components';

const StyledPagination = styled(Pagination)`
	margin-top: 2rem;
	display: flex;
	justify-content: center;

	.MuiPaginationItem-root {
		color: rgba(255, 255, 255, 0.47);
	}

	.Mui-selected {
		color: #6B46BF;
		font-weight: bold;
`;

const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handlePageChange = (event, page) => {
		onPageChange(page);
	};

	return (
		<StyledPagination
			count={Math.ceil(totalItems / itemsPerPage)}
			page={currentPage}
			onChange={handlePageChange}
			color='primary'
			size={windowWidth <= 1024 ? 'medium' : 'large'}
		/>
	);
};

export default CustomPagination;
