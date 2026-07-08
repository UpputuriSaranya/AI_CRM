import { Paper, Chip, Stack, Typography } from "@mui/material";

export default function CapabilityChips() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 3,
        mb: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        mb={2}
      >
        AI Capabilities
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
      >
        <Chip label="Entity Extraction" color="primary" />

        <Chip label="Summarization" color="secondary" />

        <Chip label="Recommendations" color="success" />

        <Chip label="Auto Fill" color="warning" />
      </Stack>
    </Paper>
  );
}