const mockActivity = [
  {
    "userID": 1,
    "date": "2019/07/08",
    "numSteps": 3500,
    "minutesActive": 140,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/07/08",
    "numSteps": 4200,
    "minutesActive": 130,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/07/08",
    "numSteps": 7400,
    "minutesActive": 110,
    "flightsOfStairs": 33
  },
  {
    "userID": 4,
    "date": "2019/07/08",
    "numSteps": 3400,
    "minutesActive": 90,
    "flightsOfStairs": 5
  },
  {
    "userID": 5,
    "date": "2019/07/08",
    "numSteps": 11300,
    "minutesActive": 210,
    "flightsOfStairs": 13
  },
  {
    "userID": 1,
    "date": "2019/07/09",
    "numSteps": 5500,
    "minutesActive": 120,
    "flightsOfStairs": 20
  },
  {
    "userID": 2,
    "date": "2019/07/09",
    "numSteps": 6700,
    "minutesActive": 160,
    "flightsOfStairs": 20
  },
  {
    "userID": 3,
    "date": "2019/07/09",
    "numSteps": 2400,
    "minutesActive": 150,
    "flightsOfStairs": 22
  },
  {
    "userID": 4,
    "date": "2019/07/09",
    "numSteps": 1200,
    "minutesActive": 70,
    "flightsOfStairs": 5
  },
  {
    "userID": 5,
    "date": "2019/07/09",
    "numSteps": 6000,
    "minutesActive": 140,
    "flightsOfStairs": 15
  },
  {
    "userID": 1,
    "date": "2019/07/10",
    "numSteps": 4600,
    "minutesActive": 170,
    "flightsOfStairs": 20
  },
  {
    "userID": 2,
    "date": "2019/07/10",
    "numSteps": 6300,
    "minutesActive": 180,
    "flightsOfStairs": 30
  },
  {
    "userID": 3,
    "date": "2019/07/10",
    "numSteps": 2900,
    "minutesActive": 120,
    "flightsOfStairs": 10
  },
  {
    "userID": 4,
    "date": "2019/07/10",
    "numSteps": 5500,
    "minutesActive": 140,
    "flightsOfStairs": 25
  },
  {
    "userID": 5,
    "date": "2019/07/10",
    "numSteps": 8700,
    "minutesActive": 200,
    "flightsOfStairs": 20
  },
  {
    "userID": 1,
    "date": "2019/07/11",
    "numSteps": 5300,
    "minutesActive": 120,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/07/11",
    "numSteps": 9400,
    "minutesActive": 230,
    "flightsOfStairs": 25
  },
  {
    "userID": 3,
    "date": "2019/07/11",
    "numSteps": 3400,
    "minutesActive": 110,
    "flightsOfStairs": 30
  },
  {
    "userID": 4,
    "date": "2019/07/11",
    "numSteps": 6300,
    "minutesActive": 170,
    "flightsOfStairs": 20
  },
  {
    "userID": 5,
    "date": "2019/07/11",
    "numSteps": 8200,
    "minutesActive": 220,
    "flightsOfStairs": 25
  },
  {
    "userID": 1,
    "date": "2019/07/12",
    "numSteps": 10000,
    "minutesActive": 240,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/07/12",
    "numSteps": 8000,
    "minutesActive": 180,
    "flightsOfStairs": 20
  },
  {
    "userID": 3,
    "date": "2019/07/12",
    "numSteps": 12000,
    "minutesActive": 200,
    "flightsOfStairs": 30
  },
  {
    "userID": 4,
    "date": "2019/07/12",
    "numSteps": 8700,
    "minutesActive": 210,
    "flightsOfStairs": 15
  },
  {
    "userID": 5,
    "date": "2019/07/12",
    "numSteps": 5800,
    "minutesActive": 220,
    "flightsOfStairs": 17
  },
  {
    "userID": 1,
    "date": "2019/07/13",
    "numSteps": 13000,
    "minutesActive": 240,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/07/13",
    "numSteps": 7000,
    "minutesActive": 180,
    "flightsOfStairs": 23
  },
  {
    "userID": 3,
    "date": "2019/07/13",
    "numSteps": 4900,
    "minutesActive": 150,
    "flightsOfStairs": 19
  },
  {
    "userID": 4,
    "date": "2019/07/13",
    "numSteps": 6400,
    "minutesActive": 140,
    "flightsOfStairs": 31
  },
  {
    "userID": 5,
    "date": "2019/07/13",
    "numSteps": 9000,
    "minutesActive": 230,
    "flightsOfStairs": 26
  },
  {
    "userID": 1,
    "date": "2019/07/14",
    "numSteps": 3700,
    "minutesActive": 110,
    "flightsOfStairs": 17
  },
  {
    "userID": 2,
    "date": "2019/07/14",
    "numSteps": 5600,
    "minutesActive": 130,
    "flightsOfStairs": 12
  },
  {
    "userID": 3,
    "date": "2019/07/14",
    "numSteps": 8400,
    "minutesActive": 220,
    "flightsOfStairs": 28
  },
  {
    "userID": 4,
    "date": "2019/07/14",
    "numSteps": 4300,
    "minutesActive": 150,
    "flightsOfStairs": 24
  },
  {
    "userID": 5,
    "date": "2019/07/14",
    "numSteps": 6900,
    "minutesActive": 190,
    "flightsOfStairs": 21
  },
  {
    "userID": 1,
    "date": "2019/07/15",
    "numSteps": 7300,
    "minutesActive": 140,
    "flightsOfStairs": 26
  },
  {
    "userID": 2,
    "date": "2019/07/15",
    "numSteps": 9400,
    "minutesActive": 230,
    "flightsOfStairs": 20
  },
  {
    "userID": 3,
    "date": "2019/07/15",
    "numSteps": 12000,
    "minutesActive": 260,
    "flightsOfStairs": 30
  },
  {
    "userID": 4,
    "date": "2019/07/15",
    "numSteps": 8300,
    "minutesActive": 170,
    "flightsOfStairs": 32
  },
  {
    "userID": 5,
    "date": "2019/07/15",
    "numSteps": 10600,
    "minutesActive": 220,
    "flightsOfStairs": 19
  },  
  {
    "userID": 1,
    "date": "2019/07/16",
    "numSteps": 7500,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/07/16",
    "numSteps": 9100,
    "minutesActive": 210,
    "flightsOfStairs": 15
  },
  {
    "userID": 3,
    "date": "2019/07/16",
    "numSteps": 8200,
    "minutesActive": 160,
    "flightsOfStairs": 29
  },
  {
    "userID": 4,
    "date": "2019/07/16",
    "numSteps": 6300,
    "minutesActive": 200,
    "flightsOfStairs": 27
  },
  {
    "userID": 5,
    "date": "2019/07/16",
    "numSteps": 5400,
    "minutesActive": 180,
    "flightsOfStairs": 22
  }
];

module.exports = mockActivity;