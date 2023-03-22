// Import module 'https'
const https = require('https');
const fs = require('fs');

// Đọc file chứng chỉ SSL và khóa cá nhân
var options = {
    key: fs.readFileSync('./key.pem', 'utf8'),
    cert: fs.readFileSync('./cert.pem', 'utf8'),
    passphrase: '123456789'
};

// Tạo server sử dụng SSL bằng module https.createServer()
const server = https.createServer(options, (req, res) => {
    // Xử lý request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Lắng nghe kết nối đến server sử dụng SSL
server.listen(443, () => {
    console.log('Server running at https://localhost/');
});
