const express = require("express");
const app = express();
app.use(express.json());

let posts = [
  { id: 1, title: "First Post", content: "Welcome to my blog!" }
];

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
});

app.post("/posts", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.json(post);
});

app.get("/posts", (req, res) => res.json(posts));

app.get("/posts/:id", (req, res, next) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return next(new Error("Post not found"));
  res.json(post);
});

app.put("/posts/:id", (req, res, next) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return next(new Error("Post not found"));
  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res, next) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return next(new Error("Post not found"));
  const deleted = posts.splice(index, 1);
  res.json({ message: "Post Deleted", deleted });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route Not Found" });
});

app.use((err, req, res, next) => {
  console.error("[ERROR]", err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
