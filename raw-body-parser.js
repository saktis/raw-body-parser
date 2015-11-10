/**
 * Simple module to retrieve raw body part of a request.
 */
exports = module.exports = function() {

	return function middleware(req, res, next) {
		var buffers = [];
	
		req.on('data', function(chunk) {
			buffers.push(chunk);
		});
	
		req.on('end', function() {
			req.rawBody = Buffer.concat(buffers);
			next();
		});
	};

};

/**
 * Initial version.
 */
exports.version = '0.0.2';