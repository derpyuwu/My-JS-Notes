    // filter
    const players = [
        { name: 'Bregman, A',  battingAverage: 0.284 },
        { name: 'Altuve, J',   battingAverage: 0.346 },
        { name: 'Springer, G', battingAverage: 0.283 },
        { name: 'Gurriel, Y',  battingAverage: 0.299 },
        { name: 'Gonzalez, M', battingAverage: 0.303 }
      ];
  
      const over300 = _.filter(players, player => {
          return player.battingAverage > 0.300;
      });
  
      console.log(over300);