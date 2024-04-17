import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
    </Stack>
  );
}

export default CustomPagination;
