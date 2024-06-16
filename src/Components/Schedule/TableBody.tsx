import React from 'react';
import { ScheduleItem } from './types';

interface TableBodyProps {
  schedule: ScheduleItem[];
  maxSessions: number;
}

const TableBody: React.FC<TableBodyProps> = ({ schedule, maxSessions }) => {
  return (
    <tbody data-testid="tbody">
      {[...Array(maxSessions)].map((_, rowIndex) => (
        <tr key={rowIndex}>
          <td></td>
          {schedule.map(day => (
            <td key={day.weekday + rowIndex} className='text-center'>
              {day.time[rowIndex] ? day.time[rowIndex].session : ''}
            </td>
          ))}
          <td></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
