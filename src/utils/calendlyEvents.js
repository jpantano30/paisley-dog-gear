export const CALENDLY_ORIGIN = "https://calendly.com";

export function isCalendlyEvent(event, expectedEventName) {
  if (event?.origin !== CALENDLY_ORIGIN) return false;
  if (!expectedEventName) return true;

  return event?.data?.event === expectedEventName;
}

export function getBookingRedirect(event) {
  return isCalendlyEvent(event, "calendly.event_scheduled")
    ? "/training?source=booking"
    : null;
}
