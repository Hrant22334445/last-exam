import React from "react";
import styles from './Board.module.css'

const Board: React.FC = () => {
    return (
        <div className={styles.tasks}>
            <div className={styles.started}>
                <div className={styles.name}>
                    Started <button className={styles.keter}>...</button>
                </div>
                <button className={styles.content}>test</button>
                <button className={styles.addNew}>Add New</button>
            </div>
            <div className={styles.inProgress}>
                <div className={styles.name}>
                    In Progress <button className={styles.keter}>...</button>
                </div>
                <button className={styles.content}>test</button>
                <button className={styles.addNew}>Add New</button>
            </div>
            <div className={styles.end}>
                <div className={styles.name}>
                    End <button className={styles.keter}>...</button>
                </div>
                <button className={styles.content}>test</button>
                <button className={styles.addNew}>Add New</button>
            </div>
        </div>
    )
}

export default Board;