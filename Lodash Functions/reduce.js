      // reduce
      const sum = _.reduce([1, 2, 3], function(total, num) {
        return total + num;
      }, 0);
  // ##################################################################################
      const homerunStats = [
        { name: 'Bregman, A',  hr: 19 },
        { name: 'Altuve, J',   hr: 24 },
        { name: 'Springer, G', hr: 34 },
        { name: 'Gurriel, Y',  hr: 18 },
        { name: 'Gonzalez, M', hr: 23 }
      ];
  
      const totalHomeruns = _.reduce(homerunStats, function(total, player) {
        return total + player.hr;
      }, 0);
  // /////////////////////////////////////////////////////////////////////////////////////////
      const links = [
        "https://google.com",
        "https://devcamp.com",
        "https://airbnb.com"
      ];
  
      const webLinks = _.reduce(links, function(content, link) {
        return `<a href='${link}'>${link}</a><br>`.concat(content);
      }, '');
  