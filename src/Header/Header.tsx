import React from 'react';
import './Header.scss';

function Header(props: {title: string}) {
    return <header>{props.title}</header>

}

export default Header;