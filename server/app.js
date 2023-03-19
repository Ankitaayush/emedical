const express=require("express")

const app= express();
const port = process.env.PORT || 3000;
app.use('/',(req,res,next)=>{
    res.send('server is listening');
})

app.listen(port, () => {
    console.log("listning!" + port);
  });



  app.use((err, req, res, next) => {
    let { status = 500, message = "Error Occurred!" } = err;
    console.log(err);
    res.status(status).send(message);
  });
  

  
app.get("*", (req, res) => {
    res.status(404).send("404 Not Found!");
  });
