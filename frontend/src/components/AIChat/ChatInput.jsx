import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({ value, setValue, onSend }) {
  return (
    <Box>
      <TextField
        fullWidth
        placeholder="Describe today's interaction..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        multiline
        maxRows={4}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                onClick={onSend}
                sx={{ p: 1.25 }}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          bgcolor: "#f6f9ff",
          borderRadius: 3,
        }}
      />
    </Box>
  );
}