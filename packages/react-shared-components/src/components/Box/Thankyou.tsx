import { Button } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';

export function Thankyou(props: any) {
    const { css } = useFela(props);

    return (
        <div>
            <div className={css(styles.flex)}>
                <h2>Workspace has been created...</h2>
            </div>

            <div>
                <Button
                    type="primary"
                    onClick={props.close}
                    className={css(styles.cancelBtn)}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}

const styles: any = ({
    flex: ({
        display: 'flex',
        marginTop: '40px',
        marginLeft: '160px',
    }),
    cancelBtn: ({
        width: '120px',
        padding: '10px 16px',
        fontSize: '18px',
        lineHeight: 1.3333333,
        borderRadius: '6px',
        position: 'absolute',
        top: '510px',
    }),
});
