// Simulate fetching data from an API
const fetchData = (apiName, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data from ${apiName} fetched in ${delay}ms`);
      }, delay);
    });
  };
  
  // Define multiple API calls with different delays
  const fetchCropsData = fetchData('Crops API', 2000);
  const fetchWeatherData = fetchData('Weather API', 200);
  const fetchSoilData = fetchData('Soil API', 3000);
  
  // Execute the API calls in parallel using Promise.all()
  Promise.all([fetchCropsData, fetchWeatherData, fetchSoilData])
    .then((results) => {
      console.log('All agrobusiness data fetched:');
      results.forEach((result) => console.log(result));
      
      // Here you can further process the fetched data
      const cropsData = results[0];
      const weatherData = results[1];
      const soilData = results[2];
      
      // Example of processing the fetched data
      console.log(`Processing ${cropsData}, ${weatherData}, and ${soilData}`);
    })
    .catch((error) => {
      console.error('An error occurred while fetching agrobusiness data:', error);
    });
  