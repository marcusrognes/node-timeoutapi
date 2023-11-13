const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
	const params = url.parse(req.url, true).query;
	const ms = params.ms && parseInt(params.ms) || 4000;

	setTimeout(() => {
		res.write('OK');
		res.end();
	}, ms);
}).listen(process.env.PORT || 4000);
