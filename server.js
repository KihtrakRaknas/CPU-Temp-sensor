var temp = require("pi-temperature");
setInterval(()=>{ 
    temp.measure(function(err, temp) {
        if (err) console.error(err);
        else console.log("It's " + temp + " celsius.");
    });
},10000)