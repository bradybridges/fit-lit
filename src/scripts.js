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
})