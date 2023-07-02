import React from 'react';
import '../css/Footer.css';
import { Facebook, Linkedin, Instagram, Twitter } from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <div className='cont-style d-flex flex-column justify-content-center align-items-center'>
    
            <div lg={12} sm={12} md={12} className='d-flex justify-content-center'>
                <div className='m-2'><a href='https://www.facebook.com/abinash.thakur.566'  target='_blank'><Facebook fontSize={28} color='white' /></a></div>
                <div className='m-2'><a href='' target='_blank'><Twitter fontSize={28}      color='white' /></a></div>
                <div className='m-2'><a href='https://www.instagram.com/abinash6116/'       target='_blank'><Instagram fontSize={28} color='white' /></a></div>
                <div className='m-2'><a href='https://www.linkedin.com/in/abinashthakur299' target='_blank'><Linkedin fontSize={26} color='white' /></a></div>
            </div>
            <div className='text-center text-light mt-3' style={{maxWidth : "75vw"}}>
                <h4 className='text-decoration-underline'>Disclimer</h4>
                <p>This portfolio is designed using ReactJs, React-Bootstrap and Bootstrap-Icons. This portfolio UX Desing is inspired from 'ColorLib'.  Developed By Abinash Thakur.</p>
                <p>@2022 All Rights Reserved</p>
            </div>
        </div>
    )
}
