const express = require("express");
const { extname } = require("path");
const app = express();

app.engine("hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtonMethodsByDefault: true
    }
}))

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine", "hbs")

app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(8080, ()=>{
    console.log("listening on port 8080")
})