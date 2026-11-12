# Experiment 8 - Blogging Platform API

Run `npm install` and `npm start`.

Postman:
- POST /posts JSON: `{"title":"My First Blog","content":"Hello blog"}`
- GET /posts
- GET /posts/1
- PUT /posts/1 JSON: `{"title":"Updated title"}`
- DELETE /posts/1
- GET /unknown to test 404.

Posts are stored in memory and reset when the server restarts.
