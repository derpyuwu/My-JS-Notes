      //keyby
      const roster = [
        { position: '3B', name: 'Bregman, A' },
        { position: '2B', name: 'Altuve, J' },
        { position: 'CF', name: 'Springer, G' },
        { position: '1B', name: 'Gurriel, Y' },
        { position: 'LF', name: 'Gonzalez, M' }
      ]
        const positions = _.keyBy(roster, 'position');
  
        const secondBase = positions['2B']
        console.log(secondBase);