import React from "react";
import './style.scss'

const links =[
    {
        label: 'Home',
        href: '/',
        pages: 'port'
    },
    {
        label: 'Projects',
        href: '/#pinned-projects',
        pages: 'home'
    },
    {
        label: 'Contact',
        href: '/#contact-me',
        pages: 'both'
    },
    {
        label: 'About',
        href: '/#about',
        pages: 'both'
    }/*,
    {
        label: 'Blog',
        href: '/blog',
        pages: 'both'
    } */
]

const NavBar = () => {
    return (
        <nav>
            <ul>
                {
                    window.location.pathname === "/"
                    // Display homepage navigation
                    ? links.filter(link => link.pages === 'home' || link.pages === 'both').map((link, index) => <li key={index}><a href={link.href}>{link.label}</a></li>)
                    // Display portfolio page navigation
                    : links.filter(link => link.pages === 'port' || link.pages === 'both').map((link, index) => <li key={index}><a href={link.href}>{link.label}</a></li>)
                }
            </ul>
        </nav>
    )
}

export default NavBar