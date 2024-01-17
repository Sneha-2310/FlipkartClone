import { Typography,Box ,Menu,MenuItem,styled} from '@mui/material'
import React, { useState } from 'react'
import PowerSettingNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)  `
margin-top:5px
`
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`
const Profile = ({account}) => {
  const [open,setOpen]= useState(false);
  
  const handleClick=(e)=>{
    setOpen(e.currentTarget);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <>
    <Box onClick={handleClick}>
        <Typography style={{margin:2}}>
          {account}
        </Typography>
    </Box>
    <Component
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <PowerSettingNewIcon/>
                <Logout>
                    Logout
                </Logout>
            </MenuItem>
        </Component>
    </>
  )
}
export default Profile;