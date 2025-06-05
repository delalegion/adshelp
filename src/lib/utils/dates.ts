export function formatPublishedAt(date: string) {
    return new Date(date).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC" // don't convert to client's local timezone
    });
  }