import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const delay = deleting ? speed / 2 : speed;

    if (!deleting && subIndex === current.length) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((value) => value + 1);
      return undefined;
    }

    const timer = setTimeout(() => {
      setSubIndex((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [words, index, subIndex, deleting, speed, pause]);

  return words[index % words.length].slice(0, subIndex);
}
