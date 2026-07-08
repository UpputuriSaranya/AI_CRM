import { Box, CircularProgress, Typography } from "@mui/material";

export default function ThinkingAnimation() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        mt: 2
      }}
    >
      <CircularProgress size={20} />

      <Typography variant="body2">
        AI is extracting interaction details...
      </Typography>
    </Box>
  );
}