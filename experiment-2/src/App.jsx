import { Button, Container, Typography, Stack, Box } from "@mui/material";
import "./App.css";

export default function App() {
  return (
    <Box className="page">
      <Container maxWidth="sm">
        <Box className="card">
          <Typography variant="h4" className="heading">
            Experiment-2
          </Typography>

          <Typography className="subtext">
            Choose your button style
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            marginBottom={3}
          >
            <Button variant="contained" size="small">
              Small
            </Button>

            <Button variant="contained" size="medium">
              Medium
            </Button>

            <Button variant="outlined">
              Outlined
            </Button>
          </Stack>

          <Button variant="contained" className="main-btn">
            Click Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
