import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {DeleteForever, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";

const myCombinedObject = {
    id: 0,
    title: "TEST123",
    content: "CONTENTTEST123"
}

let idArr:number [] = new Array()
let titleArr:string [] = new Array()
let contentArr:string [] = new Array()
let iteratorArr:number [] = new Array()


const Feed = () => {
        const [myContent, setContent] = useState([])

        const fetchData = () => {
            axios.get("http://127.0.0.1:8000/app/getallarticles").then(response => {
                setContent(response.data)
                idArr = []
                titleArr = []
                contentArr = []
                let iterator = 0

                for(let elem in response.data)
                {
                    idArr.push(response.data[elem].id)
                    titleArr.push(response.data[elem].title)
                    contentArr.push(response.data[elem].content)
                    iteratorArr.push(iterator)
                    iterator++
                }
            })
        }

        useEffect(() => {
            fetchData()
        }, [])

    return(
        <div id = 'test123'>
            {iteratorArr.map(customId =>
                <Card key={customId} variant="outlined" sx={{ margin: 1 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {titleArr[customId]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "{contentArr[customId]}
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