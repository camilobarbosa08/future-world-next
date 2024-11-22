"use client";

import { useEffect } from "react";
import styles from "app/sass/error.module.sass"; // Ruta correcta según tu proyecto

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Error detected:", error);
    }, [error]);

    return (
        <div className={styles.Error}>
            <div className={styles.Error__box}>
                <h1 className={styles.Error__emoticon}>😞</h1>
                <h2 className={styles.Error__title}>Oops! Something went wrong.</h2>
                <p className={styles.Error__message}>
                    We encountered an error while processing your request. Please try again.
                </p>
                <button className={styles.Error__button} onClick={reset}>
                    Retry
                </button>
            </div>
        </div>
    );
}