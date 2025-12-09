// netlify/functions/news.js

export async function handler(event) {
  try {
    const API_KEY = process.env.NEWS_API_KEY; // 🔑 set this in Netlify env
    const q = event.queryStringParameters.q || "india";

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      q
    )}&apiKey=${API_KEY}`;

    const resp = await fetch(url);
    const data = await resp.json();

    return {
      statusCode: resp.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error("News function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
