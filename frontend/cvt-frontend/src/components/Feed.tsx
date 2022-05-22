import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import {DeleteForever, Edit} from "@mui/icons-material";

export default function MultiActionAreaCard() {
    return (
        <Card variant="outlined" sx={{ margin: 0 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{
                    color: "#ff0000",
                }} size="large" startIcon={<DeleteForever />}>
                    DELETE
                </Button>
                <Button style={{
                    color: "#68ee06",
                }} size="large" startIcon={<Edit />}>
                    EDIT
                </Button>
            </CardActions>
        </Card>
    );
}
