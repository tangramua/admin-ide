import * as React from 'react';
import { Result, Button } from 'antd';

export const Error = () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button href={process.env.CLIENT_URL} type="primary">Back Home</Button>}
        />
    )
}