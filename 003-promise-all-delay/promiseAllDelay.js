// Simulate an asynchronous operation
const asyncOperation = (id, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Operation ${id} completed in ${delay}ms`);
      }, delay);
    });
  };
  
  // Define multiple asynchronous operations with different delays
  const operation1 = asyncOperation(1, 500);
  const operation2 = asyncOperation(2, 4000);
  const operation3 = asyncOperation(3, 1500);
  
  // Execute the operations in parallel using Promise.all()
  Promise.all([operation1, operation2, operation3])
    .then((results) => {
      console.log('All operations completed:');
      results.forEach((result) => console.log(result));
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  