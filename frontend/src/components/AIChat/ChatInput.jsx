import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({ value, setValue, onSend }) {
  return (
    <Box display="flex" gap={1}>
      <TextField
        fullWidth
        placeholder="Describe today's interaction..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        multiline
        maxRows={4}
      />

      <IconButton
        color="primary"
        onClick={onSend}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}