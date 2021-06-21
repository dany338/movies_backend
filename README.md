# Test Backend

-- ubuntu

1. apt updates
2. apt install curl -y
3. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
4. nvm --version
5. nvm install 14.16.1
6. node -v

-- ubuntu (administrator)

1. sudo apt updates
2. sudo apt install curl -y
3. sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
4. sudo nvm --version
5. sudo nvm install 14.16.1
6. node -v

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose up` command
3. Run `npm start` command

Steps to run endpoints in postman:
http://localhost:3000/users
http://localhost:3000/auth
http://localhost:3000/movies

1. endpoints for user:

1.1. User List: GET http://localhost:3000/users/
1.2. User Id: GET http://localhost:3000/users/:id
1.3. User List by page: GET http://localhost:3000/users/page/:page
1.4. User Create: POST http://localhost:3000/users/
1.5. User Update: PUT http://localhost:3000/users/:id
1.6. User Update: DELETE http://localhost:3000/users/:id

2. endpoints for auth:

2.1. User List: GET http://localhost:3000/auth/login
2.2. User Id: GET http://localhost:3000/auth/request-new-access-token/:refreshToken

3. endpoints for movie:

3.1. Movie List: GET http://localhost:3000/movies/
3.2. Movie Id: GET http://localhost:3000/movies/:id
3.3. Movie List by page: GET http://localhost:3000/movies/page/:page
3.4. Movie Create: POST http://localhost:3000/movies/
3.5. Movie Update: PUT http://localhost:3000/movies/:id
3.6. Movie Update: DELETE http://localhost:3000/movies/:id

diagrams from diagram.net:

https://app.diagrams.net/#G1cM-MdIOoNTJVVJTYiIsrBZmlF0KPNJNS

review this folder diagrams