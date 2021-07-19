const http = require("http").createServer((req, res) => {
	res.end("not yet ready");
})

const { Server } = require("ws");
const ws = new Server({ server: http });

http.listen(4000, () => {
	console.log("Server is listening");
})
