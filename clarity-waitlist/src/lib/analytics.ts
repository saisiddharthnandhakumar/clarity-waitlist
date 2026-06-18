type EventName =
  | "cta_click"
  | "form_start"
  | "form_complete"
  | "form_error"
  | "scroll_depth_25"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_100"
  | "faq_interaction"
  | "waitlist_signup";

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(name: EventName, properties?: EventProperties) {
  try {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        name,
        properties
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] ${name}`, properties ?? "");
    }
  } catch {
    // Fail silently — analytics should never break the app
  }
}

export function getDeviceType(): string {
  if (typeof window === "undefined") return "server";
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua))
    return "tablet";
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  )
    return "mobile";
  return "desktop";
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
  };
}
