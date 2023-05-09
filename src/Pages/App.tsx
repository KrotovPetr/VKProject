import React, { FC } from 'react';
import styles from './app.module.scss';
import Form from '../Component/form/form';
import Header from '../Component/header/header';
import '../CommonStyles/_commonStyles.scss';

const App: FC = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <Form />
        </div>
    );
};

export default App;
