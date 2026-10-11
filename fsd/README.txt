FSD experiment files

Each Experiment-N folder has original/ and short/ versions. Use the matching folder's files as a complete version.

Experiments 1-3: open index.html in a browser. Experiment 2 fetches weather.json; browsers may block local fetch requests, so serve the folder through a local web server.
Experiment 3 references photo.jpg, which was not included in the supplied PDF. Add your own photo.jpg to display a profile image.
Experiment 4: run node server.js; visit http://localhost:3000/api/products.
Experiments 5-6: in the chosen version's directory, install dependencies with npm install express mongoose dotenv, copy .env.example to .env, set CONNECTION_STRING to your MongoDB URI, then run node app.js. Experiment 5 listens on port 5000; Experiment 6 listens on port 3000.
