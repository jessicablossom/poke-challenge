// NotFound.jsx

import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const NotFound = () => {
	return (
		<Container maxWidth='md'>
			<Box textAlign='center' mt={10}>
				<Typography color='primary' variant='h1' m={4}>
					404 La página que buscabas no existe
				</Typography>
				<Box>
					<img src='/pikachu.png' alt='Pikachu' style={{ width: '100px' }} />
				</Box>
			</Box>
		</Container>
	);
};

export default NotFound;
