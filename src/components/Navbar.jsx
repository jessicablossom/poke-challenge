import React from 'react';
import styled from 'styled-components';
import { Avatar, Box, IconButton, Badge, Container, Typography } from '@mui/material';
import { NotificationsRounded as NotificationsIcon } from '@mui/icons-material';

const StyledBox = styled(Box)`
	background-color: #6b46bf;
	color: #ffffff;
	padding: 8px 0;
`;

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
`;

const ContentBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const CustomTypography = styled(Typography)`
	color: rgba(255, 255, 255, 0.47);
`;

const Navbar = () => {
	return (
		<StyledBox>
			<StyledContainer maxWidth='md'>
				<ContentBox>
					<Avatar alt='Kaiden Stormwood' src='/avatar.svg' sx={{ width: 55, height: 55 }} />
					<Box>
						<Typography variant='body2'>Kaiden Stormwood</Typography>
						<CustomTypography variant='body1'>Pokemon Trainer</CustomTypography>
					</Box>
					<IconButton color='primary' sx={{ width: '40px', height: '40px' }}>
						<Badge badgeContent={2} color='error'>
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</ContentBox>
			</StyledContainer>
		</StyledBox>
	);
};

export default Navbar;
