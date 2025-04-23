import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCalendar } from "../view-model/useCalendar";
import "./calendar.css";
import { Button } from "@/components/ui/button";
import EventForm from "../components/EventForm";
import { useStoreCalendar } from "../domain/useStoreCalendar";
import Loading from "@/components/loading/Loading";
import { X } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
// import { Button } from "react-day-picker";
export default function Calendario() {
  const hasEvent = useStoreCalendar((state) => state.hasEvent);
  const setHasEvent = useStoreCalendar((state) => state.setHasEvent);
  const isLoading = useStoreCalendar((state) => state.isLoading);

  const { localizer, messages, formats, events } = useCalendar();

  return (
    <div className="flex flex-col gap-4 w-full h-[80vh]">
      <Toaster/>
      <h1 className="text-center text-2xl font-bold">Calendario</h1>
      <div className="flex gap-[20px] w-full h-full">
        <div className="grow">
          <Calendar
            localizer={localizer}
            messages={messages}
            formats={formats}
            culture="es"
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 450 }}
          />
        </div>
        <div className="w-64 border-l border-gray-200 h-full p-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold">Eventos</h2>
            {isLoading && (
              <div className="flex justify-center items-center">
                <Loading size="sm" />
              </div>
            )}
            {!isLoading && (
              <div className="flex flex-col gap-4">
                {hasEvent ? (
                  <>
                    <EventForm />
                    <div className="flex justify-center items-center h-10">
                      <X
                        className="cursor-pointer rounded-full hover:bg-primary-foreground "
                        onClick={() => setHasEvent(false)}
                      />
                    </div>
                  </>
                ) : (
                  <Button onClick={() => setHasEvent(true)}>
                    Crear evento
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
