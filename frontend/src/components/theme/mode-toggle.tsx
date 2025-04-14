import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    setMounted(true);
  }

  return (
    <Button
      variant="outline" size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 p-2 shadow-sm shadow-neutral-focus/5"
    >
      {theme === "dark" ? <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> : <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />}
    </Button>
  );
}



