const jwt = require('jsonwebtoken');

const app_secret = "myappsecret";
const username = "admin";
const password = "secret";

module.exports = function (req, res, next) {

  console.log("Hello");
  console.log(req.url);
    if (req.url === '/login' && req.method == 'POST') {
        if (req.body.username == username && req.body.password == password) {
            let token = jwt.sign({ data: username, expiresIn: '1h' }, app_secret);
            res.json({ success: true, token: token });
        } else {
            res.json({ success: false });
        }
        res.end();
        return;
    } else {
        if ((req.url.startsWith("/products") || req.url.startsWith("/categories") ) && (req.method != 'GET')) {
            let token = req.headers['authorization'];
            console.log('token: ' + token);
            if (token != null && token.startsWith('Bearer<')) {
            let token = jwt.sign({ data: username, expiresIn: '1h' }, app_secret);
            token = token.substring(7, token.length-1);
                try {
                    jwt.verify(token, app_secret);
                    next();
                    return;
                }
                catch (err) { }
            }else{
            res.statusCode = 401;
            res.end();
            return;
            }
        }
    }
    next();
}
