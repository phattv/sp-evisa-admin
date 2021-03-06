const pageSize = 25;

/**
 * NOTES using dayjs library:
 * - `dayjs('2018-12-31').format('DD/MM/YYYY')` // console: "31/12/2018"
 * - `dayjs('31-12-2018').format('DD/MM/YYYY')` // console: "NaN/NaN/NaN"
 */
const dateFormat = 'DD/MM/YYYY';
const postgresDateFormat = 'YYYY/MM/DD';
const dateTimeFormat = 'DD/MM/YYYY HH:mm:ss A';

// options
const typeOptions = [
  { id: 'one_month_single', name: '1MS' },
  { id: 'one_month_multiple', name: '1MM' },
  { id: 'three_month_single', name: '3MS' },
  { id: 'three_month_multiple', name: '3MM' },
  { id: 'six_month_multiple', name: '5MM' },
  { id: 'one_year_multiple', name: '1YM' },
];
const purposeOptions = [
  { id: 'tourist', name: 'Tourist' },
  { id: 'business', name: 'Business' },
];
const processingTimeOptions = [
  { id: 'normal', name: 'Normal (Guaranteed 1 working day)' },
  {
    id: 'urgent',
    name: 'Urgent (Guaranteed 4-8 working hours)',
  },
  {
    id: 'emergency',
    name: 'Emergency (Guaranteed 1 working hour)',
  },
];
const statusOptions = [
  { id: 'paid', name: 'paid' },
  { id: 'unpaid', name: 'unpaid' },
  { id: 'refunded', name: 'refunded' },
  { id: 'finished', name: 'finished' },
  { id: 'ignore', name: 'ignore' },
];

const colors = {
  cyan: '#00bcd4',
};

const baseSpacingUnit = 16;

const spaces = {
  xs: baseSpacingUnit / 4,
  s: baseSpacingUnit / 2,
  m: baseSpacingUnit,
  l: baseSpacingUnit * 2,
  xl: baseSpacingUnit * 4,
};

const restClient =
  process.env.NODE_ENV === 'production'
    ? 'https://api.evisa-vn.com'
    : 'http://localhost:8001';

export {
  pageSize,
  dateFormat,
  postgresDateFormat,
  dateTimeFormat,
  typeOptions,
  purposeOptions,
  statusOptions,
  processingTimeOptions,
  colors,
  baseSpacingUnit,
  spaces,
  restClient,
};
