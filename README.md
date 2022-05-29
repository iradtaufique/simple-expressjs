# simple-expressjs app

this is a simple crud  express api app where you can create a member, get single member, update a member and delete member

the application contains also tempete engine `express-handers` which is used to render `HTML` templates.

## installation

1.`clone app` or download zip file
2. run `npm install` to install the dependencies
3. the run `npm run dev` to start server using `nodemon` pachage
4. view app in browser by `http://localhost:5000`

### api routes in postman
1. retrieve all members by making a `get request` on `/api/members/`
2. creating member make a `post request` on `/api/members`
3. retrieve single member make a `get request` on `/api/members/<id>` example `/api/members/1` to get user with id 1
4. update member make a `put request` on `/api/members/<id>`
5. delete a member make a `delete request` on `/api/members/<id>`


