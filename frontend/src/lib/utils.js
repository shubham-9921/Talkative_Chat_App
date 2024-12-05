export function formatMessageTime(timestamp) {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Get today's date at midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get yesterday's date at midnight
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Format the time
  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

  // Check if the timestamp is today or yesterday
  if (
    date.getTime() >= today.getTime() &&
    date.getTime() < today.getTime() + 86400000
  ) {
    return `Today at ${formattedTime}`;
  } else if (
    date.getTime() >= yesterday.getTime() &&
    date.getTime() < today.getTime()
  ) {
    return `Yesterday at ${formattedTime}`;
  }

  // For other dates, format the full date with time
  const dateOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  const formattedDate = date.toLocaleDateString("en-US", dateOptions);

  return `${formattedDate} at ${formattedTime}`;
}
