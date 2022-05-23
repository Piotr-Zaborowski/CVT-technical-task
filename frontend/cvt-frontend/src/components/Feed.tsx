import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActionArea, CardActions, Modal} from '@mui/material';
import {DeleteForever, Edit} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";


let hasShown:boolean = false

let idArr:number [] = new Array()
let titleArr:string [] = new Array()
let contentArr:string [] = new Array()
let iteratorArr:number [] = new Array

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

window.addEventListener('load', handleLoad);

function handleLoad() {
    hasShown = false
}

let title = '';
let content = '';
let views = '';

const Feed = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    let iterator = 0
    for (let elem in idArr)
    {
        if(!hasShown)
        {
            iteratorArr.push(iterator)
            iterator++
        }
    }

    function selectPost(postId:number) {
        axios.get("http://127.0.0.1:8000/app/getarticle/"+postId).then(response => {
            title = "Title: " + response.data.title
            content = "Content: " + response.data.content
            views = "Views: " + response.data.views.toString()
        }).then(()=>{
            handleOpen()
        })
    }


    hasShown=true
    return(
        <div id = 'test123'>
            {iteratorArr.map(customId =>
                <Card key={customId} variant="outlined" sx={{ margin: 1 }}>
                    <CardActionArea onClick={() => selectPost(idArr[customId])}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {titleArr[customId]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {contentArr[customId]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => deletePost(idArr[customId])} style={{
                            color: "#ff0000",
                        }} size="large" startIcon={<DeleteForever />}>
                            DELETE
                        </Button >
                        <Button style={{
                            color: "#68ee06",
                        }} size="large" startIcon={<Edit />}>
                            EDIT
                        </Button>
                    </CardActions>
                </Card>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        dangerouslySetInnerHTML={{__html: title}}
                    />
                    <div
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                    <div
                        dangerouslySetInnerHTML={{__html: views}}
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default Feed


function deletePost(postId:number) {
    axios.delete('http://127.0.0.1:8000/app/deletearticle/'+postId)
        .then(() => {
            alert("POST DELETED");
            window.location.reload();
        })
}
