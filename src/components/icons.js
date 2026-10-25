export function Icon({ name, size = 20, className = "" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  if (name === "menu") {
    return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
  }
  if (name === "x") {
    return <svg {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
  }
  if (name === "search") {
    return <svg {...props}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;
  }
  if (name === "chevron") {
    return <svg {...props}><path d="m6 9 6 6 6-6" /></svg>;
  }
  if (name === "arrow-left") {
    return <svg {...props}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>;
  }
  if (name === "arrow-right") {
    return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  }
  if (name === "arrow-up-right") {
    return <svg {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>;
  }
  if (name === "phone") {
    return <svg {...props}><path d="M6.6 3.5 9 3l2 4-2 1.6a14 14 0 0 0 6.4 6.4L17 13l4 2-.5 2.4a3 3 0 0 1-3.3 2.4C10.7 18.8 5.2 13.3 4.2 6.8A3 3 0 0 1 6.6 3.5Z" /></svg>;
  }
  if (name === "mail") {
    return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
  }
  if (name === "pin") {
    return <svg {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  }
  if (name === "instagram") {
    return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>;
  }
  if (name === "facebook") {
    return <svg {...props}><path d="M14 8h3V4.5h-3c-2.8 0-4.5 1.7-4.5 4.5V11H7v3.5h2.5V21H13v-6.5h3l.5-3.5H13V9.3c0-.9.3-1.3 1-1.3Z" fill="currentColor" stroke="none" /></svg>;
  }
  if (name === "linkedin") {
    return <svg {...props}><path d="M5 8.5V20M5 5.2v.1M9.5 20v-6.1a3.1 3.1 0 0 1 6.2 0V20M9.5 11v9" /><path d="M5 8.5V20" /></svg>;
  }
  if (name === "grid") {
    return <svg {...props}><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></svg>;
  }
  if (name === "list") {
    return <svg {...props}><path d="M9 6h11M9 12h11M9 18h11M4 6h.1M4 12h.1M4 18h.1" strokeWidth="2.5" /></svg>;
  }
  if (name === "check") {
    return <svg {...props}><path d="m5 12 4 4L19 6" /></svg>;
  }
  if (name === "download") {
    return <svg {...props}><path d="M12 3v12M7 10l5 5 5-5M5 20h14" /></svg>;
  }
  if (name === "spark") {
    return <svg {...props}><path d="m12 3 1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3Z" /></svg>;
  }
  return <svg {...props}><circle cx="12" cy="12" r="8" /></svg>;
}
