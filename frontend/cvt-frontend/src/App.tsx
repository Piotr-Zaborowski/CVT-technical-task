import {Box, Button, Container, Grid, Stack} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

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
