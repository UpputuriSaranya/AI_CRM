import { Paper, Typography, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function StatusCard() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 3,
        mb: 2,
        background: "#F8FAFC",
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
      >
        AI Status
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Chip
          icon={<CheckCircleIcon />}
          label="Ready"
          color="success"
        />

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Waiting for interaction...
        </Typography>
      </Stack>
    </Paper>
  );
}