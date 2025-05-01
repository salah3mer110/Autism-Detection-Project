export async function generateBotResponse(history) {
  const formattedHistory = history.map(({ role, text }) => ({
    role,
    parts: [{ text }],
  }));
  const response = await fetch(
    process.env.REACT_APP_CHATBOT_API_URL ||
      process.env.REACT_APP_GEMINI_API_URL,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    }
  );
  if (!response.ok) throw new Error("API error");
  return response.json();
}
