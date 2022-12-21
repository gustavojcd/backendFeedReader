import newFeed from '../services/feedRead';

export const listFeed = async (req, res) => {
    try {
        const allNews = await newFeed.getData();
        res.json({ data: allNews });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export const createdFeed = async (req, res) => {
    try {
        const { urlFeed } = req.body;
        await newFeed.formatNews(urlFeed);
        res.json({ message: 'ok' });
    } catch (error) {
        res.status(400).json(error.message);
    }
}