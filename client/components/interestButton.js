import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Container from '@material-ui/core/Container'
import Typography from './Typography'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4)
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
})

function ProductCategories(props) {
  const {classes} = props

  const images = [
    {
      url:
        'https://content.fortune.com/wp-content/uploads/2018/03/gettyimages-539706813.jpg',
      title: "Women's Rights",
      width: '40%',
      href: 'events/category/11'
    },
    {
      url:
        'https://www.un.org/sites/www.un.org/files/styles/large/public/2018/12/18/wind-turbines-cadiz-spain.jpg',
      title: 'Environmental',
      width: '20%',
      href: 'events/category/3'
    },
    {
      url:
        'https://d32dm0rphc51dk.cloudfront.net/Z4jqhLwgmncFz2EnK3jfig/large.jpg',
      title: 'Human Rights',
      width: '40%',
      href: 'events/category/1'
    },
    {
      url:
        'https://sdgln.com/sites/default/files/styles/story_small/public/articles/images/main/PRIDEE.jpg?itok=A_UDu8IG&timestamp=1528082625',
      title: 'LGBTQIA',
      width: '38%',
      href: 'events/category/2'
    },
    {
      url:
        'https://static01.nyt.com/images/2019/11/08/magazine/08atwar-newsletter/08atwar-newsletter-superJumbo.jpg',
      title: 'Anti-War',
      width: '38%',
      href: 'events/category/4'
    },
    {
      url:
        'https://media.wired.com/photos/5c50c209ae95ea2c3a290266/4:3/w_2132,h_1599,c_limit/BorderWall-Update-1096612542.jpg',
      title: 'Immigration',
      width: '24%',
      href: 'events/category/5'
    },
    {
      url:
        'https://s.marketwatch.com/public/resources/images/MW-FX195_Opioid_ZH_20171027152900.jpg',
      title: 'Drug Reform',
      width: '40%',
      href: 'events/category/6'
    },
    {
      url:
        'https://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--1_5x-768x512/public/lon21718_1.jpg?itok=jRaQe4vk',
      title: 'Voting Rights',
      width: '20%',
      href: 'events/category/8'
    },
    {
      url:
        'https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      title: 'Economy',
      width: '40%',
      href: 'events/category/12'
    },
    {
      url:
        'https://www.franklin.edu/sites/default/files/fr/back%20to%20college%20blog/main%20images/metal%20scale%20with%20books%20in%20background.jpg',
      title: 'Criminal Justice',
      width: '38%',
      href: 'events/category/10'
    },
    {
      url:
        'https://nationalpostcom.files.wordpress.com/2019/06/0717_biz_tb_dairy-e1559922356162.jpg?quality=80&strip=all&w=780',
      title: 'Animal Rights',
      width: '38%',
      href: 'events/category/7'
    },
    {
      url:
        'https://www.commondreams.org/sites/default/files/styles/cd_large/public/views-article/homeless_3.jpg?itok=A3d2UkiU',
      title: 'Anti-poverty',
      width: '24%',
      href: 'events/category/13'
    },
    {
      url:
        'https://online-learning.harvard.edu/sites/default/files/styles/header/public/course/ChildProtection.jpg?itok=8U-svr9p',
      title: "Children's Rights",
      width: '40%',
      href: 'events/category/14'
    },
    {
      url:
        'https://www.boardeffect.com/wp-content/uploads/2019/06/The-Role-of-Governance-in-Healthcare.jpg',
      title: 'Healthcare',
      width: '20%',
      href: 'events/category/15'
    },
    {
      url:
        'https://psmag.com/.image/t_share/MTI4NzYxNDYwMzM0NTY1ODU0/shutterstock_213333985jpg.jpg',
      title: 'Education',
      width: '40%',
      href: 'events/category/16'
    }
  ]

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Browse by Interest
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width
            }}
            href={image.href}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  )
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCategories)
