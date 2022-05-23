import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {Box, Button, Fab, Modal, Stack, TextField, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddComp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Tooltip title="Add post" sx={{position:"fixed", bottom:20, left:20}}>
                <Fab size="large" color="secondary" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack sx={style}>
                    <Stack  spacing={2} margin={2}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add post
                        </Typography>
                        <TextField id="title-text" label="Title" variant="outlined" />
                        <TextField id="content-text" label="Content" variant="outlined" />
                        <Button variant="contained" color="secondary">POST</Button>
                    </Stack>
                </Stack>
            </Modal>
        </>
    )
}

export default AddComp;