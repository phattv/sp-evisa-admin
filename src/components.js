// vendor
import React from 'react';
import dayjs from 'dayjs';
// custom
import { dateFormat, dateTimeFormat } from './constants';

const CustomDateField = params => {
  const { record, source } = params;
  const formattedDate = record[source]
    ? dayjs(record[source]).format(dateFormat)
    : 'N/A';

  return (
    <div>
      {params.hideLabel === true ? null : <CustomLabel label={params.source} />}
      <span>{formattedDate}</span>
    </div>
  );
};

const CustomDateTimeField = params => {
  const { record, source } = params;
  const formattedDateTime = record[source]
    ? dayjs(record[source]).format(dateTimeFormat)
    : 'N/A';

  return (
    <div>
      {params.hideLabel === true ? null : <CustomLabel label={params.source} />}
      <span>{formattedDateTime}</span>
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

export { CustomDateField, CustomDateTimeField };
