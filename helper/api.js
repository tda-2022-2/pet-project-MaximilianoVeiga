const API_KEY = "f9549544d0db48bf98a5da869488be99";

export async function getNews(page = 1, pageSize = 20) {
  const query = "guerra ucrânia";
  const response = await fetch(
    `https://newsapi.org/v2/everything?&page=${page}&q=${query}&pageSize=${pageSize}&apiKey=${API_KEY}`
  );
  const { articles } = await response.json();

  return articles.map((article) => {
    if (article.urlToImage?.includes("BarraFacebook_Publico") || !article.urlToImage) {
      article.urlToImage = "https://ecfr.eu/wp-content/uploads/2022/02/26797805236_b4762633a0_o-1-1-864x486-c-center.png";
    }
    return article;
  });
}
