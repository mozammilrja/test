import express from "express";
import dotenv from "dotenv";


const app = express();
dotenv.config({ path: "./config.env" });


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
