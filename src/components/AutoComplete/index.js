import { AutoComplete } from 'antd';
import React from 'react';
export const AutoCompleteComponent = ({ data, onChange }) => (
    <AutoComplete
        style={{
            width: 200,
        }}
        options={data}
        placeholder="Search..."
        onChange={onChange}
    />
);