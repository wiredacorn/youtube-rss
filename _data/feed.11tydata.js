let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: ['media:group']
  }
});

module.exports = (async () => {
  xmlSource = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCU0jDHRcI7NcOO3rJd9NCJg'
  let feed = await parser.parseURL('https://www.scriptbarrel.com/xml.cgi?channel_id=UCU0jDHRcI7NcOO3rJd9NCJg&name=Vintage%20City%20Church');
  
  console.log(feed.items[0]['media:group']['media:thumbnail'][0]['$'].url);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
    
  });
  return feed
  
})();