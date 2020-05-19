    // random
    lodashRandNumber = () => {
        return _.random(1, 100);
      }
  
      const lodashSampleNumbers = _.times(5, lodashRandNumber);
  
      console.log(lodashSampleNumbers);