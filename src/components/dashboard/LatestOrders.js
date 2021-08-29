import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: 'CLSS01',
    amount: 30.5,
    customer: {
      name: 'Maths'
    },
    students: 35,
    createdAt: 1555016400000,
    status: 'Live'
  },
  {
    id: uuid(),
    ref: 'CLSS02',
    amount: 25.1,
    customer: {
      name: 'Science'
    },
    students: 45,
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CLSS03',
    amount: 10.99,
    customer: {
      name: 'Social Science'
    },
    students: 35,
    createdAt: 1554930000000,
    status: 'Live'
  },
  {
    id: uuid(),
    ref: 'CLSS04',
    amount: 96.43,
    customer: {
      name: 'Physics'
    },
    students: 55,
    createdAt: 1554757200000,
    status: 'Live'
  },
  {
    id: uuid(),
    ref: 'CLSS05',
    amount: 32.54,
    customer: {
      name: 'Art'
    },
    students: 32,
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CLSS06',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    students: 25,
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Live Classes" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Class
              </TableCell>
              <TableCell>
                Subject
              </TableCell>
              <TableCell>
                Students
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.students}
                </TableCell>
                <TableCell>
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
