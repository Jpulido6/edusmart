import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
interface PopoverComponentProps {
    btnText: string;
    children: React.ReactNode;
}

export function PopoverComponent({ btnText, children }: PopoverComponentProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{btnText}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {children}
      </PopoverContent>
    </Popover>
  )
}
