import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from 'src/components/student/StudentListResults';
import StudentListToolbar from 'src/components/student/StudentListToolbar';
import students from 'src/__mocks__/students';

const StudentList = () => (
  <>
    <Helmet>
      <title>Students | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <StudentListToolbar />
        <Box sx={{ pt: 3 }}>
          <StudentListResults students={students} />
        </Box>
      </Container>
    </Box>
  </>
);

export default StudentList;
