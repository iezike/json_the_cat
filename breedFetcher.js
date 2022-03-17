const request = require('request');
const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    return console.log(`Request failed, error: ${error}`); // print this error message if url is not found
  }
  const data = JSON.parse(body);  // converts url resource to object (array) so we can access it.
  const breed = data[0];   // Extract the object inside the array
  if (breed) {
    console.log(breed.description); // print the value from the description key.
  } else {
    console.log("This breed not found"); // print this error message if no problem with url but breed not found.
  }
});
