import * as React from 'react';

const Languages = ({ languages }) => {
    return (
        <div>
            {languages.map((lang, i) =>
                <span className="language-block" key={i}>{lang}</span>,
            )}
        </div>
    );
};

export default Languages;
