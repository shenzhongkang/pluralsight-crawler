import fs from 'fs';
import superagent from 'superagent';
import cheerio from 'cheerio';

export interface IArticles {
  title: string;
  href: string;
  created_at: string;
}

class Crawler {
  private url = 'https://www.pluralsight.com/guides';

  constructor() {
    this.getRawHtml();
  }

  async getRawHtml() {
    const res = await superagent.get(this.url);
    this.getInfo(res.text);
  }

  getInfo(html: string) {
    const $ = cheerio.load(html);
    const cards = $('.card-container > .card');
    const articles: IArticles[] = [];
    cards.map((index, element) => {
      articles.push({
        title: $(element).find('.title').eq(0).text(),
        href: `https://www.pluralsight.com${$(element).find('a').attr('href')}`,
        created_at: $(element).find('ul.meta li').eq(0).text()
      });
    });
    fs.writeFileSync('data.json', JSON.stringify(articles));
  }
}

new Crawler();