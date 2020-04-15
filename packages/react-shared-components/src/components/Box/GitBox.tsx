import * as React from 'react';
import { Input, Form } from 'antd';
import { useFela } from 'react-fela';

const { Item } = Form;

export function GitBox(props: any) {
    const { create } = props;
    const { css } = useFela(props);
    const [gitUrl, setGitUrl] = React.useState();

    const handleChange = (e) => setGitUrl(e.target.value);

    const isValidated = () => {
        let parseStr = gitUrl.replace('github.com', 'api.github.com/repos');
        fetch(parseStr).then(results => results.json()).then(data => create({
            icon_url: null,
            name: data.name,
            os_version: null,
            language: data.language,
            description: data.description,
        }));
    };

    return (
        <div>
            <Item label={<span>Git URL<sup>*</sup></span>} className={css(styles.flex)}>
                <Input
                    onChange={handleChange}
                    className={css(styles.nameControl)}
                />
            </Item>
        </div>
    );

}

const styles: any = ({
    flex: props => ({
        display: 'flex',
        marginTop: '40px',
    }),
    nameLabel: props => ({
        width: '160px',
        lineHeight: '30px',
        textAlign: 'right',
        marginRight: '20px',
    }),
    nameControl: props => ({
        width: '380px',
    }),
});
