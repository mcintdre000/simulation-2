import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return(
        <div> Header 
            <a href="/dashboard"><button > Get Started </button></a>
        </div>
    );
}