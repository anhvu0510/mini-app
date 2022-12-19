import React from 'react';

import styles from './ToDo.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default React.memo(function ToDo({ id = '', name = '', onClickRemove = '' }) {
    console.log(`Re-Render >>> ToDo: ${id}`);
    return (
        <div className={cx('todo-item')} style={{ margin: '2px' }}>
            <div className={cx('todo-item__title')}> - {name}</div>
            <button className={cx('todo-item__btn')} onClick={onClickRemove} value={id} style={{ margin: '2px 10px' }}>
                x
            </button>
        </div>
    );
});
