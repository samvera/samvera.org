// Convert this value: 2023-11-14T10:00+00:00 to this: November 14, 2023
export const formatDateString = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
