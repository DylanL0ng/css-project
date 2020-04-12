const express = require("express"),
      hbs     = require("express-handlebars"),
      cors    = require("cors"),
      app     = express();

require("dotenv").config();

app.use(express.static("public"))
app.engine("handlebars", hbs())
app.set("view engine", "handlebars")

const mainRoutes = require("./routes/main")
app.use("/", mainRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)    
})
