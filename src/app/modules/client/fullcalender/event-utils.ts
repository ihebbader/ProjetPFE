import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const Today=new Date("2021-05-23");

export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00'
    },
    {
    id: createEventId(),
    title: 'Timed event',
    start: Today
  }

];


export function createEventId() {
    return String(eventGuid++);
}
