import React from 'react';

import lessons from './lessons';
import styles from './Schedule.module.css';

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
const HOURS = 24;
const MINUTES = 60;
const CELL_PARTS = 4;

/**
 * @param {Date} date
 * @returns {Number} Minutes from 00:00
 */
const getTime = date => date.getHours() * MINUTES + date.getMinutes();

const Schedule = () => {
  const thead = <thead className={styles.thead}>
    <tr className={styles.tr}>
      <th>Schedule</th>
      {DAYS.map(day => <th key={day}>{day}</th>)}
    </tr>
  </thead>

  const rows = [];
  const skip = Array(DAYS.length).fill(0);
  for (let i = 0; i < HOURS * CELL_PARTS; i++) {
    const cols = [];

    const hour = i / CELL_PARTS;
    const currentTime = hour * MINUTES;
    // If hour integer
    if (~~hour === hour) {
      cols.push(
        <td key={hour} rowSpan={CELL_PARTS}>
          {`${hour >= 10 ? '' : '0'}${hour}:00`}
        </td>
      );
    }


    for (let j = 0; j < DAYS.length; j++) {
      if (skip[j]) {
        skip[j]--;
        continue;
      }

      let td = <td key={`${DAYS[j]}-${hour}`}></td>;
      for (const lesson of lessons) {
        const startTime = getTime(lesson.start);
        const dayOfWeek = lesson.start.getDay();

        if (dayOfWeek === (j + 1) % DAYS.length && currentTime === startTime) {
          const duration = getTime(lesson.end) - startTime;
          const rowSpan = duration / MINUTES * CELL_PARTS;

          td = <td
            key={lesson.title}
            rowSpan={rowSpan}
            className={styles.lesson}
          >
            {lesson.title}
          </td>;

          skip[j] = rowSpan - 1;
        }
      }
      cols.push(td)
    }

    rows.push(
      <tr
        key={hour}
        className={styles.tr}
      >
        {cols}
      </tr>
    )
  }

  const tbody = <tbody className={styles.tbody}>{rows}</tbody>

  return (
    <div className={styles.schedule}>
      <table className={styles.table}>
        {thead}
        {tbody}
      </table>
    </div>
  );
}

export default Schedule;
