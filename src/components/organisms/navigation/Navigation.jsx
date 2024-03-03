import React from "react";
import styles from "./Navigation.module.scss";

const menu = [
    "Welcome",
    "Resume",
    "Work",
    "About"
]

const Navigation = () => {

    return (
        <div className={styles.naviContainer}>
          <div className={styles.name}>Trung</div>
          <div className={styles.navi}>            
            <ul>
                {Object.keys(menu).map((key, index) => (
                      <li key={index}>{menu[key]}</li>
                ))}
              </ul>
            </div>
            <hr></hr>
          </div>
    );
};

export { Navigation };