import { useState } from 'react';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Contacts } from '../Contacts';
import { TextArea } from '../TextArea';
import { Messages } from '../Messages';
import variables from '../../styles/variables.module.scss';

export const Chat = () => {
  const [selectedContactId, setSelectedContactId] = useState();

  return (
    <Box sx={{ display: 'flex', background: 'red' }}>
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${variables.drawerWidth}px)`, ml: `${variables.drawerWidth}px` }}
      >
        <Toolbar />
      </AppBar>

      <Contacts currentUserId={selectedContactId} onSelect={setSelectedContactId} />

      <Box component='main' sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />

        {selectedContactId
          ? <Box height='70vh' overflow='hidden'>
            <Messages selectedContactId={selectedContactId} />
          </Box>
          : <Typography>Please select a contact</Typography>
        }

        {selectedContactId && <TextArea selectedContactId={selectedContactId} />}
      </Box>
    </Box>
  );
};
