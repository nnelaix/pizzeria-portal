import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const demoContentBookings = [
  {id: '1', name: 'Kasia', phone: '01234', table: '1' },
  {id: '2', name: 'Zosia', phone: '01234', table: '2' },
  {id: '3', name: 'Marek', phone: '01234', table: '3'},
  {id: '4', name: 'Ola', phone: '01234', table: '4'},
  {id: '5', name: 'Piotr', phone: '01234', table: '5'},
  {id: '6', name: 'Jan', phone: '01234', table: '6' },
];

const demoContentValue = [
  {id: '1', value: 123},
  {id: '2', value: 234},
  {id: '3', value: 567}, 
  {id: '4', value: 890},
  {id: '5', value: 134},
  {id: '6', value: 432},
];

const HomePage = () => (
  <div className={styles.component}>
    <h2>Home Page</h2>
    <hr />
    <h3>Today`s orders</h3>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Order Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentValue.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h3>Today`s bookings</h3>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentBookings.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.hours}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default HomePage;