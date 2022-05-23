import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab, Tooltip} from "@mui/material";

const AddComp = () => {
    return(
        <>
            <Tooltip title="Add post" sx={{position:"fixed", bottom:20, left:20}}>
                <Fab size="large" color="secondary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </Tooltip>
        </>
    )
}

export default AddComp;