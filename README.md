# My Mission for backend-challenge
Write a Node.js REST API application that handles the following:
- Search for an artist by name based on the following endpoint artist.search, return all the results for this artist.
- Writes the result to a user-supplied CSV filename.
- The CSV file should include the following information (name, mbid, url, image_small, image).
- If no results returned from the artist.search endpoint, retrieve random artist names from a JSON dictionary source.


## Setup

- Clone this repo
  ```
  git clone https://github.com/WHL99/backend-challenge.git
  ```
- Open the file and start:

  ```
  cd backend-challenge
  ```
  Install all npm package: 
  ```
  npm install
  ```
  Go to package.json file to replace "scripte" as the following, therefore it will automatically restarting the node application when file changes in the directory are detected:
  ```
   "scripts": {
    "devStart": "nodemon server.js"
  }
  ```
- Visit Last FM wetsite https://www.last.fm/login?next=/api/account/create to create an account, then you will have an API_KEY. Paste this API_KEY into .env file. 
- Create ```.env``` file with the following variables:
  ```
  PORT
  API_KEY
  ```
- Create ```.gitignore``` file with the following file names, we don't want people to see these files in the repo:
  ```
  .env
  node_modules
  .DS_Store
  ```
- Run this command:
  ```
  npm run devStart
  ```

## 
Now you have it&nbsp;&nbsp;&nbsp;🎉&nbsp;&nbsp;&nbsp;🎶 <br>
Thank you for reading and happy coding &nbsp;💚
