import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#222",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px",
          px: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
          }}
        >
          AI CRM
        </Typography>
      </Toolbar>
    </AppBar>
  );
}