import { useState, cloneElement } from 'react'
import { Popper, Paper, ClickAwayListener, Box, Fade } from '@material-ui/core'
import Menu from '../Menu'
import MenuTierra from '../MenuTierra'
import MenuProfile from '../MenuProfile'

import useStyles from './styles'

export default function MenuPopper({ open, onClose, children, type }) {
  const classes = useStyles()
  const [arrowRef, setArrowRef] = useState(null)
  const [childNode, setChildNode] = useState(null)
  return (
    <>
      {cloneElement(children, { ...children.props, ref: setChildNode })}
      <Popper
        open={open || false}
        className={classes.popper}
        anchorEl={childNode}
        placement="bottom"
        transition
        modifiers={{
          preventOverflow: {
            enabled: true,
            boundariesElement: 'window'
          },
          arrow: {
            enabled: true,
            element: arrowRef
          }
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={600}>
            <Paper elevation={0} square style={{ height: '100%' }}>
              <ClickAwayListener onClickAway={onClose}>
                <Paper className={classes.popoverRoot} elevation={0} square>
                  <span className={classes.arrow} ref={setArrowRef} />
                  <Box>
                    {type === 'menu' && <Menu />}
                    {type === 'tierra' && <MenuTierra />}
                    {type === 'profile' && <MenuProfile />}
                  </Box>
                </Paper>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}
