import { Box, Grid, Typography } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";
import InteractionForm from "../components/InteractionForm/InteractionForm";
import AIChat from "../components/AIChat/AIChat";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          background: "#F4F6F8",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          AI-First HCP Interaction Logger
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <InteractionForm />
          </Grid>

          <Grid item xs={12} md={5}>
            <AIChat />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}