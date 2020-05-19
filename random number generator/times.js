      //times
      randNumber = () => {
        return Math.round(Math.random() * 100)
    }

    const sampleNumbers = _.times(5, randNumber);
    console.log(sampleNumbers);