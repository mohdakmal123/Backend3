const mongoose = require('mongoose');

const url = "mongodb+srv://akmalahmad1209:1234@mohdakmal.tcxsa.mongodb.net/mydb?retryWrites=true&w=majority&appName=MohdAkmal";

// asynchronous function - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);    
});


// console.log('next task');

module.exports = mongoose;
 