const API_APP = process.env['API_APP'];
const fetchArticles = async (setArticles, setLoading) => {
  try {
    // Gọi API lấy danh sách bài viết
    const res = await fetch(`${API_APP}/v1/api/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setArticles(data.data.articles);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export default fetchArticles;
