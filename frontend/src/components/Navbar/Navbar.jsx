import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold">
          AI CRM
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>Field Representative</Typography>

          <Avatar sx={{ bgcolor: "#1976d2" }}>
            F
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}