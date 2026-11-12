const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const weatherData = {
  chennai: { temp: "34°C", condition: "Sunny" },
  mumbai: { temp: "30°C", condition: "Humid" },
  delhi: { temp: "28°C", condition: "Cloudy" }
};

app.get("/weather/:city", (req, res) => {
  const city = req.params.city.toLowerCase();
  if (weatherData[city]) {
    res.json({ city, ...weatherData[city] });
  } else {
    res.status(404).json({ error: "City not found" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Weather API running on http://localhost:${PORT}`);
});
