import parser, { Format, Parser } from 'any-date-parser';
import datenames from 'date-names';

const monthRgx = new RegExp(
  `(${datenames.abbreviated_months.map((m) => m.toLowerCase()).join('|')})`,
);

const justYear = new Format({
  matcher: /^'?(\d{2}|\d{4})$/,
  units: ['year'],
});

const monthYear = new Format({
  matcher: /^(\d{1,2})\D*'?(\d{2}|\d{4})$/,
  units: ['month', 'year'],
});

const customParser = new Parser();
customParser.addFormats([justYear, monthYear]);

function parseDate(dateString) {
  dateString = dateString.trim();

  let guessedDates = [];
  let parsed;

  // the custom and standard parsers are kept separate to avoid overlapping
  // rules; the standard parser assumes that a day will almost always be
  // available, but that's probably the least likely for our use case

  // custom parser
  parsed = customParser.attempt(dateString);
  if (!parsed.invalid) {
    guessedDates.push({
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
    });
  }

  // standard parser
  parsed = parser.attempt(dateString);
  if (!parsed.invalid) {
    guessedDates.push({
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
    });
  }

  // switch month and day if it seems reasonable (otherwise it always assumes
  // month first)
  if (!monthRgx.test(dateString.toLowerCase())) {
    [...guessedDates].forEach((d) => {
      if (d.day <= 12 && d.day !== d.month) {
        guessedDates.push({
          year: d.year,
          month: d.day,
          day: d.month,
        });
      }
    });
  }

  return guessedDates;
}

export { parseDate };
