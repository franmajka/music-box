const now = new Date();

const lessons = [
  {
    title: "Violin",
    start: new Date(now.setHours(16, 0)),
    end: new Date(now.setHours(17, 0)),
  },
  {
    title: "Guitar",
    start: new Date(now.setHours(13, 0)),
    end: new Date(now.setHours(14, 30)),
  },
  {
    title: "Drums",
    start: new Date(2021, 10, 10, 10, 30),
    end: new Date(2021, 10, 10, 17, 45),
  },
  {
    title: "Bass",
    start: new Date(2021, 10, 12, 6, 45),
    end: new Date(2021, 10, 12, 12, 15),
  },
  {
    title: "Piano",
    start: new Date(2021, 10, 12, 16, 30),
    end: new Date(2021, 10, 12, 19, 0),
  },
  {
    title: "Flute",
    start: new Date(2021, 10, 13, 9, 0),
    end: new Date(2021, 10, 13, 17, 0),
  }
];

export default lessons;
