/* eslint-disable */
import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Groups, HowToReg, Poll } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const HomePage = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <Groups sx={{ fontSize: 100, color: '#232946' }} />,
      sentence:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna.',
    },
    {
      id: 2,
      icon: <Poll sx={{ fontSize: 100, color: '#232946' }} />,
      sentence:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna.',
    },
    {
      id: 3,
      icon: <HowToReg sx={{ fontSize: 100, color: '#232946' }} />,
      sentence:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna.',
    },
  ];

  const guideItems = [
    {
      id: 1,
      title: 'Connect Metamask',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1655061859/hackathons/31d7da16a4b2e5f56d511972377d75f7_kvq7sd.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna. Sed viverra consectetur elit in sagittis. Maecenas ultrices lectus ac risus ultrices, eget malesuada nunc imperdiet. Vivamus lacinia, magna ac bibendum dictum, lorem lorem volutpat sem, a lacinia erat tellus vitae dolor.',
      direction: 'row',
    },
    {
      id: 2,
      title: 'Create Rooms',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1655063242/hackathons/creative-workplace-with-computer-monitor-empty-no-people-cabinet-vector-id1165699436_qdf5yf.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna. Sed viverra consectetur elit in sagittis. Maecenas ultrices lectus ac risus ultrices, eget malesuada nunc imperdiet. Vivamus lacinia, magna ac bibendum dictum, lorem lorem volutpat sem, a lacinia erat tellus vitae dolor.',
      direction: 'row-reverse',
    },
    {
      id: 3,
      title: 'Add Voters',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1655062964/hackathons/multinational-team-vector-id1278976564_th7vw5.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna. Sed viverra consectetur elit in sagittis. Maecenas ultrices lectus ac risus ultrices, eget malesuada nunc imperdiet. Vivamus lacinia, magna ac bibendum dictum, lorem lorem volutpat sem, a lacinia erat tellus vitae dolor.',
      direction: 'row',
    },
    {
      id: 4,
      title: 'Create Proposals',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1655063650/hackathons/the-startup-garage-website-development-request-for-proposal_kxegtc.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna. Sed viverra consectetur elit in sagittis. Maecenas ultrices lectus ac risus ultrices, eget malesuada nunc imperdiet. Vivamus lacinia, magna ac bibendum dictum, lorem lorem volutpat sem, a lacinia erat tellus vitae dolor.',
      direction: 'row-reverse',
    },
    {
      id: 5,
      title: 'Start Voting',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1654866224/hackathons/human-hand-puts-vote-bulletin-into-vote-box-on-the-laptop-screen-vector-id1278554739_mx5tnh.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque rhoncus magna. Sed viverra consectetur elit in sagittis. Maecenas ultrices lectus ac risus ultrices, eget malesuada nunc imperdiet. Vivamus lacinia, magna ac bibendum dictum, lorem lorem volutpat sem, a lacinia erat tellus vitae dolor.',
      direction: 'row',
    },
  ];
  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              fontWeight={700}
              style={{ color: '#232946' }}
              className={classes.title}
            >
              Vote in your own way
            </Typography>
            <Typography
              variant="h6"
              style={{ color: '#232946' }}
              className={classes.subtitle}
            >
              Start your process by creating a room, write proposals and make
              your team register as a VOTEE in the room and make your decisions
              in a smoother and faster way...
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1655060810/hackathons/image_1_bameyw.png"
              alt="My Team"
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography fontWeight={700} variant="h4" className={classes.formHeading}>
        Features
      </Typography>
      <Box sx={{ flexGrow: 1, minHeight: '400px' }}>
        <Grid container className={classes.sectionGridContainer}>
          {sectionItems.map((item) => (
            <Grid
              item
              xs={12}
              md={3.5}
              minHeight={300}
              key={item.id}
              className={classes.sectionGridItem}
            >
              {item.icon}
              <Typography style={{ color: '#232946' }}>
                {item.sentence}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography fontWeight={700} variant="h4" className={classes.formHeading}>
        Guides
      </Typography>
      <Box className={classes.aboutUsContainer}>
        {guideItems.map(({ id, title, image, content, direction }) => (
          <Grid
            key={id}
            container
            spacing={6}
            className={classes.gridContainer}
            style={{ flexDirection: direction }}
          >
            <Grid item xs={12} md={5}>
              <img src={image} alt={title} className={classes.largeImage} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight={400}
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography className={classes.aboutUsSubtitle}>
                {content}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default HomePage;

const useStyles = makeStyles((theme) => ({
  toolBar: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'white',
  },
  logo: {
    color: 'blue',
    cursor: 'pointer',
  },
  link: {
    color: '#000',
  },
  menuIcon: {
    color: '#000',
  },
  formContainer: {
    flexGrow: 1,
    padding: '10px',
    maxWidth: '700px',
    margin: '30px auto',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
    },
  },
  form: {
    marginTop: '30px',
  },
  formHeading: {
    textAlign: 'center',
    marginTop: '40px',
  },
  heroBox: {
    width: '100%',
    display: 'flex',
    minHeight: '600px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1300px',
    padding: '50px',
  },
  aboutUsContainer: {
    width: '100%',
    padding: '50px',
    display: 'flex',
    minHeight: '400px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutUsSubtitle: {
    opacity: '0.7',
    paddingBottom: '30px',
    fontSize: '18px',
  },
  title: {
    paddingBottom: '15px',
    color: '#232946',
  },
  subtitle: {
    opacity: '0.4',
    paddingBottom: '30px',
    color: '#232946',
  },
  largeImage: {
    width: '100%',
  },
  sectionGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '30px',
  },
  sectionGridItem: {
    backgroundColor: '#fffffe',
    textAlign: 'center',
    padding: '50px 30px',
    width: '200px',
    borderRadius: '10px',
    margin: '10px !important',
  },
  inputField: {
    marginBottom: '20px !important',
  },
  textArea: {
    width: '100%',
    marginBottom: '20px',
    fontSize: '16px',
    padding: '10px',
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    miHeight: '10vh',
    padding: '20px',
    justifyContent: 'center',
    backgroundColor: '#f2f0f1',
    flexDirection: 'column',
  },
  footerText: {
    paddingBottom: '10px',
  },
  footerDate: {
    opacity: '0.4',
  },
  testimonialCard: {
    backgroundColor: '#fff',
    padding: '10px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  testimonialStatement: {
    paddingBottom: '25px',
  },
  avatar: {
    marginRight: '10px',
  },
  testimonialPosition: {
    fontSize: '14px',
    opacity: '0.6',
  },
}));
