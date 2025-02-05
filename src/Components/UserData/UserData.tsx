import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import styles from "./UserData.module.css"; // Import the CSS module

const UserData: React.FC = () => {
  const [userId] = useState(() => `user-${Date.now()}`);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUserData = { userId, ...formData };
    const existingUsers = JSON.parse(localStorage.getItem("userData") || "[]");

    const updatedUsers = [...existingUsers, newUserData];

    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    setFormData({ name: "", address: "", email: "", phone: "" });

    setIsDirty(false);
    alert("User data saved!");
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        User Data Form
      </Typography>
      <Typography variant="body2" className={styles.userId}>
        User ID: {userId}
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default UserData;
