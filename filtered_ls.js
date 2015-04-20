var fs = require('fs');
var path = require('path');
var ext = process.argv[3];

fs.readdir(process.argv[2], function (err, files) {
    if (err) {
        console.log("ERROR!");
    } else {
        for (i in files) {
            if (path.extname(files[i]) === '.' + ext) {
                console.log(files[i]);
            }
            // var file = files[i];
            // var s = file.split('.');
            // if (s.length >= 2 && s[s.length - 1] === ext) {
            //     console.log(file)
            // }
        }
    }
});
