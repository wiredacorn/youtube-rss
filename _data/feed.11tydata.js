let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['media:group']
  }
});

module.exports = (async () => {

  let feed = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCU0jDHRcI7NcOO3rJd9NCJg');
  
  console.log(feed.items[0]['media:group']['media:thumbnail'][0]['$'].url);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
    
  });
  return feed
  
})();