import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {DeleteForever, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";

let idArr:number [] = new Array()
let titleArr:string [] = new Array()
let contentArr:string [] = new Array()

const Feed = () => {
        const [myContent, setContent] = useState([])

        const fetchData = () => {
            axios.get("http://127.0.0.1:8000/app/getallarticles").then(response => {
                setContent(response.data)
                idArr = []
                titleArr = []
                contentArr = []

                for(let elem in response.data)
                {
                    idArr.push(response.data[elem].id)
                    titleArr.push(response.data[elem].title)
                    contentArr.push(response.data[elem].content)
                }
            })
        }

        useEffect(() => {
            fetchData()
        }, [])

    console.log(contentArr)

    return(
        <div id = 'test123'>
            {idArr.map(customId =>
                <Card key={customId} variant="outlined" sx={{ margin: 0 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                TEST123
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "CONTENT"
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