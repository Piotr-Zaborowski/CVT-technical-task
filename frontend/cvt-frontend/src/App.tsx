import {Box, Button, Container, Grid, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import axios from "axios";


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
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
              </Stack>
          </Grid>
      </Box>
  );
}

export default App;
