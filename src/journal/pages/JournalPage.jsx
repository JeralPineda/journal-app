import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NotesView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid itaque officia odit laudantium corrupti? Numquam repudiandae rem aspernatur? Quas, error illo tenetur adipisci nobis dolores itaque nihil facere facilis assumenda!</Typography> */}

      {/* <NothingSelectedView /> */}

      <NotesView />

      <IconButton
        //
        size="large"
        sx={{
          color: '#fff',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9,
          },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
