// vendor
import React from 'react';
import dayjs from 'dayjs';
// custom
import { dateFormat, dateTimeFormat } from './constants';

const CustomDateField = params => {
  const { record, source, hideLabel } = params;
  const formattedDate = record[source]
    ? dayjs(record[source]).format(dateFormat)
    : 'N/A';

  return (
    <div>
      {hideLabel === true ? null : <CustomLabel label={source} />}
      <span>{formattedDate}</span>
    </div>
  );
};

const CustomDateTimeField = params => {
  const { record, source, hideLabel } = params;
  const formattedDateTime = record[source]
    ? dayjs(record[source]).format(dateTimeFormat)
    : 'N/A';

  return (
    <div>
      {hideLabel === true ? null : <CustomLabel label={source} />}
      <span>{formattedDateTime}</span>
    </div>
  );
};

const Divider = params => {
  const { label } = params;
  return (
    <div
      style={{
        marginTop: 50,
        paddingTop: 8,
        borderTop: '1px solid black',
        textTransform: 'uppercase',
      }}
    >
      <strong>{label}</strong>
    </div>
  );
};

const CustomLabel = params => {
  const { label } = params;
  return (
    <label
      style={{
        fontSize: 12,
        lineHeight: '24px',
        display: 'block',
        cursor: 'not-allowed',
        paddingTop: 12,
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.3)',
      }}
    >
      {label.replace(/_/g, ' ')}
    </label>
  );
};

export { CustomDateField, CustomDateTimeField, Divider };
