const sleepData = [
  {
    "userID": 1,
    "date": "2019/07/08",
    "hoursSlept": 2,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/07/08",
    "hoursSlept": 8,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/07/08",
    "hoursSlept": 3,
    "sleepQuality": 1
  },
  {
    "userID": 4,
    "date": "2019/07/08",
    "hoursSlept": 6,
    "sleepQuality": 5
  },
  {
    "userID": 5,
    "date": "2019/07/08",
    "hoursSlept": 6,
    "sleepQuality": 4
  },
  {
    "userID": 1,
    "date": "2019/07/09",
    "hoursSlept": 7,
    "sleepQuality": 5
  },
  {
    "userID": 2,
    "date": "2019/07/09",
    "hoursSlept": 8,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/07/09",
    "hoursSlept": 11,
    "sleepQuality": 5
  },
  {
    "userID": 4,
    "date": "2019/07/09",
    "hoursSlept": 1,
    "sleepQuality": 1
  },
  {
    "userID": 5,
    "date": "2019/07/09",
    "hoursSlept": 8,
    "sleepQuality": 2
  },
  {
    "userID": 1,
    "date": "2019/07/10",
    "hoursSlept": 3,
    "sleepQuality": 4
  },
  {
    "userID": 2,
    "date": "2019/07/10",
    "hoursSlept": 5,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/07/10",
    "hoursSlept": 1,
    "sleepQuality": 4
  },
  {
    "userID": 4,
    "date": "2019/07/10",
    "hoursSlept": 8,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/07/10",
    "hoursSlept": 10,
    "sleepQuality": 3
  },
  {
    "userID": 1,
    "date": "2019/07/11",
    "hoursSlept": 11,
    "sleepQuality": 4
  },
  {
    "userID": 2,
    "date": "2019/07/11",
    "hoursSlept": 8,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/07/11",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 4,
    "date": "2019/07/11",
    "hoursSlept": 8,
    "sleepQuality": 1
  },
  {
    "userID": 5,
    "date": "2019/07/11",
    "hoursSlept": 1,
    "sleepQuality": 1
  },
  {
    "userID": 1,
    "date": "2019/07/12",
    "hoursSlept": 5,
    "sleepQuality": 5
  },
  {
    "userID": 2,
    "date": "2019/07/12",
    "hoursSlept": 2,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/07/12",
    "hoursSlept": 1,
    "sleepQuality": 2
  },
  {
    "userID": 4,
    "date": "2019/07/12",
    "hoursSlept": 8,
    "sleepQuality": 5
  },
  {
    "userID": 5,
    "date": "2019/07/12",
    "hoursSlept": 1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/07/13",
    "hoursSlept": 7,
    "sleepQuality": 6
  },
  {
    "userID": 2,
    "date": "2019/07/13",
    "hoursSlept": 5,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/07/13",
    "hoursSlept": 7,
    "sleepQuality": 6
  },
  {
    "userID": 4,
    "date": "2019/07/13",
    "hoursSlept": 3,
    "sleepQuality": 6
  },
  {
    "userID": 5,
    "date": "2019/07/13",
    "hoursSlept": 5,
    "sleepQuality": 6
  },
  {
    "userID": 1,
    "date": "2019/07/14",
    "hoursSlept": 7,
    "sleepQuality": 7
  },
  {
    "userID": 2,
    "date": "2019/07/14",
    "hoursSlept": 6,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/07/14",
    "hoursSlept": 8,
    "sleepQuality": 7
  },
  {
    "userID": 4,
    "date": "2019/07/14",
    "hoursSlept": 4,
    "sleepQuality": 7
  },
  {
    "userID": 5,
    "date": "2019/07/14",
    "hoursSlept": 6,
    "sleepQuality": 7
  },
  {
    "userID": 1,
    "date": "2019/07/15",
    "hoursSlept": 8,
    "sleepQuality": 8
  },
  {
    "userID": 2,
    "date": "2019/07/15",
    "hoursSlept": 10,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/07/15",
    "hoursSlept": 10,
    "sleepQuality": 6
  },
  {
    "userID": 4,
    "date": "2019/07/15",
    "hoursSlept": 7,
    "sleepQuality": 1
  },
  {
    "userID": 5,
    "date": "2019/07/15",
    "hoursSlept": 4,
    "sleepQuality": 4
  },
  {
    "userID": 1,
    "date": "2019/07/16",
    "hoursSlept": 2,
    "sleepQuality": 6
  },
  {
    "userID": 2,
    "date": "2019/07/16",
    "hoursSlept": 4,
    "sleepQuality": 1
  },
  {
    "userID": 3,
    "date": "2019/07/16",
    "hoursSlept": 4,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/07/16",
    "hoursSlept": 5,
    "sleepQuality": 1
  },
  {
    "userID": 5,
    "date": "2019/07/16",
    "hoursSlept": 4,
    "sleepQuality": 6
  },
  ];

  module.exports = sleepData;  