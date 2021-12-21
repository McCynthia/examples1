const fs = require('fs');

function save(dataArr, fileName){
    try {
        const file = fs.createWriteStream(fileName);
        dataArr.forEach(element => file.write(JSON.stringify(element) +'\n'));
        file.on('error', (err) => {
            console.log(`Error at writing file ${fileName}`);
        });
        file.on('finish', () => {
            console.log(`Wrote all file at ${fileName}`);
        });
        file.end();
    } catch (err) {
        console.log(err);
    }
}

function read(fileName) {
    try {
        const array = fs.readFileSync(fileName).toString().split("\n");
        console.log(array);
        //return array.map(line => JSON.parse(line));
        return(array.map(line => {
            if (line.length) {
                return JSON.parse(line);
            }
        }));
    } catch(e){
        console.log(e);
    }
}

exports.save = save;
exports.read = read;