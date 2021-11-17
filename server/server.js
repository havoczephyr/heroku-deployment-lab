const express = require("express");
const path = require("path")

const app = express();


app.use(express.json());

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Comin at ya live at ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/src/index.html"))
    // res.status(200).sendFile('assets/beaned_cans.jpg')
})