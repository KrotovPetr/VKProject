import React, { FC } from 'react';
import styles from './checkbox.module.scss';

type TCheckbox = {
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
    time: string;
};

const Checkbox: FC<TCheckbox> = ({ callback, time }) => {
    return (
        <div className={styles.checkboxContainer}>
            <input
                name={time}
                className={styles.check}
                type="checkbox"
                onChange={callback}
            />
            <label htmlFor="checkB">{time}</label>
        </div>
    );
};

export default Checkbox;
