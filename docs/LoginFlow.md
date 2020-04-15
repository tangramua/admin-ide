



1. When the user already have valid token


```mermaid
graph TD;
    A[/login?redirect=/dashboard Check For auth0UserId]-->B[fetchUser backend to get User];
    B-->C[/login componentDidMount save the redirectUrl];
    C-->E[componentWillReceieveProps to check for User object];
    E-->F[redirect to target page];
```