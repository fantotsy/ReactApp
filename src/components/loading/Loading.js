import React from 'react';

export default ({ isLoading, children }) => (
    isLoading
        ? <div>Loading...</div>
        : children
)