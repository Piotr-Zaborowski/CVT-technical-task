import React from "react";
import {AppBar, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between"
})



const Navbar = () => {
    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Button variant="outlined" onClick={reloadFunction} color="secondary" startIcon={<HomeIcon />}>Main</Button>
                <Typography variant={"h6"} color={"#1D82F5"}>CVT Services Blog</Typography>
                <Button variant="contained" color="secondary">Login</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar

function reloadFunction ()
{
    window.location.reload();
}