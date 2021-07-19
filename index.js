const fs = require("fs");

const http = require("http").createServer((req, res) => {
	if (req.url == "/style.css") {
		res.end(fs.readFileSync(__dirname + "/web/style.css"));
		return;
	}
	res.end(fs.readFileSync(__dirname + "/web/index.html"));
})

const { Server } = require("ws");
const ws = new Server({ server: http });

http.listen(4000, () => {
	console.log("Server is listening");
})
