"use client";

import React, { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

function Animated404ToInput() {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInput(true);
    }, 1400);

    return () => clearTimeout(timeout);
  }, []);

  const numberStyle = {
    fontSize: 400,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Pretendard, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const numberWrapperStyle = {
    backgroundColor: "#b6b6b6",
    padding: "2rem",
    borderRadius: "1rem",
    display: "flex",
    gap: "2rem",
    height: "480px",
    alignItems: "center",
    overflow: "hidden",
  };

  const inputStyle = {
    display: "flex",
    border: "none",
    outline: "none",
    justifyContent: "center",
    alignItems: "center",
    width: 264,
    height: 600,
    fontSize: 400,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Pretendard, sans-serif",
  };

  return (
    <div className="h-screen w-full flex items-center justify-center gap-5">
      <div style={containerStyle}>
        <div style={numberWrapperStyle}>
          <AnimatedNumbers
            animateToNumber={4}
            fontStyle={numberStyle}
            transitions={() => ({
              duration: 1,
            })}
            includeComma={false}
          />
        </div>

        <div style={numberWrapperStyle}>
          <AnimatedNumbers
            animateToNumber={0}
            fontStyle={numberStyle}
            transitions={() => ({
              duration: 1,
            })}
            includeComma={false}
          />
        </div>

        {!showInput ? (
          <div style={numberWrapperStyle}>
            <AnimatedNumbers
              animateToNumber={4}
              fontStyle={numberStyle}
              transitions={() => ({
                duration: 1,
              })}
              includeComma={false}
            />
          </div>
        ) : (
          <div style={numberWrapperStyle}>
            <input type="text" placeholder="4" style={inputStyle} autoFocus />
          </div>
        )}
      </div>
    </div>
  );
}

export default function NotFoundPage() {
  return <Animated404ToInput />;
}
