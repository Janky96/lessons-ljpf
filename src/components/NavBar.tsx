import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ["Discipleship 1", "Discipleship 2", "Spiritual Gifts", "Baptism"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState("it");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleItClicked = () => {
    setSelectedLang("it");
  }

  const handleEngClicked = () => {
    setSelectedLang("eng");
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                <Typography variant="h4">{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', marginRight: '1rem'}}>
            <span className={`fi fi-it ${selectedLang !== 'it' && 'flag-not-active'}`} style={{ fontSize: '3rem'}} onClick={handleItClicked}></span>
            <span className={`fi fi-us ${selectedLang !== 'eng' && 'flag-not-active'}`} style={{ fontSize: '3rem'}} onClick={handleEngClicked}></span>
          </Box> */}
          <Typography variant="h3">
            LJPF
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;