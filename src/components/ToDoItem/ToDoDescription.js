import React from 'react';

import styles from './ToDo.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function ToDoDescription({ title }) {
    return (
        <div className={cx('todo-desc')}>
            <h3 className={cx('todo-desc__title')}>{title}</h3>
            <div>
                <div>Tên: </div>
                <textarea className={cx('todo-desc__area')}>flaskf;laskf;</textarea>
            </div>
        </div>
    );
}
