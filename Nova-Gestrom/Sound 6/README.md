# Experiment 6 - Users and Orders

Start local MongoDB, then run `npm install` and `npm start`.

Postman:
1. POST /users with `{"name":"Arun Kumar","email":"arun@gmail.com","phone":"9876543210"}`
2. Copy returned user `_id`.
3. POST /orders with `{"userId":"USER_ID_HERE","product":"Laptop","quantity":1,"price":55000,"status":"Delivered"}`
4. GET /users/USER_ID_HERE/orders

Replace USER_ID_HERE with the actual ID.
