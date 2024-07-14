const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/bbc-news', async (req, res) => {
  try {
    const response = await fetch('https://feeds.bbci.co.uk/news/world/rss.xml');
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error('Error fetching BBC News RSS feed:', error);
    res.status(500).send('Error fetching BBC News RSS feed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
