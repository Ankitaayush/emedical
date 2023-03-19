const express=require("express")

const clinicRoute = require('./routes/clinic');
const authRoute = require('./routes/auth');

const app= express();


app.use('/medical/auth',authRoute);
app.use('/medical/clinic',clinicRoute);

app.use((err, req, res, next) => {
    let { status = 500, message = "Error Occurred!" } = err;
    console.log(err);
    res.status(status).send(message);
});


app.get("*", (req, res) => {
      res.status(404).send("404 Not Found!");
    });
    
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("listning!" + port);
    });