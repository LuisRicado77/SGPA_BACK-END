import express from 'express';

const app = express();
//app.use("/people", personRouter)
app.use(express.json());

app.listen(3000, () =>(
    console.log("Server runnint at port 3000")
));