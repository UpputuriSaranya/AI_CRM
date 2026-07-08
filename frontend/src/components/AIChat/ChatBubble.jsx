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
        elevation={1}
        sx={{
          p: 2,
          maxWidth: "90%",
          borderRadius: 3,
          bgcolor: isAI ? "#E3F2FD" : "#1976D2",
          color: isAI ? "#000" : "#fff",
          whiteSpace: "pre-line"
        }}
      >

        <Typography>

          {text}

        </Typography>

      </Paper>

    </Box>

  );

}