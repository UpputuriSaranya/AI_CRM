import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Paper,
  Box,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ThinkingAnimation from "./ThinkingAnimation";

import { addMessage } from "../../redux/chatSlice";
import { setInteraction } from "../../redux/interactionSlice";
import { sendMessage } from "../../services/chatService";

export default function AIChat() {

  const dispatch = useDispatch();

  const messages = useSelector(
    (state) => state.chat.messages
  );

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = input;

    dispatch(
      addMessage({
        sender: "user",
        text: userMessage,
      })
    );

    setInput("");

    setLoading(true);

    try {

      const response = await sendMessage(userMessage);

      dispatch(
        addMessage({
          sender: "ai",
          text: response.reply,
        })
      );

      dispatch(
        setInteraction(response.interaction)
      );

    } catch (error) {

      dispatch(
        addMessage({
          sender: "ai",
          text: "Unable to contact AI Backend.",
        })
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 16px 40px rgba(16, 24, 40, 0.08)",
      }}
    >
      <Box
        sx={{
          p: 3,
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
        >
          🤖 AI Assistant
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          AI First CRM Assistant
        </Typography>

      </Box>

      <Divider />
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "#f7fbff",
        }}
      >

        <Typography
          variant="subtitle1"
          mb={2}
          sx={{ fontWeight: 600 }}
        >
          AI Status
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >

          <Chip
            icon={<CheckCircleIcon />}
            label="Ready"
            color="success"
            sx={{
              fontWeight: "bold",
            }}
          />

        </Box>

        <Typography
          mt={1}
          color="text.secondary"
        >
          Waiting for interaction...
        </Typography>
      </Box>
      <Divider />

      {/* Messages */}

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 3,
          background: "#f8fbff",
        }}
      >

        {messages.map((msg, index) => (

          <ChatBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
          />

        ))}

        {loading && <ThinkingAnimation />}

      </Box>

      <Divider />
      <Box
        sx={{
          p: 2,
          background: "#ffffff",
        }}
      >

        <ChatInput
          value={input}
          setValue={setInput}
          onSend={handleSend}
        />

      </Box>

    </Paper>

  );

}