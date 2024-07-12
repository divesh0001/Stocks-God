const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const RSS_URL = 'https://www.livemint.com/rss/news';

app.get('/rss', async (req, res) => {
    try {
        const parser = new Parser();
        const response = await axios.get(RSS_URL);
        const feed = await parser.parseString(response.data);
        console.log('Feed items:', feed.items); // Debugging line
        res.json(feed.items);
    } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
        res.status(500).json({ error: 'Error fetching or parsing RSS feed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
