import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Logos from "./Logos";
const IncubationCenter = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />

        <text className="text-[6px] uppercase" style={{ fill: "red" }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath key={i} startOffset={i * 40 + "%"} href="#curve">
                Curabitur mattis efficitur velit
              </textPath>
            );
          })}
        </text>
      </svg>

      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
};

export default IncubationCenter;
