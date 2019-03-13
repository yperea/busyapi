/*
    Master process to be forked into the cluster of workers.
    I have to figure out how to fork original server on port 3000.
*/

const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i=0; i<10; i++);
    res.end(`Handled by process ${pid}`);
}).listen(3001, () => {
    console.log(`Started process ${pid}`);
});