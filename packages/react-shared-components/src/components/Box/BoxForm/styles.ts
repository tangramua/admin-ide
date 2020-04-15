export const styles: any = {
    tag: props => ({
        margin: '0 0 0 10px',
    }),
    avatar: props => ({
        margin: '0 10px 0 0',
    }),
    form: {
        label: () => ({
            lineHeight: 1,
        }),
        input: () => ({
            width: '100%',
        }),
    },
    modal: {
        modal: () => ({
            width: '700px',
        }),
        header: () => ({
            color: '#337ab7',
            margin: '0 0 5px',
        }),
        progress: () => ({
            margin: '0',
            height: '7px',
        }),
    },
    step: {
        title: () => ({
            fontSize: '18px',
            textAlign: 'center',
        }),
        subtitle: () => ({
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 0 10px 0',
        }),
        body: () => ({}),
    },
    items: {
        check: {
            table: props => ({
                width: '60%',
                margin: '0 auto',
                border: '1px solid #d3d3d3',
            }),
            button: props => ({
                width: '60%',
                margin: '15px auto',
                display: 'block',
            }),
        },
        repository: {
            table: props => ({
                overflowY: 'auto',
                maxHeight: '350px',
            }),
            url: () => ({
                margin: 0,
                width: 'calc(100% - 200px) !important',
            }),
            branch: props => ({
                margin: 0,
                width: '200px',
            }),
            control: props => ({
                margin: '0',
            }),
            switcher: props => ({
                margin: '6px 0 0 0',
            }),
        },
    },
};
