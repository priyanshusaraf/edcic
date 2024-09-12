import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./Logos";

export default function IncubationCenter() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="">
      <div className="h-[100vh]"></div>
      <Footer />
    </main>
  );
}
