/* Masthan Swamy */

const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                <title>My First Server</title>
            </head>
            <body>
                <h1>Welcome to Node engine server</h1>
            </body>
        </html>
    `);
    res.end();
});

server.listen(4000);