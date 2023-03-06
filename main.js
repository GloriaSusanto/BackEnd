const http = require('http');
const members =  require('./members');
const ambilData = require('./users');

const server = http.createServer( async (req, res) => {
const path = req.url;
    switch (path){
        case '/':
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.write('This is the Home Page');
        res.end();
        break

        case '/about':
             const data = {
                'status':'success',
                'message':'response success',
                'Description': 'Exercise #03',
                'date': new Date().toDateString(),
                'data': members
            };
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));

        case '/users':
            const users = await ambilData();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));       

    }

    res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
});