// Import module 'http'
const http = require('http');

// Tạo server bằng module http.createServer()
const server = http.createServer((req, res) => {
    // Xử lý request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Lắng nghe kết nối đến máy chủ
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
