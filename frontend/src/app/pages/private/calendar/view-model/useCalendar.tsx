import { useState } from "react";
import { dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/es";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}
export const useCalendar = () => {
  const [hasEvent, setHasEvent] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [dateInit, setDateInit] = useState<Date | undefined>(new Date());
  const [dateEnd, setDateEnd] = useState<Date | undefined>(new Date());
  dayjs.locale("es");
  const localizer = dayjsLocalizer(dayjs);

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "No hay eventos en este rango",
    showMore: (total: number) => `+ Ver más (${total})`,
    // Nombres de los meses
    month0: "Enero",
    month1: "Febrero",
    month2: "Marzo",
    month3: "Abril",
    month4: "Mayo",
    month5: "Junio",
    month6: "Julio",
    month7: "Agosto",
    month8: "Septiembre",
    month9: "Octubre",
    month10: "Noviembre",
    month11: "Diciembre",
    // Días de la semana
    sunday: "Domingo",
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    // Abreviaciones de días
    sun: "Dom",
    mon: "Lun",
    tue: "Mar",
    wed: "Mié",
    thu: "Jue",
    fri: "Vie",
    sat: "Sáb",
  };

  // Formateadores personalizados
  const formats = {
    monthHeaderFormat: (date: Date) => {
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      return `${meses[date.getMonth()]} ${date.getFullYear()}`;
    },
    dayHeaderFormat: (date: Date) => {
      const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      return `${dias[date.getDay()]}`;
    },
    dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) => {
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      return `${start.getDate()} ${meses[start.getMonth()]} ${end.getDate()} ${
        meses[end.getMonth()]
      } ${end.getFullYear()}`;
    },
  };
  const openDialog = () => {
    setIsOpen(true);
  };
  const handleHasEvent = () => {
    setHasEvent(true);
  };

  const addEvent = (event: CalendarEvent) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return {
    localizer,
    messages,
    formats,
    openDialog,
    isOpen,
    events,
    addEvent,
    setDateInit,
    setDateEnd,
    dateInit,
    dateEnd,
    hasEvent,
    setHasEvent,
    handleHasEvent,
  };
};
