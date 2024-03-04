import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { getTypes } from '../services/api';

const TypeFilter = ({ onChange }) => {
	const [types, setTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('');

	useEffect(() => {
		const getTypesData = async () => {
			try {
				const data = await getTypes();
				setTypes(data);
				setSelectedType(data[0].name);
				onChange(data[0].name);
			} catch (error) {
				console.error('Error fetching types:', error);
			}
		};
		getTypesData();
	}, []);

	const handleTabChange = async (event, type) => {
		setSelectedType(type);
		onChange(type);
	};

	return (
		<Box sx={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }} mb={6}>
			<Tabs
				value={selectedType}
				onChange={handleTabChange}
				indicatorColor='primary'
				textColor='primary'
				variant='scrollable'
				scrollButtons={false}
				sx={{ '& .MuiTabs-scroller .MuiTabs-flexContainer': { display: 'block' } }}
			>
				{types.map((type, index) => (
					<Tab
						key={index}
						label={type.name}
						value={type.name}
						sx={{
							fontFamily: 'DM Mono',
							textTransform: 'capitalize',
							fontWeight: 600,
							fontSize: '17px',
							lineHeight: '21.71px',
							textAlign: 'center',
							color: selectedType === type.name ? 'primary.main' : 'rgba(255, 255, 255, 0.43)',
							opacity: selectedType === type.name ? 1 : 0.43,
							'& .MuiTab-indicator': {
								backgroundColor: 'primary.main',
								height: 10,
							},
						}}
					/>
				))}
			</Tabs>
		</Box>
	);
};

export default TypeFilter;
