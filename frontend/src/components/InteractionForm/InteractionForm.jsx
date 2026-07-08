import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
  Chip,
} from "@mui/material";

const interactionTypes = [
  "Meeting",
  "Visit",
  "Call",
  "Conference",
];

export default function InteractionForm() {

  const reduxData = useSelector(
    (state) => state.interaction.extractedData
  );

  const [reviewMode, setReviewMode] = useState(false);

  const [formData, setFormData] = useState({
    hcpName: "",
    interactionType: "",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    materials: "",
    samples: "",
    followUp: "",
    notes: "",
  });

  useEffect(() => {

    if (reduxData) {

      setFormData((prev) => ({
        ...prev,
        ...reduxData,
      }));

    }

  }, [reduxData]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          AI Extracted Details
        </Typography>

        <Chip
          label="AI Filled"
          color="success"
        />
      </Box>

      <Typography
        color="text.secondary"
        mb={3}
      >
        Review extracted information before saving.
      </Typography>

      <Grid container spacing={2}>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="hcpName"
            label="HCP Name"
            value={formData.hcpName}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            name="interactionType"
            label="Interaction Type"
            value={formData.interactionType}
            disabled={!reviewMode}
            onChange={handleChange}
          >
            {interactionTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="date"
            name="date"
            label="Date"
            value={formData.date}
            InputLabelProps={{ shrink: true }}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            type="time"
            name="time"
            label="Time"
            value={formData.time}
            InputLabelProps={{ shrink: true }}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="attendees"
            label="Attendees"
            value={formData.attendees}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="topics"
            label="Topics Discussed"
            value={formData.topics}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={2}
            name="materials"
            label="Materials Shared"
            value={formData.materials}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="samples"
            label="Samples"
            value={formData.samples}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="followUp"
            label="Follow Up"
            value={formData.followUp}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="notes"
            label="Notes"
            value={formData.notes}
            disabled={!reviewMode}
            onChange={handleChange}
          />
        </Grid>

      </Grid>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setReviewMode(!reviewMode)}
        >
          {reviewMode ? "Lock" : "Edit"}
        </Button>

        <Button variant="contained">
          Review & Save
        </Button>
      </Box>
    </Paper>
  );
}