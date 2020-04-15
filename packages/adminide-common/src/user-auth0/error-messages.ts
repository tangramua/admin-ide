export enum AuthErrors {
    TokenExpired = 'TokenExpired',
    // Graphql Request wraps the error in somecases
    ContextFailedDueToTokenExpired = 'Context creation failed: TokenExpired',
    InvalidToken = 'InvalidToken',
    AccessDenied = 'AccessDeined',
    CaptchaError = 'CaptchaError',
    CSRFValidationFailed = 'CSRFValidationFailed',
    TokenMissing = 'TokenMissing',
    ScopeExpected = 'ScopeExpected',
    UserExpected = 'UserExpected',
    UserLoginNeeded = 'UserLoginNeeded',
}


export const AuthErrorsMessage = {
    TokenExpired: 'Your token is expired, please relogin',
    InvalidToken: 'Security error - invalid token',
    AccessDenied: "You don't have permission to access it.",
    CaptchaError: 'Please re-enter captcha',
    CSRFValidationFailed: 'CSRF token validation failed',
    TokenMissing: 'You must supply a JWT for authorization!',
    ScopeExpected: 'No scopes supplied!',
    UserExpected: 'You must supply a User!',
    UserLoginNeeded: 'Try logout and login',
};
