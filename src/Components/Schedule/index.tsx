import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './index.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { ScheduleItem } from './types';
import axios from 'axios';

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect');
    axios
      .get('http://localhost:3001/professional')
      .then((response) => {
        console.log(response.data[0].days);
        setSchedule(response.data[0].days);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const [pageIndex, setPageIndex] = useState(0);
  const daysPerPage = 3;

  const maxSessions = Math.max(...schedule.map((day) => day.time.length));
  console.log(maxSessions);

  const currentPage = schedule.slice(
    pageIndex * daysPerPage,
    (pageIndex + 1) * daysPerPage,
  );

  const nextPage = () => {
    if ((pageIndex + 1) * daysPerPage < schedule.length) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="schedule-calendar">
      <Row>
        <Col>
          <div className="schedule-header">
            <h2 className="schedule-title">Schedule your session!</h2>
            <p>Timezone: São Paulo (-3)</p>
          </div>
        </Col>
      </Row>
      <Table data-testid="schedule-table">
        <TableHeader
          schedule={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          pageIndex={pageIndex}
          totalDays={schedule.length}
          daysPerPage={daysPerPage}
        />
        <TableBody schedule={currentPage} maxSessions={maxSessions} />
      </Table>
    </Container>
  );
};

export default Schedule;
