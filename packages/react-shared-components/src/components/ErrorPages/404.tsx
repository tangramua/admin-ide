import * as React from 'react';
import { Result, Button } from 'antd';

export const Error404 = () => {
    return  (<Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button href={process.env.CLIENT_URL} type="primary">Back Home</Button>}
            />);
}
