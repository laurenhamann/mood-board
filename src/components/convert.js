const fs = require('fs');

fs.watchFile('./mood.txt',{bigint: false, persistent:true, interval: 10000}, (curr, prev) => {
    console.log("\nThe file was edited");
    convert();
});


function convert() {
    fs.readFile('./mood.txt', 'utf-8', function read(err, data) {
        if(err){
            console.log(err)
        }
        writeFile(data);
    })
}

convert();

function writeFile(data) {
    let obj = [];
    const date = /\d+\/\d+\/\d+/;
    const match = data.match(date);
    const cells = data.split('\n').map(function (el) { 
        const split = el.split(/\s+/);
        const date = split[1];
        const mood = split[3]
        const jobj = {"date": date, "mood": mood}
        obj.push(jobj);
        return; });
        console.log(obj);
        const object = JSON.stringify(obj)
        console.log(object)
        fs.writeFile("../../content/mood.json", object, (err) => {
            if(err){
                console.log(err)
            }else {
                console.log('you did it')
            }
        })
}