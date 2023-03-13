## **Mô hình client-server trong Node.js**
**Mô hình ```client-server``` trong ```Node.js``` cũng giống như trong các ngôn ngữ lập trình khác, bao gồm một máy chủ ```server``` cung cấp dịch vụ và một số lượng khách hàng ```clients``` yêu cầu dịch vụ đó từ máy chủ. Trong Node.js, mô hình này thường được triển khai bằng cách sử dụng module net hoặc module http của Node.js.**

**Module net cho phép bạn tạo ra các máy chủ TCP/IP socket, trong khi module http hỗ trợ các máy chủ HTTP. Điều này cho phép bạn triển khai các ứng dụng web Node.js hoặc các ứng dụng client-server truyền thống.**

**Ví dụ, để tạo một máy chủ TCP/IP socket đơn giản, bạn có thể sử dụng module net như sau:**


```
const net = require('net');

const server = net.createServer((socket) => {
// Socket logic
});

server.listen(8080, () => {
console.log('Server listening on port 8080');
});
```
**Đoạn mã trên tạo ra một máy chủ TCP/IP socket lắng nghe trên cổng 8080. Khi một khách hàng kết nối đến máy chủ, hàm callback trong phương thức createServer sẽ được gọi và bạn có thể thực hiện các logic của socket trong đó.**

**Tương tự, để tạo một máy chủ HTTP, bạn có thể sử dụng module http của Node.js như sau:**


```
const http = require('http');

const server = http.createServer((req, res) => {
// Request handling logic
});

server.listen(8080, () => {
console.log('Server listening on port 8080');
});
```
**Đoạn mã trên tạo ra một máy chủ HTTP lắng nghe trên cổng 8080. Khi một khách hàng gửi yêu cầu HTTP đến máy chủ, hàm callback trong phương thức createServer sẽ được gọi và bạn có thể xử lý yêu cầu đó trong đó.**
##Http và Https trong nodejs 
Trong Node.js, bạn có thể sử dụng module http và https để tạo ra các máy chủ web HTTP và HTTPS.

Module http cho phép bạn tạo một máy chủ web HTTP đơn giản và cung cấp các phương thức để xử lý yêu cầu HTTP từ các máy khách. Ví dụ:


```
const http = require('http');

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(3000, () => {
console.log('Server running at http://localhost:3000/');
});
```
Module https cho phép bạn tạo một máy chủ web HTTPS bằng cách sử dụng chứng chỉ SSL/TLS. Các phương thức của module này tương tự như module http. Ví dụ:


```
const https = require('https');
const fs = require('fs');

const options = {
key: fs.readFileSync('private-key.pem'),
cert: fs.readFileSync('public-cert.pem')
};

const server = https.createServer(options, (req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(3000, () => {
console.log('Server running at https://localhost:3000/');
});
```
Trong ví dụ trên, chúng ta sử dụng module fs để đọc các tệp chứng chỉ SSL/TLS từ đĩa và chuyển chúng vào tùy chọn để tạo máy chủ HTTPS.

###URI trong nodejs
Trong Node.js, ``URI`` (Uniform Resource Identifier) được xử lý bằng module url. Module này cung cấp các hàm để phân tích và xây dựng các ```URI```.

Ví dụ, để phân tích một ```URI```, bạn có thể sử dụng hàm ```url.parse()``` như sau:


```
const url = require('url');

const myUrl = 'https://www.example.com/path?id=123';

const parsedUrl = url.parse(myUrl);

console.log(parsedUrl.href); // https://www.example.com/path?id=123
console.log(parsedUrl.hostname); // www.example.com
console.log(parsedUrl.pathname); // /path
console.log(parsedUrl.query); // id=123
```
Hàm``` url.parse() ```trả về một object chứa các thành phần của ```URI```, bao gồm ```href```, ```hostname```, ```pathname``` và ```query```.

Để xây dựng một URI, bạn có thể sử dụng hàm ```url.format()``` như sau:


