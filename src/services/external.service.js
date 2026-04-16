import axios from "axios";

export const getCurrencyAnalysis = async (API_KEY) => {
  const response = await axios.get(
    `https://api.fastforex.io/fetch-all?api_key=${API_KEY}`
  );

  const rates = response.data.results;

  const formatted = Object.entries(rates).map(([currency, rate]) => ({
    currency,
    rate,
  }));
  
  const weakest = [...formatted]
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 5);

  const strongest = [...formatted]
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 5);

  return { base: "USD", strongest, weakest };
};