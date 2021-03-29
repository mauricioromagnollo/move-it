import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/x0n4d0.png" alt="Maurício Romagnoli"/>
      <div>
        <strong>Maurício Romagnoli</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}