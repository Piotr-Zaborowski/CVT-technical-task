import {Box, Button, Container, Grid, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import axios from "axios";
import MultiActionAreaCard from "./components/Feed";


const myApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/app/'
})

myApi.get('/getallarticles').then( res => {
    console.log(res.data)
})

function App() {
  return (
      <Box>
        <Navbar/>
          <Grid alignItems={"center"} justifyContent={"center"} marginLeft={'15%'} marginRight={'15%'}>
              <Stack  spacing={2} margin={2}>
                  <MultiActionAreaCard content={"CONTENT FROM MAIN"} id={10} title={"Sherlock Holmes"}/>
              </Stack>
          </Grid>
      </Box>
  );
}

export default App;
