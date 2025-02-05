import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {

  const users = JSON.parse(localStorage.getItem("userData") || "[]");


  const totalUsers = users.length;


  const count = Number(localStorage.getItem("count") || 0);

  // Chart Data
  const data = {
    labels: ["Total Users", "Count"], 
    datasets: [
      {
        label: "Users",
        data: [totalUsers, count], 
        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

 
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, 
        },
      },
    },
  };

  return (
    <Container sx={{ pt: "80px" }}>
      <Typography
        variant="h4"
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          backgroundColor: "#fff",
          padding: "10px",
        }}
      >
        Dashboard
      </Typography>

      <Box sx={{ width: "100%", height: "500px", mt: "120px" }}>
        <Bar data={data} options={options} height={500} width={1000} />
      </Box>
    </Container>
  );
};

export default Dashboard;
