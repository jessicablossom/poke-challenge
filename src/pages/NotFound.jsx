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
					<img
						src='/poke-empty.png'
						alt='empty-state'
						style={{ width: '200px', filter: 'drop-shadow(16px 16px 16px rgba(17, 28, 55, 1))' }}
					/>
				</Box>
			</Box>
		</Container>
	);
};

export default NotFound;
