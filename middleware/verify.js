const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(404).send("Access Denied");
    try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
    } catch (err) {
    res.json(err);
    }
};

module.exports = verify;