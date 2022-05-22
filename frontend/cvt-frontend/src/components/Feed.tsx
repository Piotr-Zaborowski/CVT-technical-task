import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {DeleteForever, Edit} from "@mui/icons-material";


const Feed = ({ id, title, content, total, idArr }: { id: number; title: string; content: string; total: number; idArr:Array<number>}) => {
    return(
        <div>
            {idArr.map(customId =>
                <Card key={customId} variant="outlined" sx={{ margin: 0 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {content}
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
            )}

        </div>


    )
}

export default Feed