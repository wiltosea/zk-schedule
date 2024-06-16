import React from 'react';
import { ScheduleItem } from './types';

interface TableHeaderProps {
  schedule: ScheduleItem[];
  prevPage: () => void;
  nextPage: () => void;
  pageIndex: number;
  totalDays: number;
  daysPerPage: number;
}

const TableHeader: React.FC<TableHeaderProps> = ({ schedule, prevPage, nextPage, pageIndex, totalDays, daysPerPage }) => {
  return (
    <thead className='schedule-table-thead' data-testeid="thead">
      <tr className='thead-tr'>
        <th>
          <div className="button-later text-center" onClick={prevPage} style={{ cursor: 'pointer', visibility: pageIndex === 0 ? 'hidden' : 'visible' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="#A3A9AD"
                fillRule="evenodd"
                d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0M9.28 6.03a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L7.31 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </th>
        {schedule.map((item, index) => (
          <th className="schedule-date" key={item.weekday + index}>
            <div className="d-flex flex-column align-items-center">
              <span className="weekday">{item.weekday}</span>
              <span className="date">{item.date}</span>
            </div>
          </th>
        ))}
        <th>
          <div className="button-next text-center" onClick={nextPage} style={{ cursor: 'pointer', visibility: (pageIndex + 1) * daysPerPage >= totalDays ? 'hidden' : 'visible' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="#515A60"
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m5.72 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L8.69 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
