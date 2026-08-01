import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  InlineWidget,
  useCalendlyEventListener
} from "react-calendly";
import { Link, useNavigate } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import {
  getBookingRedirect,
  isCalendlyEvent
} from "../utils/calendlyEvents";
import { useHead } from "../utils/useHead";
import "./Booking.css";

const CALENDLY_URL =
  "https://calendly.com/paisleygearandtraining/free-15-min-training-consult";

const BOOKING_META = [
  { property: "og:type", content: "website" },
  {
    property: "og:title",
    content: "Book a Free Dog Training Consultation | Paisley Dog Training"
  },
  {
    property: "og:description",
    content:
      "Choose a time for a free 15-minute consultation, then complete the required training intake form."
  },
  {
    property: "og:url",
    content: "https://paisleydoggearandtraining.com/booking"
  },
  {
    property: "og:image",
    content: "https://paisleydoggearandtraining.com/logoPng.png"
  },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Book a Free Dog Training Consultation | Paisley Dog Training"
  },
  {
    name: "twitter:description",
    content:
      "Choose a time for a free 15-minute consultation, then complete the required training intake form."
  },
  {
    name: "twitter:image",
    content: "https://paisleydoggearandtraining.com/logoPng.png"
  }
];

export default function Booking() {
  const navigate = useNavigate();
  const [schedulerStatus, setSchedulerStatus] = useState("loading");
  const pageViewTracked = useRef(false);
  const widgetLoadTracked = useRef(false);
  const appointmentHandled = useRef(false);
  const schedulerShellRef = useRef(null);

  useHead({
    title: "Book a Free Dog Training Consultation | Paisley Dog Training",
    description:
      "Book a free 15-minute dog training consultation with Paisley Dog Gear & Training, then complete the required training intake form.",
    canonical: "https://paisleydoggearandtraining.com/booking",
    metas: BOOKING_META
  });

  useEffect(() => {
    if (!pageViewTracked.current) {
      trackEvent("booking_page_viewed", {
        page_path: "/booking"
      });
      pageViewTracked.current = true;
    }

    const delayedMessageTimer = window.setTimeout(() => {
      setSchedulerStatus((current) =>
        current === "loading" ? "delayed" : current
      );
    }, 10000);

    return () => window.clearTimeout(delayedMessageTimer);
  }, []);

  const markWidgetLoaded = useCallback(() => {
    setSchedulerStatus("loaded");

    if (!widgetLoadTracked.current) {
      trackEvent("scheduling_widget_loaded", {
        page_path: "/booking",
        scheduler: "calendly"
      });
      widgetLoadTracked.current = true;
    }
  }, []);

  useEffect(() => {
    const schedulerShell = schedulerShellRef.current;
    if (!schedulerShell) return undefined;

    const checkIframeLoadState = () => {
      const iframe = schedulerShell.querySelector("iframe");
      const calendlySpinner = schedulerShell.querySelector(".calendly-spinner");

      if (iframe && !calendlySpinner) markWidgetLoaded();
    };

    const observer = new MutationObserver(checkIframeLoadState);
    observer.observe(schedulerShell, { childList: true, subtree: true });
    checkIframeLoadState();

    return () => observer.disconnect();
  }, [markWidgetLoaded]);

  const handleWidgetLoaded = (event) => {
    if (!isCalendlyEvent(event)) return;
    markWidgetLoaded();
  };

  useCalendlyEventListener({
    onProfilePageViewed: handleWidgetLoaded,
    onEventTypeViewed: handleWidgetLoaded,
    onPageHeightResize: handleWidgetLoaded,
    onEventScheduled: (event) => {
      const redirectPath = getBookingRedirect(event);
      if (!redirectPath || appointmentHandled.current) return;

      appointmentHandled.current = true;
      trackEvent("appointment_scheduled", {
        page_path: "/booking",
        scheduler: "calendly"
      });
      navigate(redirectPath, {
        replace: true,
        state: { calendlyEventScheduled: true }
      });
    }
  });

  const trackIntakeClick = () => {
    trackEvent("intake_form_link_clicked", {
      page_path: "/booking",
      link_destination: "/training"
    });
  };

  return (
    <div className="booking-page">
        <section className="booking-hero" aria-labelledby="booking-title">
          <p className="booking-eyebrow">Trainer-led support starts here</p>
          <h1 id="booking-title">Book a free training consultation</h1>
          <p className="booking-lede">
            Choose a time for a brief conversation about your dog, your goals,
            and whether Paisley Dog Gear &amp; Training is the right fit.
          </p>
        </section>

        <section className="booking-details" aria-labelledby="consult-details-title">
          <h2 id="consult-details-title">Before you book</h2>
          <div className="booking-detail-grid">
            <article>
              <span className="booking-detail-label">Appointment</span>
              <h3>Free consultation</h3>
              <p>A focused first conversation about training needs and next steps.</p>
            </article>
            <article>
              <span className="booking-detail-label">Duration</span>
              <h3>15 minutes</h3>
              <p>Please choose a time when you can give the conversation your attention.</p>
            </article>
            <article>
              <span className="booking-detail-label">Who it is for</span>
              <h3>Dog owners exploring training</h3>
              <p>Suitable for questions about private, trick, freestyle, or virtual training.</p>
            </article>
          </div>
        </section>

        <section className="booking-next-step" aria-labelledby="after-booking-title">
          <div>
            <p className="booking-step-number" aria-hidden="true">!</p>
          </div>
          <div>
            <h2 id="after-booking-title">The intake form is required</h2>
            <p>
              After booking, you’ll receive the appointment location and a link
              to complete the required training intake form.
            </p>
            <p>
              The intake form gives me the history, goals, and current challenges
              I need to review before your session.
            </p>
            <Link
              className="booking-text-link"
              to="/training"
              onClick={trackIntakeClick}
            >
              Complete the training intake form without booking
            </Link>
          </div>
        </section>

        <section className="scheduler-section" aria-labelledby="scheduler-title">
          <div className="scheduler-heading">
            <p className="booking-step-number" aria-hidden="true">1</p>
            <div>
              <h2 id="scheduler-title">Choose your appointment time</h2>
              <p>Select an available date and time in the calendar below.</p>
            </div>
          </div>

          <div className="scheduler-shell" ref={schedulerShellRef}>
            {schedulerStatus === "loading" && (
              <div className="scheduler-status" role="status" aria-live="polite">
                <span className="scheduler-spinner" aria-hidden="true" />
                Loading available appointments…
              </div>
            )}

            {schedulerStatus === "delayed" && (
              <div className="scheduler-status scheduler-status-delayed" role="alert">
                <strong>The scheduler is taking longer than expected.</strong>
                <span>
                  You can keep waiting or open the secure scheduling page in a new tab.
                </span>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Open the scheduling calendar
                </a>
              </div>
            )}

            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "780px", width: "100%" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "6c9a8b",
                textColor: "2f2f2f"
              }}
            />
          </div>

          <noscript>
            JavaScript is required for the embedded scheduler. You can book on the{" "}
            <a href={CALENDLY_URL}>Calendly scheduling page</a> instead.
          </noscript>
        </section>
    </div>
  );
}
