export const formatNews = data => {
  const result = {};

  if (data.items) {
    result.news = data.items.map(item => {
      return {
        title: item.title,
        source: "vnexpress.net",
        thumbnail: item.thumbnail,
        time: item.pubDate,
        link: item.link,
        content: item.description.split("</a>")[1],
      };
    });
  }

  return result;
};