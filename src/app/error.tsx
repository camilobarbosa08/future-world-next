"use client"

import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobarError({reset}: ErrorProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__tittle}>An error has ocurred</h1>
            <Image
                src='/images/error.png'
                width={500}
                height={500}
                alt='Error'
            />
            <p className={styles.Error__message}>It seems that an error has occurred but don&#39;t feel bad</p>
            <button className={styles.Error__button}>Retry</button>
        </main>
    )
}