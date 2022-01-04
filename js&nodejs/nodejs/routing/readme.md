#### Routing 

### path module - will find the file from any path and show the result . 
* To use path module we have to import in our file 
  import path from 'path';

* To resolve the path issue , we can use 
const __dirname = path.resolve();


## To use static files - javascript , css, img , audio , video etc

we first make a folder "assets" -> home.css

#### For that we have to define some middleware in index.js - 
aap.use(express.static(path.join(__dirname,'foldername')));

and also we have to link the full path in html file using <link> tag.

 <link rel="stylesheet" href="http://localhost:4000/css/home.css">

here we did not hav to give assests bcoz we already join the path using path module

## we can use more that 1 folder (like asses1 , asset2 ).
we can join all the folders css , js file using app.use(express.static(__dirname,'asset1'));

### NOTE - "asset" is not a reserved for keeping css and js file.
we can give any name to this folder but "public" name giving to this folder is good practice