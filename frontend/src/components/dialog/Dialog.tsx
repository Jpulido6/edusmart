import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface DialogComponentProps {
  children?: React.ReactNode;
  title?: string;
  btnText?: string;
  description?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  className?: string;
  btnTrigger?: React.ReactNode;
  variant?:
    | "secondary"
    | "outline"
    | "link"
    | "default"
    | "destructive"
    | "ghost"
    | null
    | undefined;
}
export function DialogComponent({
  children,
  title,
  description,
  buttonText,
  btnText,
  buttonOnClick,
  variant,
  className,
  btnTrigger,
}: DialogComponentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {
          btnTrigger ? btnTrigger : <Button variant={variant}>{btnText}</Button>
        }
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {buttonText && buttonOnClick && (
          <DialogFooter>
            <DialogTrigger asChild>
              <Button onClick={buttonOnClick}>{buttonText}</Button>
            </DialogTrigger>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
