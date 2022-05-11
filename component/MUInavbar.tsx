import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import Link from 'next/link';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility } from '@mui/icons-material';

import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import React, { useState } from 'react';

export default function NavbarIndexTop({ checked, setChecked }) {
  const [hide, setHide] = useState(true);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const openTwo = Boolean(anchorElTwo);

  const [anchorElThree, setAnchorElThree] = useState<null | HTMLElement>(null);
  const openThree = Boolean(anchorElThree);

  const [anchorElFour, setAnchorElFour] = useState<null | HTMLElement>(null);
  const openFour = Boolean(anchorElFour);

  const [anchorElFifth, setAnchorElFifth] = useState<null | HTMLElement>(null);
  const openFifth = Boolean(anchorElFifth);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  const handleClickThree = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElThree(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  const handleClickFour = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFour(event.currentTarget);
  };
  const handleCloseFour = () => {
    setAnchorElFour(null);
  };

  const handleClickFifth = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFifth(event.currentTarget);
  };
  const handleCloseFifth = () => {
    setAnchorElFifth(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const navBgColor = checked ? 'white' : 'black';
  const navTextColor = checked ? 'black' : 'white';

  const borderColor = checked ? 'black' : 'white';
  const bgColor = checked ? 'white' : 'black';

  return (
    <AppBar
      style={{
        marginBottom: '50px',
        backgroundColor: navBgColor,
        color: navTextColor,
        border: '1px solid',
        borderColor: navTextColor,
      }}
    >
      {hide ? (
        <Toolbar className='columnNavbar'>
          <IconButton
            onClick={() => setHide(!hide)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
          >
            <Visibility />
          </IconButton>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            Next&&MaterialUI
          </Typography>
          <Button
            variant='contained'
            component='button'
            style={{
              backgroundColor: navBgColor,
              color: navTextColor,
            }}
            onClick={() => setChecked(!checked)}
          >
            {checked ? 'White' : 'Black'}
          </Button>

          <Stack
            display='flex'
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
          >
            <Button
              color='inherit'
              style={{
                backgroundColor: navBgColor,
                color: navTextColor,
              }}
              component='button'
            >
              <Link href='/'>Home</Link>
            </Button>

            <Button
              color='inherit'
              id='resources-button'
              onClick={handleClick}
              // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
              aria-controls={open ? 'resources-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              Interactive section
            </Button>

            <Button
              color='inherit'
              id='resources-buttonTwo'
              onClick={handleClickTwo}
              // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
              aria-controls={openTwo ? 'resources-menuTwo' : undefined}
              aria-haspopup='true'
              aria-expanded={openTwo ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              Inputs section
            </Button>

            <Button
              color='inherit'
              id='resources-buttonThree'
              onClick={handleClickThree}
              // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
              aria-controls={openThree ? 'resources-menuThree' : undefined}
              aria-haspopup='true'
              aria-expanded={openThree ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              Layout section
            </Button>

            <Button
              color='inherit'
              id='resources-buttonFour'
              onClick={handleClickFour}
              // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
              aria-controls={openFour ? 'resources-menuFour' : undefined}
              aria-haspopup='true'
              aria-expanded={openFour ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              Data section
            </Button>
            <Button
              color='inherit'
              id='resources-buttonFifth'
              onClick={handleClickFifth}
              // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
              aria-controls={openFifth ? 'resources-menuFifth' : undefined}
              aria-haspopup='true'
              aria-expanded={openFifth ? 'true' : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              ETC
            </Button>
          </Stack>

          <Menu
            PaperProps={{
              sx: {
                backgroundColor: bgColor,
                border: '1px solid',
                borderColor: borderColor,
                color: borderColor,
              },
            }}
            id='resources-menu'
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              'aria-labelledby': 'resources-button',
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href='/typography'>Link to typography</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href='/muibuttons'>Link to button</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href='/groupbuttons'>Link to Group buttons</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href='/togglebutton'>Link to Toggle-button</Link>
            </MenuItem>
          </Menu>

          <Menu
            PaperProps={{
              sx: {
                backgroundColor: bgColor,
                border: '1px solid',
                borderColor: borderColor,
                color: borderColor,
              },
            }}
            anchorEl={anchorElTwo}
            open={openTwo}
            MenuListProps={{
              'aria-labelledby': 'resources-buttonTwo',
            }}
            onClose={handleCloseTwo}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/textfield'>Link to Text-field</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/select'>Link to Select</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/radiobutton'>Link to RadioButton</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/checkbox'>Link to Checkbox</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/rating'>Link to Rating</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/autocomplete'>Link to Autocomplete</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseTwo}>
              <Link href='/calculator'>Link to Calculator</Link>
            </MenuItem>
          </Menu>

          <Menu
            PaperProps={{
              sx: {
                backgroundColor: bgColor,
                border: '1px solid',
                borderColor: borderColor,
                color: borderColor,
              },
            }}
            anchorEl={anchorElThree}
            open={openThree}
            MenuListProps={{
              'aria-labelledby': 'resources-buttonThree',
            }}
            onClose={handleCloseThree}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseThree}>
              <Link href='/box'>Link to Box and Grid</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/accordion'>Link to Accordion</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/card'>Link to Card</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/imagelist'>Link to ImageList</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/navbar'>Link to Navbar</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/drawer'>Link to Drawer</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/speeddial'>Link to SpeedDial</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseThree}>
              <Link href='/bottomnavigation'>Link to Bottom Navigation</Link>
            </MenuItem>
          </Menu>

          <Menu
            PaperProps={{
              sx: {
                backgroundColor: bgColor,
                border: '1px solid',
                borderColor: borderColor,
                color: borderColor,
              },
            }}
            anchorEl={anchorElFour}
            open={openFour}
            MenuListProps={{
              'aria-labelledby': 'resources-buttonThree',
            }}
            onClose={handleCloseFour}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseFour}>
              <Link href='/avatars'>Link to Avatars</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFour}>
              <Link href='/badge'>Link to Badge</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFour}>
              <Link href='/chip'>Link to Chip</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFour}>
              <Link href='/tooltip'>Link to Tooltip</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFour}>
              <Link href='/table'>Link to Table</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFour}>
              <Link href='/tablejson'>Link to TableJSON</Link>
            </MenuItem>
          </Menu>

          <Menu
            PaperProps={{
              sx: {
                backgroundColor: bgColor,
                border: '1px solid',
                borderColor: borderColor,
                color: borderColor,
              },
            }}
            anchorEl={anchorElFifth}
            open={openFifth}
            MenuListProps={{
              'aria-labelledby': 'resources-buttonThree',
            }}
            onClose={handleCloseFifth}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/alert'>Link to Alert</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/snackbars'>Link to Snackbars</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/dialog'>Link to Dialog</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/skeleton'>Link to Skeleton</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/pickerdate'>Link to PickerDate</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/tabs'>Link to Tabs</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/responsiveness'>Link to Responsiveness</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseFifth}>
              <Link href='/masonry'>Link to Masonry</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      ) : (
        <Toolbar className='columnNavbar'>
          <IconButton
            onClick={() => setHide(!hide)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='logo'
          >
            <VisibilityOffIcon />
          </IconButton>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            Next&&MaterialUI
          </Typography>
        </Toolbar>
      )}
    </AppBar>
  );
}
