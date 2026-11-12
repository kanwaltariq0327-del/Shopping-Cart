import express from "express";
import cors from "cors";
import { products } from "./products";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Shopping API");
});

app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`working on server ${port}`);
})