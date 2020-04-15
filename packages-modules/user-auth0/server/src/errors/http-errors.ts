

export class ValidationError extends Error {
    public code = 400;
    private state: any;

    constructor(errors) {
        super('The request is invalid.');
        this.state = errors.reduce((result, error) => {
            if (Object.prototype.hasOwnProperty.call(result, error.key)) {
                result[error.key].push(error.message);
            } else {
                Object.defineProperty(result, error.key, {
                    value: [error.message],
                    enumerable: true,
                });
            }
            return result;
        }, {});
    }
}

export class UnauthorizedError extends Error {
    public code = 401;
    public message = this.message || 'Anonymouns access is denied';
    constructor(name) {
        super();
        this.name = name;
    }
}

export class ForbiddenError extends Error {
    public code = 403;
    public message = this.message || 'Access is denied.';
    public name = 'ForbiddenError';
    constructor(name) {
        super();
        this.name = name;
    }
}

