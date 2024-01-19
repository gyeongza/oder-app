import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useCountdown(initialCount: number, url: string) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(initialCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown === 1) {
          clearInterval(timer);
          navigate(url);

          return 0;
        }

        return currentCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialCount, navigate, url]);

  return countdown;
}

export default useCountdown;
