import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hi, I'm Neil.</b> Nice to meet you here!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" className={styles.image} alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Title sfjsadf sadkfjio sfkls</h1>
                    <p className={styles.postDesc}>
                        Description asdf lij shte ssef usdfeu ausdfek aubs aus esusdfe t shfejsdfe uasdfhekj asdjfeh
                        hthe and the audeiabf
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
