import React from 'react'

import './style.scss'

import KEYS from '../../redux/staticcontent/keys'
import Markdown from '../Markdown'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    float: 'left',
    width: '50%',
    background: '#D1F2EF',
    boxSizing: 'border-box',
    borderstyle: 'solid',
    bordercolor: '#6da99e',
    borderRadius: '45px',
    padding: '20px',
    margin: '10em 0em 10em 0em',
    fontfamily: 'Arial',
    webkitboxshadow:
      '0px 10px 13px - 7px #000000, 0px 2px 0px 6px rgba(0, 0, 0, 0)',
    boxShadow: '0px 10px 13px - 7px #000000, 0px 2px 0px 6px rgba(0, 0, 0, 0)',
  },
  content: {
    float: 'left',
    width: '100%',
  },
  name: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '25px',
    lineHeight: '30px',
    display: 'flex',
    alignItems: 'center',
    color: '#73F9EC',
  },
  date: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    display: 'flex',
    alignItems: 'center',
    color: '#F5D2A2',
  },
  body: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'center',
    color: '#F5D2A2',
  },
})

const EventTextBox = (hubData) => {
  const classes = useStyles()
  console.log('event data is', hubData, hubData.name)
  return hubData?.name ? (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.name} color="textSecondary" gutterBottom>
          {hubData.name}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          {hubData.desc}
        </Typography>
      </CardContent>
    </Card>
  ) : null
}

export default EventTextBox
