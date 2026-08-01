export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") return;

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined)
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, cleanParameters);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...cleanParameters
  });
}
