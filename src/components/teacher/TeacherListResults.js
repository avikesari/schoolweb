import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const TeacherListResults = ({ teachers, ...rest }) => {
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedTeacherIds;

    if (event.target.checked) {
      newSelectedTeacherIds = teachers.map((teacher) => teacher.id);
    } else {
      newSelectedTeacherIds = [];
    }

    setSelectedTeacherIds(newSelectedTeacherIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTeacherIds.indexOf(id);
    let newSelectedTeacherIds = [];

    if (selectedIndex === -1) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds, id);
    } else if (selectedIndex === 0) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds.slice(1));
    } else if (selectedIndex === selectedTeacherIds.length - 1) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(selectedTeacherIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTeacherIds = newSelectedTeacherIds.concat(
        selectedTeacherIds.slice(0, selectedIndex),
        selectedTeacherIds.slice(selectedIndex + 1)
      );
    }

    setSelectedTeacherIds(newSelectedTeacherIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedTeacherIds.length === teachers.length}
                    color="primary"
                    indeterminate={
                      selectedTeacherIds.length > 0
                      && selectedTeacherIds.length < teachers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  class
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.slice(0, limit).map((teacher) => (
                <TableRow
                  hover
                  key={teacher.id}
                  selected={selectedTeacherIds.indexOf(teacher.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTeacherIds.indexOf(teacher.id) !== -1}
                      onChange={(event) => handleSelectOne(event, teacher.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={teacher.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(teacher.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {teacher.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {teacher.email}
                  </TableCell>
                  <TableCell>
                    {teacher.phone}
                  </TableCell>
                  <TableCell>
                    {teacher.class}
                  </TableCell>
                  <TableCell>
                    {moment(teacher.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={teachers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TeacherListResults.propTypes = {
  teachers: PropTypes.array.isRequired
};

export default TeacherListResults;
