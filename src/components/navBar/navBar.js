import React from 'react';
import SearchBar from './searchBar';
import { NavBtn } from './navBtn';

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <SearchBar />
            <NavBtn className="home" title="Home" path="/" />
            <NavBtn className="page-one" title="Page One" path="/pageOne" />
        </div>
    );
}