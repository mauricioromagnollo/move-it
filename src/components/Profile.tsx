import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/x0n4d0.png" alt="Maurício Romagnoli"/>
      <div>
        <strong>Maurício Romagnoli</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}