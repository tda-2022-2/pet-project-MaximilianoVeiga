const API_KEY = "f9549544d0db48bf98a5da869488be99";

export async function getNews(page = 1, pageSize = 20) {
  const query = "guerra ucrânia";
  const response = await fetch(
    `https://newsapi.org/v2/everything?page=${page}&q=${query}&pageSize=${pageSize}&excludeDomains=publico.pt&apiKey=${API_KEY}`
  );
  const { articles } = await response.json();

  return articles;
}
