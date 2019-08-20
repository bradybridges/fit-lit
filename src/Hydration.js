class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  } 

  getAverageFluidOunces() {
    let totalOunces = this.hydrationData.reduce((acc, hydration) => {
      acc += hydration.numOunces;
      return acc;
    }, 0);

    return Math.floor(totalOunces / this.hydrationData.length);
  }

  getFluidOuncesOnDay(date) {
    return this.hydrationData.find(hydration => hydration.date === date).numOunces;
  }

  getFluidOuncesForWeek(date) {
    const startIndex = this.hydrationData.findIndex(hydration => hydration.date === date) - 6;
    
    return this.hydrationData.reduce((acc, hydration, index) => {
      if(index >= startIndex && index <= startIndex + 6) {
        acc.push(hydration.numOunces);
      }
      return acc;
    }, []);
    

  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}