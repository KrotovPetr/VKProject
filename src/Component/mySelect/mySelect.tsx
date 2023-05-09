import React, { FC } from 'react';
import styled from 'styled-components';

const Select = styled.select`
    position: relative;
    appearance: none;
    padding: 5px;
    width: 400px;
    font-size: 1rem;
    line-height: 1.5;
    color: #102226;
    border: 2px solid #102226;
    border-radius: 10px;
    background-color: #ffffff;
    background-image: linear-gradient(45deg, transparent 50%, #102226 50%),
        linear-gradient(135deg, #102226 50%, transparent 50%),
        linear-gradient(to right, #102226, #102226);
    background-position: calc(100% - 0.5rem) calc(0.5rem + 2px),
        calc(100% - 0.25rem) calc(0.5rem + 2px), calc(100% - 1.5rem) 0.5rem;
    background-size: 5px 5px, 5px 5px, 1px 100%;
    background-repeat: no-repeat;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%) rotate(45deg);
        border-top: 6px solid #102226;
        border-right: 6px solid #102226;
        width: 8px;
        height: 8px;
        opacity: 0.5;
    }
`;

type TSelect = {
    data: number[];
    callback: (e: number) => void;
};

const MySelect: FC<TSelect> = ({ data, callback }) => (
    <Select
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            callback(Number(event.target.value))
        }
    >
        {data &&
            data.map((elem: number) => {
                return (
                    <option value={elem} key={elem}>
                        {elem}
                    </option>
                );
            })}
    </Select>
);
export default MySelect;
