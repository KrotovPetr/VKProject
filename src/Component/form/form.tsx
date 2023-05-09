import React, { FC, useRef, useState } from 'react';
import styles from './form.module.scss';
import MySelect from '../mySelect/mySelect';
import Checkbox from '../checkbox/checkbox';
import { floors, rooms, time, towers } from '../../Utils/Data/data';

const Form: FC = () => {
    const [currentTower, setCurrentTower] = useState<number>(1);
    const [currentFloor, setCurrentFloor] = useState<number>(1);
    const [currentRoom, setCurrentRoom] = useState<number>(1);
    const [currentCheckboxes, setCurrentCheckboxes] = useState<string[] | []>(
        []
    );

    const formRef = useRef<HTMLFormElement | null>(null);
    const commentRef = useRef<HTMLTextAreaElement | null>(null);

    const resetFormData = () => {
        formRef.current?.reset();
        setCurrentCheckboxes([]);
        setCurrentFloor(1);
        setCurrentRoom(1);
        setCurrentTower(1);
    };

    const getFormData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = {
            tower: currentTower,
            floor: currentFloor,
            room: currentRoom,
            time: currentCheckboxes,
            comment: commentRef.current?.value,
        };
        console.log(formData);
        resetFormData();

    };

    const editTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (checked) {
            setCurrentCheckboxes([...currentCheckboxes, name]);
        } else {
            setCurrentCheckboxes(
                currentCheckboxes.filter(
                    (currentCheckbox: string) => currentCheckbox !== name
                )
            );
        }
    };

    return (
        <form
            ref={formRef}
            className={styles.formContainer}
            onSubmit={getFormData}
        >
            <div className={styles.inputBlock}>
                <h3 className={styles.formHeader}>Башня</h3>
                <MySelect data={towers} callback={setCurrentTower} />
            </div>
            <div className={styles.inputBlock}>
                <h3 className={styles.formHeader}>Этаж</h3>
                <MySelect data={floors} callback={setCurrentFloor} />
            </div>
            <div className={styles.inputBlock}>
                <h3 className={styles.formHeader}>Комната</h3>
                <MySelect data={rooms} callback={setCurrentRoom} />
            </div>
            <div className={styles.timeSelectContainer}>
                {time.map((elem: string): JSX.Element => {
                    return (
                        <Checkbox time={elem} callback={editTime} key={elem} />
                    );
                })}
            </div>
            <div className={styles.textAreaBlock}>
                <h3 className={styles.formHeader}>Дополнительная информация</h3>
                <textarea
                    rows={4}
                    cols={40}
                    className={styles.textArea}
                    ref={commentRef}
                />
            </div>
            <div className={styles.buttons}>
                <button
                    className={styles.buttonReset}
                    onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        formRef.current?.reset();
                        resetFormData();
                    }}
                >
                    Сбросить
                </button>
                <input
                    type={'submit'}
                    value={'Отправить'}
                    className={styles.button}
                />
            </div>
        </form>
    );
};

export default Form;
