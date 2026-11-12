# Experiment 7 - JWT Authentication API

Start local MongoDB. Run `npm install` and `npm start`.

Postman:
1. POST /register JSON: `{"name":"John Doe","email":"john@gmail.com","password":"123456"}`
2. POST /login JSON: `{"email":"john@gmail.com","password":"123456"}`
3. Copy token. GET /profile with header `Authorization: YOUR_JWT_TOKEN`.

The lab manual expects the raw token in Authorization (no Bearer prefix). `secretkey` is for practice only; use a secure environment variable in real deployments.
