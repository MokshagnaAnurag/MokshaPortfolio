"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
<<<<<<< HEAD
  type?: never;
=======
  type?: undefined;
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
}

interface Separator {
  type: "separator";
<<<<<<< HEAD
  title?: never;
  icon?: never;
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
}

type TabItem = Tab | Separator;

<<<<<<< HEAD
export type { TabItem };

=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

<<<<<<< HEAD
function isTab(tab: TabItem): tab is Tab {
  return (tab as Tab).title !== undefined && (tab as Tab).icon !== undefined;
}

function isSeparator(tab: TabItem): tab is Separator {
  return (tab as Separator).type === "separator";
}

=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
<<<<<<< HEAD
        "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1 shadow-sm",
=======
        "flex w-full h-14 items-center justify-center gap-2 border-b bg-white border-gray-300 dark:bg-[#181A20] dark:border-white/10 px-2",
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
        className
      )}
    >
      {tabs.map((tab, index) => {
<<<<<<< HEAD
        if (isSeparator(tab)) {
          return <Separator key={`separator-${index}`} />;
        }
        if (isTab(tab)) {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.title}
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={selected === index}
              onClick={() => handleSelect(index)}
              transition={transition}
              className={cn(
                "relative flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",
                selected === index
                  ? cn("bg-muted", activeColor)
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={20} />
=======
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        } else {
          const tabItem = tab as Tab;
          const Icon = tabItem.icon;
          const isSelected = selected === index;
          return (
            <motion.button
              key={tabItem.title}
              variants={buttonVariants}
              initial={false}
              animate="animate"
              custom={isSelected}
              onClick={() => handleSelect(index)}
              transition={transition}
              className={cn(
                "relative flex flex-1 items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors duration-300 bg-transparent h-10",
                isSelected
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : "text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-[#23242a]"
              )}
            >
              <Icon size={22} className={cn(isSelected ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-white")} />
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
              <AnimatePresence initial={false}>
                {selected === index && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
<<<<<<< HEAD
                    className="overflow-hidden"
                  >
                    {tab.title}
=======
                    className={cn("overflow-hidden font-semibold", isSelected ? "text-blue-700 dark:text-blue-300" : "text-gray-700 dark:text-white")}
                  >
                    {tabItem.title}
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        }
<<<<<<< HEAD
        return null;
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
      })}
    </div>
  );
} 