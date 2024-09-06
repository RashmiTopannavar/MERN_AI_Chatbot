import express from 'express';
const app = express();
app.get("/", (req, res, next) => {
    return res.send("Hi");
});
app.listen(8000, () => console.log("Server listening"));
//# sourceMappingURL=index.js.map