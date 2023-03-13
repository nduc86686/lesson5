// Import module 'https'
const https = require('https');
const fs = require('fs');

// Đọc file chứng chỉ SSL và khóa cá nhân
const options = {
    key: fs.readFileSync('/path/to/private/key.pem'),
    cert: fs.readFileSync('/path/to/certificate.pem')
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
