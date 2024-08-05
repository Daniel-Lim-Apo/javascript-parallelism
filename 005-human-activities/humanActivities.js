// Simulate completing a task with a delay
const completeTask = (activity, task, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${activity} - ${task} completed in ${delay}ms`);
      }, delay);
    });
  };
  
  // Define multiple tasks for each activity
  const exerciseTasks = [
    completeTask('Exercise', 'Warm-up', 500),
    completeTask('Exercise', 'Running', 2000),
    completeTask('Exercise', 'Cool-down', 700)
  ];
  
  const cookingTasks = [
    completeTask('Cooking', 'Chopping vegetables', 1000),
    completeTask('Cooking', 'Cooking pasta', 1500),
    completeTask('Cooking', 'Preparing sauce', 1200)
  ];
  
  const studyingTasks = [
    completeTask('Studying', 'Reading chapter', 1800),
    completeTask('Studying', 'Taking notes', 1000),
    completeTask('Studying', 'Reviewing material', 1400)
  ];
  
  // Execute all tasks for each activity in parallel
  const allExerciseTasks = Promise.all(exerciseTasks);
  const allCookingTasks = Promise.all(cookingTasks);
  const allStudyingTasks = Promise.all(studyingTasks);
  
  // Execute all activities in parallel and process the results
  Promise.all([allExerciseTasks, allCookingTasks, allStudyingTasks])
    .then((allResults) => {
      console.log('All activities completed:');
      
      const exerciseResults = allResults[0];
      const cookingResults = allResults[1];
      const studyingResults = allResults[2];
  
      console.log('Exercise results:');
      exerciseResults.forEach((result) => console.log(result));
  
      console.log('Cooking results:');
      cookingResults.forEach((result) => console.log(result));
  
      console.log('Studying results:');
      studyingResults.forEach((result) => console.log(result));
      
      // Further processing of the results can be done here
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  