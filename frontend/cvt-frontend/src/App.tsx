import {Box, Button, Container, Fab, Grid, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AddComp from "./components/AddComp";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/app';

function App() {
    return (
      <Box>
        <Navbar/>
          <Grid alignItems={"center"} justifyContent={"center"} marginLeft={'13%'} marginRight={'13%'}>
              <Stack  spacing={2} margin={2}>
                  <Box id='res_viewer'>
                      <Feed />
                  </Box>
              </Stack>
          </Grid>
          <AddComp/>
      </Box>
  );
}

export default App;
