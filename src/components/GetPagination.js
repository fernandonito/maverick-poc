import React from 'react';

const GetPagination = (props) => {
    return (
        <div>
            <h1>Second page</h1>
            <p>This page has received an id: {props.match.params.id}</p>
        </div>
    );
};

export default GetPagination;