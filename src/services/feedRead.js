import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

let parser = new Parser();

class ObjFeed {
  constructor(filename) {
    this.filename = filename
  }
  async getData() {
    const data = await fs.promises.readFile(this.filename, 'utf-8');
    return JSON.parse(data);
  }
  async saveData(feeds) {
    await fs.promises.writeFile(this.filename, JSON.stringify(feeds, null, '\t'));
  }
  async getNews(feedUrl) {
    const data = await parser.parseURL(feedUrl);
    return data;
  }
  async formatNews(feedUrl) {
    const data = await this.getNews(feedUrl);
    const feed = [];
    data.items.forEach(item => {
      const element = {
        title: item.title,
        contentSnippet: item.contentSnippet,
        link: item.link,
        pubDate: item.pubDate
      }
      feed.push(element);
    });
    await this.saveData(feed)
  }
}

const dirNews = path.join(__dirname, '../../data/')
const newFeed = new ObjFeed(dirNews + 'news.json');

export default newFeed;