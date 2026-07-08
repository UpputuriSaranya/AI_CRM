import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Paper,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import StatusCard from "./StatusCard";
import CapabilityChips from "./CapabilityChips";
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

    console.log("========== AI CHAT ==========");

    if (!input.trim()) {
      console.log("Input Empty");
      return;
    }

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

      console.log("Calling Backend...");

      const response = await sendMessage(userMessage);

      console.log("Backend Response:", response);

      dispatch(
        addMessage({
          sender: "ai",
          text: response.reply,
        })
      );

      dispatch(
        setInteraction(response.interaction)
      );

      console.log("Redux Updated");

    } catch (error) {

      console.error("API ERROR:", error);

      dispatch(
        addMessage({
          sender: "ai",
          text:
            "Unable to contact AI Backend.",
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
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
      }}
    >
      <Box p={2}>
        <Typography
          variant="h6"
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

      <Box p={2}>
        <StatusCard />
        <CapabilityChips />
      </Box>

      <Divider />

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
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

      <Box p={2}>
        <ChatInput
          value={input}
          setValue={setInput}
          onSend={handleSend}
        />
      </Box>
    </Paper>
  );
}