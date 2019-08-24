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

  $('#first-name').text(user.getFirstName())


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
        defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Roboto'",
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
})