```
const url = require('url');

const myUrl = {
protocol: 'https',
hostname: 'www.example.com',
pathname: '/path',
query: {id: 123}
};

const formattedUrl = url.format(myUrl);

console.log(formattedUrl); // https://www.example.com/path?id=123
```
Hàm ```url.format()``` sẽ tạo ra một URI từ một object chứa các thành phần của ```URI```.

###IP, TCP, UDP trong nodejs 
Trong Node.js, các giao thức ```IP (Internet Protocol)```, ```TCP (Transmission Control Protocol)``` và ```UDP (User Datagram Protocol)``` được hỗ trợ bởi module ```net```.

Module ```net``` cung cấp các lớp Socket để tạo kết nối mạng, cho phép gửi và nhận dữ liệu thông qua các giao thức này.

Để tạo một kết nối TCP, bạn có thể sử dụng lớp ```net.Socket``` như sau:


```
const net = require('net');

const client = new net.Socket();

client.connect(8080, 'localhost', () => {
console.log('Connected');
client.write('Hello, server!');
});

client.on('data', data => {
console.log(`Received data: ${data}`);
client.end();
});

client.on('end', () => {
console.log('Disconnected');
});
```
Trong đoạn code trên, một kết nối ```TCP``` được tạo đến địa chỉ localhost trên cổng 8080. Khi kết nối được thiết lập, một chuỗi văn bản được gửi đến server bằng phương thức ```write()```. Khi server trả lời, sự kiện data sẽ được kích hoạt và dữ liệu được nhận được bởi ```client```. Cuối cùng, khi kết nối được đóng, sự kiện ```end``` sẽ được kích hoạt.

Để tạo một kết nối ```UDP```, bạn có thể sử dụng lớp ```net.Socket``` cũng như trong trường hợp ```TCP```. Tuy nhiên, trong trường hợp ```UDP```, bạn cần gọi phương thức ```bind()``` để liên kết socket với một địa chỉ và cổng.


```
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.bind(() => {
console.log('Socket is bound');
const message = Buffer.from('Hello, server!');
client.send(message, 8080, 'localhost', err => {
if (err) throw err;
console.log('Message sent');
client.close();
});
});
```
Trong đoạn code trên, một socket ```UDP``` được tạo và liên kết với một địa chỉ và cổng. Khi socket được liên kết, một chuỗi văn bản được gửi đến server bằng phương thức ```send()```. Khi dữ liệu được gửi, ```socket``` sẽ được đóng.

Để sử dụng giao thức ```IP```, bạn có thể sử dụng lớp``` net.Socket ```và thiết lập type là ```raw```. Tuy nhiên, việc sử dụng giao thức ```IP``` trực tiếp yêu cầu kiến thức về lập trình mạng chuyên sâu và không phải là phần của phổ thông của ```Node.js```.

##Querystring trong nodejs
Query string là một chuỗi các tham số được truyền vào URL. Ví dụ:


```https://example.com/search?q=nodejs&lang=en&page=1```

Trong URL trên, query string là phần``` ?q=nodejs&lang=en&page=1.```

Trong Node.js, bạn có thể sử dụng module querystring để phân tích và xây dựng query string.

Để phân tích query string, bạn có thể sử dụng hàm ```querystring.parse()``` như sau:


```
const querystring = require('querystring');
const qs = 'q=nodejs&lang=en&page=1';
const params = querystring.parse(qs);
console.log(params);
// Output: { q: 'nodejs', lang: 'en', page: '1' }
```
Để xây dựng query string, bạn có thể sử dụng hàm ```querystring.stringify()``` như sau:


```
const querystring = require('querystring');
const params = { q: 'nodejs', lang: 'en', page: '1' };
const qs = querystring.stringify(params);
console.log(qs);
// Output: q=nodejs&lang=en&page=1
```
Bạn cũng có thể sử dụng các tùy chọn khác để tùy chỉnh hành vi của ```querystring.parse()``` và ```querystring.stringify().``` Chi tiết về các tùy chọn này có thể được tìm thấy trong tài liệu Node.js.
