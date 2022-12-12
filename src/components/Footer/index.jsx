import React, {useState} from "react";
import "./style.css";

export default () => {
    return <footer className="footer-container">
        ©2022
        <span className="footer-author">
            Made by
            <a href="mailto:goldenovel@gmail.com">Ivan</a>
            with
            <i className="bi bi-heart-fill"/>
        </span>
    </footer>
}