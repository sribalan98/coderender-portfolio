import { motion } from "motion/react";

interface InfiniteTickerProps {
  items: string[];
  type?: "text" | "app-icon" | "screenshot";
  direction?: "left" | "right";
  speed?: "normal" | "slow" | "fast";
}

export default function InfiniteTicker({
  items,
  type = "text",
  direction = "left",
  speed = "normal"
}: InfiniteTickerProps) {
  // Duplicate items array multiple times to ensure the ticker has enough length to loop seamlessly without blank spots
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  const getAnimationClass = () => {
    if (direction === "right") {
      return "animate-ticker-reverse";
    }
    return speed === "fast" ? "animate-ticker-fast" : "animate-ticker";
  };

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Soft gradient masks at the edges for a premium faded look */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center">
        <div className={`flex gap-6 md:gap-8 shrink-0 ${getAnimationClass()}`}>
          {duplicatedItems.map((item, idx) => {
            if (type === "app-icon") {
              return (
                <div
                  key={`${item}-${idx}`}
                  className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#4040400f] border border-[#ededed] p-2.5 flex items-center justify-center hover:scale-105 hover:rotate-3 transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <img
                    src={item}
                    alt="Featured App Icon"
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              );
            }

            if (type === "screenshot") {
              return (
                <div
                  key={`${item}-${idx}`}
                  className="w-[140px] h-[303px] md:w-[190px] md:h-[412px] shrink-0 rounded-2xl overflow-hidden border border-[#ededed] bg-white hover:scale-[1.03] hover:shadow-lg transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={item}
                    alt="App Screenshot"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              );
            }

            // Default Text list (Trusted by design teams at...)
            return (
              <span
                key={`${item}-${idx}`}
                className="font-display font-bold text-base md:text-xl tracking-tight text-[#adadad] hover:text-black transition-colors shrink-0 px-4 py-2"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
