import React from 'react';
import history from '../../history';

export const NavBtn = (props) => {
    return (
        <div className="nav-btn">
            <button
                className={ `nav-btn__btn nav-btn__${ props.className }` }
                onClick={ () => history.push(props.path) }
            >
                { props.title }
            </button>
        </div>
    );
}