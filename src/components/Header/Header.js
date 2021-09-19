import { useLayoutEffect, useState } from 'react'
import { AppBar, Box, IconButton } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

import { useGlobalData } from '@Hooks'
import Logo from '@Assets/images/logo@1x.png'
import Logo2 from '@Assets/images/logo@2x.png'
import Nowlogo from '@Assets/images/rocketnowlogo@1x.png'
import Nowlogo2 from '@Assets/images/rocketnowlogo@2x.png'
import MenuProfile from '@Assets/images/menuprofile@1x.png'
import MenuProfile2 from '@Assets/images/menuprofile@2x.png'
import MenuTierra from '@Assets/images/menutierra@1x.png'
import MenuTierra2 from '@Assets/images/menutierra@2x.png'
import MenuProfileDark from '@Assets/images/menuprofiledark.png'
import MenuTierraDark from '@Assets/images/menutierradark.png'

import MenuPopper from './components/Popper'

import useStyles from './styles'

export default function Header() {
  const history = useHistory()
  const location = useLocation()
  const { isLanding } = useGlobalData()
  const classes = useStyles({ isLanding })

  const [openMenu, setOpenMenu] = useState(false)
  const [openTierra, setOpenTierra] = useState(null)
  const [openProfile, setOpenProfile] = useState(null)

  const logo = isLanding ? Logo : Nowlogo
  const logo2 = isLanding ? Logo2 : Nowlogo2
  const profile = isLanding ? MenuProfile : MenuProfileDark
  const profile2 = isLanding ? MenuProfile2 : MenuProfileDark
  const tierra = isLanding ? MenuTierra : MenuTierraDark
  const tierra2 = isLanding ? MenuTierra2 : MenuTierraDark

  useLayoutEffect(() => {
    if (location.hash !== '') {
      const a = document.createElement('a')
      a.href = location.hash
      a.click()
    }
  }, [location.hash])

  return (
    <AppBar
      color="transparent"
      position="relative"
      elevation={0}
      className={classes.header}
    >
      <Box className={classes.logo} onClick={() => history.push('/')}>
        <img src={logo} alt="rocket now" srcSet={`${logo2} 2x`} />
      </Box>

      <Box className={classes.subtoolbar}>
        <MenuPopper
          open={openTierra}
          onClose={() => setOpenTierra(false)}
          type="tierra"
        >
          <IconButton onClick={() => setOpenTierra((prev) => !prev)}>
            <img src={tierra} srcSet={`${tierra2} 2x`} alt="Menu Tierra" />
          </IconButton>
        </MenuPopper>
        <MenuPopper
          open={openProfile}
          onClose={() => setOpenProfile(false)}
          type="profile"
        >
          <IconButton onClick={() => setOpenProfile((prev) => !prev)}>
            <img src={profile} srcSet={`${profile2} 2x`} alt="Menu Profile" />
          </IconButton>
        </MenuPopper>

        <MenuPopper
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          type="menu"
        >
          <IconButton
            onClick={() => setOpenMenu((prev) => !prev)}
            aria-label="menu"
            className={classes.burger}
          >
            <MenuIcon style={{ width: 30, height: 35 }} />
          </IconButton>
        </MenuPopper>
      </Box>
    </AppBar>
  )
}
