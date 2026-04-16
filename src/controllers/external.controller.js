import { getCurrencyAnalysis } from "../services/external.service.js";

export const getExternalData = async (req, res) => {
  try {
    const API_KEY = process.env.API_KEY;

    const data = await getCurrencyAnalysis(API_KEY);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching external data" });
  }
};