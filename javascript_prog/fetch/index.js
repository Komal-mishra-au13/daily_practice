// 1. Fetch the data from http://jsonplaceholder.typicode.com/comments
// 2. Create a new array but each object should contain only postId, body
// 3. Create a filtered array with respect to the body’s character limit to less than or 
// equal to 50 characters.
// 4. Try to analyse the data, by giving a count of posts with respect to post ID


// To fetch any json file , we have to use isomorphic-fetch module and expressjs 

import 'isomorphic-fetch';

let a = [];
let b = [];
let c = [];
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))