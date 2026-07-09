import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

export const saveInteraction = async (interactionData) => {

    const response = await API.post(
        "/interaction/",
        interactionData
    );

    return response.data;
};