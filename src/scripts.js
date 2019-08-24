$(document).ready(() =>{
 
  let user, userRepo, hydration, hydrationRepo, sleep, sleepRepo, activity, activityRepo, date, id;

  id = 22;
  date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
  userRepo = new UserRepo(userData);
  hydrationRepo = new HydrationRepo(hydrationData);
  sleepRepo = new SleepRepo(sleepData, userData);
  activityRepo = new ActivityRepo(activityData, userData);
  user= new User(userRepo.getUser(id));
  hydration = new Hydration(hydrationRepo.getUserHydrationData(id));
  sleep = new Sleep(sleepRepo.getUserData(id));
  activity = new Activity(activityRepo.getUserActivity(id), userRepo.getUser(id));

  //functions
  //user details fns
  const getUserID = () => {
    return user.id;
  }

  const getFullName = () => {
    return user.name;
  }

  const getAddress = () => {
    return user.address;
  }

  const getEmail = () => {
    return user.email;
  }

  const getStrideLength = () => {
    return user.strideLength;
  }

  const getDailyStepGoal = () => {
    return user.dailyStepGoal;
  }

  const getAverageStepGoal = () => {
    return userRepo.calculateAverageStepGoal();
  }

  const createFriendNamesList = () => {
    const friendIDs = user.friends;
    let friendNames = '';
    friendIDs.forEach(friendID => {
      let friendName = userRepo.getUser(friendID).name;
      friendNames += `<li class='friend'>${friendName}</li>`;
    });
    return friendNames;
  }

  //hydration fns
  const getWaterToday = () => {
    return `${hydration.getFluidOuncesOnDay(date)} Ounces`;
  }

  const getAverageWaterConsumtion = () => {
    return `${hydration.getAverageFluidOunces()} Ounces`;
  }

  //sleep fns
  const getHoursSlept = () => {
    return `${sleep.getHoursSlept(date)} Hours`;
  }

  const getAvgHoursSlept = () => {
    return `${sleep.calculateAverageHoursSlept()} Hours`;
  }

  const getSleepQuality = () => {
    return sleep.getQuality(date);
  }

  const getAvgSleepQuality = () => {
    return sleep.calculateAverageSleepQuality();
  }

  //activity fns
  const getMilesWalkedToday = () => {
    return activity.getMilesWalked(date);
  }

  //header
  $('#first-name').text(user.getFirstName());
  $('#date').text(date);

  //main
  //user details
  $('#user-id').text(getUserID());
  $('#full-name').text(getFullName());
  $('#address').text(getAddress());
  $('#email').text(getEmail());
  $('#stride').text(getStrideLength());
  $('#step-goal').text(getDailyStepGoal());
  $('#step-goal-avg').text(getAverageStepGoal());
  $('#friends').append(createFriendNamesList());

  //hydration
  $('#water-today').text(getWaterToday());
  $('#water-average').text(getAverageWaterConsumtion());

  //sleep
  $('#hours-sleep').text(getHoursSlept());
  $('#avg-hours').text(getAvgHoursSlept());
  $('#quality-sleep').text(getSleepQuality());
  $('#avg-quality').text(getAvgSleepQuality());

  //activity
  $('#miles').text(getMilesWalkedToday());

  const weeklyHydrationChart = new Chart($('#water-week-chart'), {
    type: 'line',
    data: {
      labels: ['Today', 'Yesterday', '2 Days', '3 Days', '4 Days', '5 Days', '6 Days'],
      datasets: [{
        label: 'Weekly Hydration',
        data: hydration.getFluidOuncesForWeek(date),
        backgroundColor: [
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)',
          'rgba(148, 152, 152, .74)'
        ]
      }]
    },
    options: {
      defaultFontFamily: Chart.defaults.global.defaultFontFamily ='Roboto',
      responsive: false,
      maintainAspectRatio: true,
      aspectRatio: 2,
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  const compareStepsChart = new Chart($('#step-chart'), {
    type: 'horizontalBar',
    data: {
      labels: ['You', 'User Average'],
      datasets: [{
        label: 'Steps Taken Today',
        data: [activity.getStepsTaken(date), activityRepo.getAvgStepsAllUsers(date)],
        backgroundColor: [
          'blue',
          'orange'
        ]
      }]
    },
    options: {
      defaultFontFamily: Chart.defaults.global.defaultFontFamily ='Roboto',
      responsive: false,
      maintainAspectRatio: true,
      aspectRatio: 2,
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

});

