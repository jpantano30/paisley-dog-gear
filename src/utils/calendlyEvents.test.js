import {
  CALENDLY_ORIGIN,
  getBookingRedirect,
  isCalendlyEvent
} from "./calendlyEvents";

describe("Calendly event validation", () => {
  it("accepts the expected scheduling event from Calendly", () => {
    expect(
      isCalendlyEvent(
        {
          origin: CALENDLY_ORIGIN,
          data: { event: "calendly.event_scheduled" }
        },
        "calendly.event_scheduled"
      )
    ).toBe(true);
  });

  it("maps a verified scheduling event to the booking-sourced intake route", () => {
    expect(
      getBookingRedirect({
        origin: CALENDLY_ORIGIN,
        data: { event: "calendly.event_scheduled" }
      })
    ).toBe("/training?source=booking");
  });

  it("rejects a scheduling message from another origin", () => {
    expect(
      isCalendlyEvent(
        {
          origin: "https://example.com",
          data: { event: "calendly.event_scheduled" }
        },
        "calendly.event_scheduled"
      )
    ).toBe(false);
  });

  it("does not create a redirect for an unverified message", () => {
    expect(
      getBookingRedirect({
        origin: "https://example.com",
        data: { event: "calendly.event_scheduled" }
      })
    ).toBeNull();
  });

  it("rejects a different Calendly event when a schedule event is expected", () => {
    expect(
      isCalendlyEvent(
        {
          origin: CALENDLY_ORIGIN,
          data: { event: "calendly.event_type_viewed" }
        },
        "calendly.event_scheduled"
      )
    ).toBe(false);
  });
});
