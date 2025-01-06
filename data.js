const data = [
  {
    date: new Date("2025-06-01"),
    city: "Frankfurt",
    name: "Skyrun Frankfurt",
    location: "Messeturm Frankfurt",
    list: "https://airtable.com/embed/appPvmwKKIiUVz7Z5/shrL2Qt2wJDo6kYPX",
    form: "https://airtable.com/embed/appPvmwKKIiUVz7Z5/shrcrD6Yvw6NmFcfW",
  },
];

const formatIdent = (event) => {
  const pad = (number) => ("0" + number).substr(-2);

  return (
    pad(event.date.getFullYear()) +
    "" +
    pad(event.date.getMonth() + 1) +
    "" +
    pad(event.date.getDate()) +
    "-" +
    event.city.toLocaleLowerCase()
  );
};

const formatTitle = (event) =>
  event.date.toLocaleDateString("de-DE", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }) +
  " " +
  event.location;

export default data.map((event) => ({
  ...event,
  slug: formatIdent(event),
  formattedDate: event.date.toLocaleDateString("de-DE", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }),
}));
