const loggingMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const { method, url, headers } = req;
    const accessToken = headers['authorization'].split(" ")[1]; // Assuming the access token is provided in the 'Authorization' header

    console.log(`[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`);

    next(); 
};


module.exports = {loggingMiddleware}