import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar,IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://avatars.githubusercontent.com/u/98107416?s=400&v=4'/>   
        <div className='sidebar__headerRight'>
            <IconButton>
                <DonutLargeIcon/>
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
      </div> 
      <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlined/>
            <input placeholder='Search or start new chat' type="text"/>
          </div>
      </div>           
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar
