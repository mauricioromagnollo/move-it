import Head from 'next/head';
import { useContext } from 'react';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownContext } from '../contexts/CountdownContext';

import { serializeFor2Digt } from '../helpers/serializeFor2Digt';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const { isActive, minutes, seconds } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = serializeFor2Digt(minutes);
  const [secondLeft, secondRight] = serializeFor2Digt(seconds);

  return (
    <div className={styles.container}>
      <Head>
        {isActive 
          ? <title>{minuteLeft}{minuteRight}:{secondLeft}{secondRight} | move.it</title>
          : <title>Início | move.it</title> 
        }
      </Head>
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
