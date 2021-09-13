import {
  Button,
  TextField,
  Link,
  Typography,
  Box,
  Card
} from '@material-ui/core'
import useStyles from './styles'
import { useState } from 'react'

export default function Launch() {
  const classes = useStyles()

  const [launch, setLaunch] = useState({
    project_name: '',
    why: '',
    what: '',
    how: ''
  })

  return (
    <Box className={classes.root}>
      <Card>
        <Typography variant="h5" className={classes.title}>
          Lanzamiento
        </Typography>
        <form size="small" className={classes.form} method="post">
          <Card className={classes.card}>
            <Typography variant="subtitle2" className={classes.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
              enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
            </Typography>
            <TextField
              className={classes.input}
              name="project_name"
              label="Project"
              variant="outlined"
              color="primary"
              required
              autoComplete="off"
              fullWidth
              id="project_name"
              value={launch.project_name}
              onChange={(e) =>
                setLaunch((prev) => ({ ...prev, project_name: e.target.value }))
              }
              autoFocus
            />
          </Card>
          <Card className={classes.card}>
            <Typography variant="subtitle2" className={classes.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
              enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
            </Typography>
            <TextField
              className={classes.input}
              name="why"
              label="why"
              variant="outlined"
              color="primary"
              required
              autoComplete="off"
              fullWidth
              id="why"
              value={launch.why}
              onChange={(e) =>
                setLaunch((prev) => ({ ...prev, why: e.target.value }))
              }
            />
          </Card>
          <Card className={classes.card}>
            <Typography variant="subtitle2" className={classes.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
              enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
            </Typography>
            <TextField
              className={classes.input}
              name="what"
              label="what"
              variant="outlined"
              color="primary"
              required
              autoComplete="off"
              fullWidth
              id="what"
              value={launch.what}
              onChange={(e) =>
                setLaunch((prev) => ({ ...prev, what: e.target.value }))
              }
            />
          </Card>
          <Card className={classes.card}>
            <Typography variant="subtitle2" className={classes.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
              enim quis cupiditate, mollitia quae nemo ad modi distinctio esse.
            </Typography>
            <TextField
              className={classes.input}
              name="password"
              label="Password"
              variant="outlined"
              color="primary"
              required
              autoComplete="off"
              fullWidth
              id="how"
              value={launch.how}
              onChange={(e) =>
                setLaunch((prev) => ({ ...prev, how: e.target.value }))
              }
            />
          </Card>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Launch
          </Button>
          <Typography variant="h5" className={classes.title}>
            <Link href="#" variant="body2" color="inherit">
              Ya tienes una cuenta? Login
            </Link>
          </Typography>
        </form>
      </Card>
    </Box>
  )
}
