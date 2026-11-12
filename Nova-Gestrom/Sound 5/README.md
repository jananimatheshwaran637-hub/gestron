# Experiment 5 - Food Delivery Menu CRUD

Start local MongoDB. Run `npm install` and `npm start`.

Postman:
1. POST /restaurants with `{"name":"Spicy Hut","location":"Chennai","rating":4.5}`
2. Copy restaurant `_id`.
3. POST /menu with `{"restaurantId":"RESTAURANT_ID_HERE","name":"Chicken Biryani","price":180,"category":"Main Course"}`
4. GET /menu
5. PUT /menu/MENU_ITEM_ID with `{"price":200}`
6. DELETE /menu/MENU_ITEM_ID

Replace ID placeholders with actual IDs.
