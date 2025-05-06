import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import CreateNewShorten from './CreateNewShorten';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  outline: 'none',
  fontFamily: 'Quicksand'
};

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <CreateNewShorten setOpen={setOpen} refetch={refetch} />
      </Box>
    </Modal>
  );
};

export default ShortenPopUp;
