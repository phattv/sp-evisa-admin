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
  { id: 'normal', name: 'Normal (Guaranteed 2 working days)' },
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
export {
  pageSize,
  dateFormat,
  postgresDateFormat,
  dateTimeFormat,
  typeOptions,
  purposeOptions,
  statusOptions,
  processingTimeOptions,
};
