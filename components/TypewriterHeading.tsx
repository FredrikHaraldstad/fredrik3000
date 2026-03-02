 "use client";

 import { useEffect, useState } from "react";

 type TypewriterHeadingProps = {
   statements: string[];
   typeSpeed?: number;
   deleteSpeed?: number;
   pauseDuration?: number;
    startDelayMs?: number;
   cursor?: string | null;
   loop?: boolean;
   className?: string;
   prefix?: React.ReactNode;
 };

 export function TypewriterHeading({
   statements,
   typeSpeed = 50,
   deleteSpeed = 30,
   pauseDuration = 2000,
    startDelayMs = 0,
   cursor = "|",
   loop = true,
   className,
   prefix,
 }: TypewriterHeadingProps) {
   const [statementIndex, setStatementIndex] = useState(0);
   const [charIndex, setCharIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [started, setStarted] = useState(startDelayMs === 0);

    useEffect(() => {
      if (started) return;

      // Align start with splash logo the first time:
      // - If splash has already been shown in this session, start immediately.
      // - Otherwise wait for the configured delay (matches splash duration).
      const hasWindow = typeof window !== "undefined";
      if (!hasWindow) return;

      const hasSeenSplash = sessionStorage.getItem("splashShown") === "1";
      const effectiveDelay = hasSeenSplash ? 0 : startDelayMs;

      if (effectiveDelay <= 0) {
        setStarted(true);
        return;
      }

      const id = setTimeout(() => {
        setStarted(true);
      }, effectiveDelay);

      return () => clearTimeout(id);
    }, [startDelayMs, started]);

   useEffect(() => {
      if (!started) return;
     if (!statements || statements.length === 0) return;

     const current = statements[statementIndex] ?? "";

     if (!isDeleting && charIndex === current.length) {
       const pauseId = setTimeout(() => {
         setIsDeleting(true);
       }, pauseDuration);

       return () => clearTimeout(pauseId);
     }

     if (isDeleting && charIndex === 0) {
       if (!loop && statementIndex === statements.length - 1) {
         return;
       }

       const nextIndex =
         statementIndex === statements.length - 1 ? 0 : statementIndex + 1;

       setIsDeleting(false);
       setStatementIndex(nextIndex);
       return;
     }

     const id = setTimeout(() => {
       setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
     }, isDeleting ? deleteSpeed : typeSpeed);

     return () => clearTimeout(id);
    }, [
      charIndex,
      deleteSpeed,
      isDeleting,
      loop,
      pauseDuration,
      started,
      statementIndex,
      statements,
      typeSpeed,
    ]);

   const current = statements[statementIndex] ?? "";
   const visible = current.slice(0, charIndex);
    const isAtEnd = !isDeleting && charIndex === current.length;

    useEffect(() => {
      if (!started) return;
      if (!cursor) return;

      if (isAtEnd) {
        const id = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(id);
      }

      setShowCursor(true);
    }, [cursor, isAtEnd, started]);

   return (
     <span className={className}>
       {prefix}
      <span aria-hidden="true">
        {visible}
        {cursor && showCursor && <span>{cursor}</span>}
       </span>
       <span className="sr-only">{statements[0]}</span>
     </span>
   );
 }

