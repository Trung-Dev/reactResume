import React from "react";
import styles from "./Navigation.module.scss";

const menu = {
    home: "Welcome",
    work: "Resume",
    resume: "Work",
    about: "About"
}

const Navigation = () => {

    return (
        <>
        <div className={styles.name}>Trung</div>
          {Object.keys(menu).map((key, index) => (
            <ul>
                <li key={index}>{menu[key]}</li>
            </ul>
          ))}
        </>
    );
};

export { Navigation };