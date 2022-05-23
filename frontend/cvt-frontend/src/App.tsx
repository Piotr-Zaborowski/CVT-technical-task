import {Box, Button, Container, Grid, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import axios from "axios";
import MultiActionAreaCard from "./components/Feed";


const myApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/app/',
    headers: {
        "Content-type": "application/json"
    }
})

let idArr:number [] = new Array()
let titleArr:string [] = new Array()
let contentArr:string [] = new Array()


myApi.get('/getallarticles').then( res => {
    for(let elem in res.data)
    {
        idArr.push(res.data[elem].id)
        titleArr.push(res.data[elem].title)
        contentArr.push(res.data[elem].content)
    }
})

console.log(idArr)


function App() {
    console.log(idArr)
    return (
      <Box>
        <Navbar/>
          <Grid alignItems={"center"} justifyContent={"center"} marginLeft={'15%'} marginRight={'15%'}>
              <Stack  spacing={2} margin={2}>
                  <Box id='res_viewer'>
                      <Feed content={"CONTENT FROM MAIN"} id={10} title={"Sherlock Holmes"} total={5} idArr={idArr}/>
                  </Box>
              </Stack>
          </Grid>
      </Box>
  );
}

export default App;
