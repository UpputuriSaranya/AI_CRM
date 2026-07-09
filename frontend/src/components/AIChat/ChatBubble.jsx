import { Box, Paper, Typography } from "@mui/material";

export default function ChatBubble({ sender, text }) {

  const isAI = sender === "ai";

  return (
    <Box
      display="flex"
      justifyContent={isAI ? "flex-start" : "flex-end"}
      mb={2}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2,
          maxWidth: "88%",
          borderRadius: 3,
          bgcolor: isAI ? "#1f6dfd" : "#e8f4ff",
          color: isAI ? "#fff" : "#090a21",
          whiteSpace: "pre-line",
          boxShadow: isAI ? "0 18px 36px rgba(31, 109, 253, 0.14)" : "none",
          fontSize: 15,
          lineHeight: 1.6,
        }}
      >
        <Typography>{text}</Typography>
      </Paper>
    </Box>
  );

}