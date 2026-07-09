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
          height: "calc(100vh - 64px)",
          backgroundColor: "#f5f7fb",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 400,
            color: "#4a4a68",
            fontFamily: "Inter, sans-serif",
            mb: 2,
          }}
        >
          AI-First HCP Interaction Logger
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          {/* Left Side */}
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              height: "100%",
            }}
          >
            <InteractionForm />
          </Grid>

          {/* Right Side */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              height: "100%",
            }}
          >
            <AIChat />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}