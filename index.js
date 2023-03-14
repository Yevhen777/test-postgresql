const express = require("express");
const articleRouter = require("./routes/routeApp");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/api", articleRouter);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
