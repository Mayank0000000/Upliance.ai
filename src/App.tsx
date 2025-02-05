import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserStats from "./Pages/UserStats/UserStats";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Button, Container, AppBar, Toolbar } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="fixed" sx={{ backgroundColor: "#1E1E2F" }}>
        <Toolbar>
          <Button variant="contained" sx={{ backgroundColor: "#4A90E2", color: "white" }} component={Link} to="/">
            Dashboard
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#E94E77", color: "white", ml: 2 }} component={Link} to="/userstats">
            User Stats
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/userstats" element={<UserStats />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
