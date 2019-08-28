$(document).ready(() =>{
 
  let user, userRepo, hydration, hydrationRepo, sleep, sleepRepo, activity, activityRepo, date, id, today, friends, friendSteps, friendNames, stepWinnerIndex;

  id = null;
  
  
  //functions
  //data fns
  const createData = () => {
    today = new Date().toString().split(' ').slice(0,4).join(' ');
    date = new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/');
    userRepo = new UserRepo(userData);
    hydrationRepo = new HydrationRepo(hydrationData);
    sleepRepo = new SleepRepo(sleepData, userData);
    activityRepo = new ActivityRepo(activityData, userData);
    user = new User(userRepo.getUser(id));
    hydration = new Hydration(hydrationRepo.getUserHydrationData(id));
    sleep = new Sleep(sleepRepo.getUserData(id));
    activity = new Activity(activityRepo.getUserActivity(id), userRepo.getUser(id));
  }

  //header fns
  const appendHeaderData = () =>{
    $('#first-name').text(user.getFirstName());
    $('#date').text(today);
    $('.welcome').show();
  }

  //user details fns
  const appendUserDetails = () => {
    $('#user-id').text(getUserID());
    $('#full-name').text(getFullName());
    $('#address').text(getAddress());
    $('#email').text(getEmail());
    $('#stride').text(getStrideLength());
    $('#step-goal').text(getDailyStepGoal());
    $('#step-goal-avg').text(getAverageStepGoal());
    $('#friends').html('');
    $('#friends').append(createFriendNamesList());
    $('#profile-img').show();
    $('#user-details').slideUp();
  }

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
  const appendHydrationData = () => {
    $('#water-today').text(getWaterToday());
    $('#water-average').text(getAverageWaterConsumtion());
    $('#hydration-img').show();
    $('#hydration').slideUp();
  }

  Chart.defaults.global.defaultFontColor = 'rgb(255,255,255)';
  Chart.defaults.global.defaultFontFamily ='Roboto';

  const appendHydrationChart = () => {
    const weeklyHydrationChart = new Chart($('#water-week-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Ounces',
          data: hydration.getFluidOuncesForWeek(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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
  }

  const getWaterToday = () => {
    return `${hydration.getFluidOuncesOnDay(date)} Ounces`;
  }

  const getAverageWaterConsumtion = () => {
    return `${hydration.getAverageFluidOunces()} Ounces`;
  }

  //sleep fns
  const appendSleepData = () => {
    $('#hours-sleep').text(getHoursSlept());
    $('#avg-hours').text(getAvgHoursSlept());
    $('#quality-sleep').text(getSleepQuality());
    $('#avg-quality').text(getAvgSleepQuality());
    $('#good-sleepers').text(sleepRepo.usersAvgSleepQualityGreaterThree(date))
    $('#sleep-img').show();
    $('#sleep').slideUp();
  }

  const appendSleepCharts = () => {
    const weeklyHoursSleepChart = new Chart($('#hours-sleep-week-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Hours',
          data: sleep.getSleepHoursForWeek(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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

    const weeklySleepQualityChart = new Chart($('#sleep-quality-week-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Quality',
          data: sleep.getSleepQualityForWeek(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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
  }

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
  const appendActivityData = () => {
    friends = user.friends;
    friendSteps = [];
    friends.forEach(friend => {
      const totalSteps = activityRepo.getTotalStepsForWeek(date, friend);
      friendSteps.push(totalSteps);
    });
    friendNames = userRepo.getFriendNames(user.friends);
    stepWinnerIndex = activityRepo.getTotalStepWinnerIndex(friendSteps);

    $('#miles').text(getMilesWalkedToday());
    $('#step-increase').text(activity.getThreeDayStepTrends());
    $('#stair-increase').text(activity.getThreeDayStairTrends());
    $('#step-goal-reached').text(activity.checkStepGoal(date));
    $('#total-step-winner').text(`${friendNames[stepWinnerIndex]} Wins This Week For Most Steps!`);
    $('#activity-img').show();
    $('#activity').slideUp();
  }

  const appendActivityCharts = () => {
    const compareStepsChart = new Chart($('#step-chart'), {
      type: 'horizontalBar',
      data: {
        labels: ['You', 'User Average'],
        datasets: [{
          label: 'Steps',
          data: [activity.getStepsTaken(date), activityRepo.getAvgStepsAllUsers(date)],
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2
        }]
      },
      options: {
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

    const compareMinutesChart = new Chart($('#minutes-chart'), {
      type: 'horizontalBar',
        data: {
          labels: ['You', 'User Average'],
          datasets: [{
            label: 'Minutes',
            data: [activity.getMinutesActive(date), activityRepo.getAvgMinActiveAllUsers(date)],
            backgroundColor: 'rgba(240, 147, 43, .5)',
            borderColor: 'rgba(34, 166, 179, 1)',
            borderWidth: 2
          }]
        },
        options: {
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

    const compareStairsChart = new Chart($('#stairs-chart'), {
      type: 'horizontalBar',
        data: {
          labels: ['You', 'User Average', 'Your Record'],
          datasets: [{
            label: 'Flights of Stairs',
            data: [activity.getFlightsOfStairs(date), activityRepo.getAvgStairsAllUsers(date), activity.getUserStairRecord()],
            backgroundColor: 'rgba(240, 147, 43, .5)',
            borderColor: 'rgba(34, 166, 179, 1)',
            borderWidth: 2
          }]
        },
        options: {
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

    const friendStepsChart = new Chart($('#friend-steps'), {
      type: 'horizontalBar',
        data: {
          labels: friendNames,
          datasets: [{
            label: 'Steps',
            data: friendSteps,
            backgroundColor: 'rgba(240, 147, 43, .5)',
            borderColor: 'rgba(34, 166, 179, 1)',
            borderWidth: 2
          }]
        },
        options: {
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

  const weeklyMinutesChart = new Chart($('#week-minutes-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Minutes',
          data: activity.getWeekMinActive(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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

    const weeklyStepsChart = new Chart($('#week-steps-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Steps',
          data: activity.getWeekSteps(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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

    const weeklyStairsChart = new Chart($('#week-stairs-chart'), {
      type: 'line',
      data: {
        labels: ['6 Days', '5 Days', '4 Days', '3 Days', '2 Days', 'Yesterday', 'Today'],
        datasets: [{
          label: 'Flights of Stairs',
          data: activity.getWeekStairs(date),
          backgroundColor: 'rgba(240, 147, 43, .5)',
          borderColor: 'rgba(34, 166, 179, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(255,255,255)'
        }]
      },
      options: {
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
  }

  const getMilesWalkedToday = () => {
    return activity.getMilesWalked(date);
  }

  //header
  // $('.welcome').hide();
  // $('.today').hide();

  //main
  //User Selection 
  $('#user-selection-button').prop('disabled' , true);
  $('#user-id-input').keyup(function() {
    let value = $(this).val();
    if( value.match(/[0-9]/g) !== null && Number(value) <= 50 ) {
      $('#user-selection-button').prop('disabled' , false);
    } else {
      $('#user-selection-button').prop('disabled', true)
    }
  });
  $('#user-selection-button').click(function() {
    id = Number($(this).siblings()[1].value);
    $('#user-id-input').val('');
    createData();
    appendHeaderData();
    appendUserDetails();
    appendHydrationData();
    appendHydrationChart();
    appendSleepData();
    appendSleepCharts();
    appendActivityData();
    appendActivityCharts();
  });
  
  //user details
  $('#profile-img').click(function() {
    $('#user-details').slideToggle(500);
  });

  //hydration
  $('#hydration-img').click(function() {
    $('#hydration').slideToggle(500);
  });
  
  //sleep
  $('#sleep-img').click(function() {
    $('#sleep').slideToggle(500);
  });

  //sleep charts
  
  //activity
  $('#activity').hide();
  $('#activity-img').click(function () {
      $('#activity').slideToggle(500);
  });

});
