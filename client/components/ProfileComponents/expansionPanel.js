import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UpdateForm from './updateForm'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '50%S'
  },
  heading: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: theme.typography.fontWeightLight
  }
}))

export default function SimpleExpansionPanel(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Update Account Details
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <UpdateForm
              userId={props.userId}
              firstName={props.firstName}
              lastName={props.lastName}
              email={props.email}
              image={props.image}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
