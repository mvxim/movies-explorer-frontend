import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import CrossIcon from '../../components-svg/CrossIcon';
import styles from './Tooltip.module.css';


export const Tooltip = ({
    toastList,
    autoDelete,
    autoDeleteTime
}) => {
    const [ list, setList ] = useState(toastList);
    
    
    useEffect(() => {
        setList([ ...toastList ]);
    }, [ toastList ]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, autoDeleteTime);
        
        return () => {
            clearInterval(interval);
        };
        
    }, [ toastList, autoDelete, autoDeleteTime, list ]);
    
    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([ ...list ]);
    };
    
    return (
        <>
            <ul className={ styles.toastList }>
                { list.map((toast, i) =>
                    <li className={
                        classNames(styles.toast,
                            {
                                [styles.toast_type_error]: toast.type === 'error',
                                [styles.toast_type_success]: toast.type === 'success',
                            }) }
                        key={ i }
                        onClick={ () => deleteToast(toast.id) }
                    >
                        <CrossIcon className={ styles.closeIcon } />
                        <h3 className={ styles.title }>{ toast.title } </h3>
                        <p className={ styles.details }>{ toast.details }</p>
                    </li>
                ) }
            </ul>
        </>
    );
};
