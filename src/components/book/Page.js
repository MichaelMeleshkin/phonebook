import React from 'react';

export default function Page(props) {
    return (
        <div className={props.className}>
            <div className="subPage">{props.children}</div>
        </div>
    );
}