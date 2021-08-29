import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import TeacherListResults from 'src/components/teacher/TeacherListResults';
import TeacherListToolbar from 'src/components/teacher/TeacherListToolbar';
import teachers from 'src/__mocks__/teachers';

const TeacherList = () => (
  <>
    <Helmet>
      <title>Teachers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <TeacherListToolbar />
        <Box sx={{ pt: 3 }}>
          <div>Hello Teachers</div>
          <TeacherListResults teachers={teachers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default TeacherList;
