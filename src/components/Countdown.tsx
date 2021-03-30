import { useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';

import { serializeFor2Digt } from '../helpers/serializeFor2Digt';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = serializeFor2Digt(minutes);
  const [secondLeft, secondRight] = serializeFor2Digt(seconds);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
          <button
            disabled 
            className={styles.countdownButton}
          >
            Ciclo encerrado
          </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type='button' 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>

          ) : (
            <button 
              type='button' 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          ) }
        </>
      ) }
    </div>
  );
}