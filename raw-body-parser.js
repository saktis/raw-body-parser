/**
 * Simple module to retrieve raw body part of a request.
 */
exports = module.exports = function() {

	return function middleware(req, res, next) {
		req.rawBody = new Buffer(0);
	
		req.on('data', function(chunk) {
			req.rawBody = Buffer.concat([req.rawBody, chunk]);
		});
	
		req.on('end', function() {
			next();
		});
	};

};

/**
 * Initial version.
 */
exports.version = '0.0.1';