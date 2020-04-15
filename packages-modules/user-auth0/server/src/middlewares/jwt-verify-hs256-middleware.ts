import jwt from 'jsonwebtoken';

const jwtVerifyHS256Middleware = (req, res, next) => {
    const token = req.headers && req.headers.authorization;
    if (!token) {
        next();
    }

    try {
        const decoded = jwt.verify(
            token.replace('Bearer ', ''),
            process.env.JWT_SCRET,
        );
        req.user = decoded;
        next();
    } catch (err) {
        next();
    }
};

export { jwtVerifyHS256Middleware };
