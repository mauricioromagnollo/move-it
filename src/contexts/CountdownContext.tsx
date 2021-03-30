import { 
  createContext, 
  ReactNode, 
  useContext, 
  useState,
  useEffect 
} from "react";

import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

type CountdownProviderProps = {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const COUNTER_TIME = 0.1 * 60;
// const COUNTER_TIME = 25 * 60;
  
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(COUNTER_TIME);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(COUNTER_TIME);
    setHasFinished(false);
  }

  useEffect(() => {
    const ONE_SECOND = 1000;

    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, ONE_SECOND);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>  
  );
}