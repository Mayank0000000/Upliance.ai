import React, { useState, useEffect } from "react";
import { Button, Box, Container, Typography } from "@mui/material";
import styles from "./Counter.module.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<any>(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  useEffect(() => {
    return localStorage.setItem("count", count);
  }, [count]);

  const handleIncrement = (): void => setCount((prev: number) => prev + 1);
  const handleDecrement = (): void => setCount((prev: number) => Math.max(prev - 1, 0));
  const handleReset = (): void => setCount(0);

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Box className={styles.box}>
        <Box
          className={styles.progress}
          sx={{ height: `${count * 10}%`, maxHeight: "100%" }}
        />
      </Box>
      <Typography variant="h4" className={styles.countText}>
        {count}
      </Typography>
      <Box className={styles.buttonContainer}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" color="error" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          Decrement
        </Button>
       
      </Box>
    </Container>
  );
};

export default Counter;
