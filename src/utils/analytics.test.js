import { trackEvent } from "./analytics";

describe("analytics event tracking", () => {
  afterEach(() => {
    delete window.gtag;
    delete window.dataLayer;
  });

  it("queues a named event when Google Analytics has not loaded", () => {
    trackEvent("booking_page_viewed", { page_path: "/booking" });

    expect(window.dataLayer).toEqual([
      {
        event: "booking_page_viewed",
        page_path: "/booking"
      }
    ]);
  });

  it("sends a named event through gtag when it is available", () => {
    window.gtag = jest.fn();

    trackEvent("appointment_scheduled", {
      scheduler: "calendly",
      ignored_value: undefined
    });

    expect(window.gtag).toHaveBeenCalledWith("event", "appointment_scheduled", {
      scheduler: "calendly"
    });
  });
});
