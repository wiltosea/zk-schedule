// types.ts
export interface Time {
  id: number;
  session: string;
  status: string;
}

export interface ScheduleItem {
  weekday: string;
  date: string;
  time: Time[];
  status?: string;
}
