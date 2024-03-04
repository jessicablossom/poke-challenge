import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import styled from 'styled-components';

const CardContainer = styled(Grid)`
	&& {
		padding: unset;
	}
`;

const PokemonImage = styled.img`
	margin-top: 10px;
	z-index: 0;
`;

const ShadowImage = styled.img`
	position: absolute;
	top: 21px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
`;

const TextStack = styled(Stack)`
	position: absolute;
	width: 50%;
	bottom: 30px;
	left: 28%;
	z-index: 2;
`;

const CustomCard = ({ pokemon, index }) => {
	const colors = ['#7A7CF3', '#FFA984', '#81FC9C', '#FF8989'];
	const colorIndex = index % colors.length;
	const selectedColor = colors[colorIndex];

	return (
		<CardContainer item xs={6} sm={4} md={3} lg={3} m={0}>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					overflow: 'hidden',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<PokemonImage src={pokemon.image} alt={pokemon.name} height='200px' width='200px' />
				<ShadowImage src='/sombra.svg' />
				<TextStack alignItems='start'>
					<Typography
						color='primary'
						variant='body2'
						sx={{
							textTransform: 'capitalize',
							fontWeight: 600,
						}}
					>
						{pokemon.name}
					</Typography>
					<Typography color='primary' variant='body2'>
						HP{pokemon.base_experience}
					</Typography>
				</TextStack>
				<svg
					width='170px'
					height='190px'
					viewBox='0 0 164 194'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', zIndex: '-1', top: '0', left: '20%' }}
				>
					<path
						d='M0.266201 23.8564C-0.379534 9.65025 12.4199 -1.42686 26.3863 1.25107L145.512 24.0924C157.971 26.4812 165.834 38.8837 162.678 51.1708L130.244 177.472C127.746 187.199 118.978 194 108.936 194H29.0227C17.2609 194 7.57949 184.749 7.04541 172.999L0.266201 23.8564Z'
						fill={selectedColor}
					/>
				</svg>
			</Box>
		</CardContainer>
	);
};

export default CustomCard;
