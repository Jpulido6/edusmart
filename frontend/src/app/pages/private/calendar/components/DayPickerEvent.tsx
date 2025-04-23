import * as React from "react";
import { format, setHours, setMinutes } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { es } from "date-fns/locale";
import TimePicker from "./TimePicker";

interface DatePickerProps {
  label: string;
  date: Date;
  hours: (time: string) => void;
  fechaEvent: (date: Date) => void;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ label, date, setDate, hours, fechaEvent }: DatePickerProps) {
  const [horaSelected, setHoraSelected] = React.useState<string>();
  const [dateSelected, setDateSelected] = React.useState<Date>();

  React.useEffect(() => {
    if (horaSelected) {
     
     
      fechaEvent(dateSelected!)
      hours(horaSelected);
    }
  }, [horaSelected, date, hours]);

  const onChangeHoraSelected = (time: string) => setHoraSelected(time);
  const onChangeDateSelected = (fecha: Date) => setDateSelected(fecha);


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP", { locale: es }) : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <TimePicker onChange={onChangeHoraSelected} onSetDate={onChangeDateSelected} />
        <Calendar
          locale={es}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
