import { create } from "zustand";

interface CalendarState {
  hasEvent: boolean;
  setHasEvent: (hasEvent: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
export const useStoreCalendar = create<CalendarState>()((set) => ({
  hasEvent: false,
  isLoading: false,
  setHasEvent: (hasEvent: boolean) => set(() => ({ hasEvent })),
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
}));
