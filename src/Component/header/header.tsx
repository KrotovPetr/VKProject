import React, { FC } from 'react';
import styles from './header.module.scss';
import VKLogo from '../../Utils/Icons/vk.png';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img src={VKLogo} alt={'vkLogo'} className={styles.img} />
        </header>
    );
};

export default Header;
