import React from 'react'
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<IProps> = ({
  isOpen,
  setIsOpen
}) => {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsOpen(false)}
      onKeyDown={() => setIsOpen(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageSearchIcon style={{ color: 'white' }}/>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor='left'
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      {list()}
    </Drawer>
  )
}

export default Sidebar;