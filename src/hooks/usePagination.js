import { useState, useEffect } from 'react';

const usePagination = (totalItems, itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		setTotalPages(Math.ceil(totalItems / itemsPerPage));
	}, [totalItems, itemsPerPage]);

	return { currentPage, setCurrentPage, totalPages };
};

export default usePagination;
