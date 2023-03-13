// Import module 'net'
const net = require('net');

// Tạo server socket bằng module net.createServer()
const server = net.createServer((socket) => {
    // Xử lý kết nối
    console.log('Client connected');

    // Gửi dữ liệu đến client
    socket.write('Hello, client!');

    // Nhận dữ liệu từ client
    socket.on('data', (data) => {
        console.log(`Received data from client: ${data.toString()}`);
    });

    // Xử lý khi client ngắt kết nối
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Lắng nghe kết nối đến server socket
server.listen(3000, () => {
    console.log('Server socket running at port 3000');
});
