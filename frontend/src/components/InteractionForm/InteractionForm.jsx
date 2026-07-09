import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { saveInteraction } from "../../services/interactionService";

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

const getBrowserDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getBrowserTime = (date = new Date()) => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export default function InteractionForm() {

  const reduxData = useSelector(
    (state) => state.interaction.extractedData
  );

  const [reviewMode, setReviewMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dateTouched, setDateTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);

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
    setFormData((current) => ({
      ...current,
      date: getBrowserDate(),
      time: getBrowserTime(),
    }));
  }, []);

  useEffect(() => {
    if (reduxData) {
      setFormData((prevFormData) => ({
        hcpName: reduxData.hcpName || prevFormData.hcpName,
        interactionType: reduxData.interactionType || prevFormData.interactionType,
        date: reduxData.date || prevFormData.date,
        time: reduxData.time || prevFormData.time,
        attendees: reduxData.attendees || prevFormData.attendees,
        topics: reduxData.topics || prevFormData.topics,
        materials: reduxData.materials || prevFormData.materials,
        samples: reduxData.samples || prevFormData.samples,
        followUp: reduxData.followUp || prevFormData.followUp,
        notes: reduxData.notes || prevFormData.notes,
      }));
    }
  }, [reduxData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        date: dateTouched ? prevFormData.date : getBrowserDate(),
        time: timeTouched ? prevFormData.time : getBrowserTime(),
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, [dateTouched, timeTouched]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      setDateTouched(true);
    }

    if (name === "time") {
      setTimeTouched(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {

    try {

      setSaving(true);

      console.log("Saving Interaction...");
      console.log(formData);

      const response = await saveInteraction(formData);

      console.log(response);

      alert("Interaction Saved Successfully!");

    }

    catch (error) {

      console.error(error);

      alert("Unable to Save Interaction");

    }

    finally {

      setSaving(false);

    }

  };

  return (

    <Paper
        elevation={3}
        sx={{
            p:2,
            borderRadius:3,
            height:"100%",
            overflow:"auto"
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

        <Typography
          variant="h5"
          fontWeight="bold"
        >
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
        Review the extracted details before saving.
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="HCP Name"
            name="hcpName"
            value={formData.hcpName}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Interaction Type"
            name="interactionType"
            value={formData.interactionType}
            onChange={handleChange}
            disabled={!reviewMode}
          >
            {interactionTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="time"
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Topics Discussed"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Materials Shared"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Samples"
            name="samples"
            value={formData.samples}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Follow Up"
            name="followUp"
            value={formData.followUp}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            disabled={!reviewMode}
          />
        </Grid>

      </Grid>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >

        <Button
          variant="outlined"
          onClick={() => setReviewMode(!reviewMode)}
          sx={{ textTransform: "none", minWidth: 120 }}
        >
          {reviewMode ? "LOCK" : "EDIT"}
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={saving}
          sx={{ textTransform: "none", minWidth: 160 }}
        >
          {saving ? "Saving..." : "REVIEW & SAVE"}
        </Button>

      </Box>

    </Paper>

  );
}