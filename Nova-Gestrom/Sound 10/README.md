# Experiment 10 - E-Commerce Product App

## Backend
1. Create MongoDB Atlas cluster and database user.
2. Allow your development IP in Atlas Network Access.
3. Copy the connection URI.
4. Create `backend/.env` using `.env.example` and set your real `MONGO_URI`.
5. Never commit the real `.env` file.

```bash
cd backend
npm install
npm start
```

Postman POST http://localhost:5000/products with JSON:
`{"name":"Laptop","price":55000,"image":""}`

GET http://localhost:5000/products

## Frontend (second terminal)
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL displayed in the terminal.

## Deployment outline
Push to GitHub. Deploy backend on Render (root: `Experiment10/backend`, build: `npm install`, start: `npm start`) and set `MONGO_URI` in Render environment variables. Deploy frontend on Vercel/Netlify (root: `Experiment10/frontend`, build: `npm run build`, output: `dist`). Update frontend API URL to the deployed backend before deployment.
