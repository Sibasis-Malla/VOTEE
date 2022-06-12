import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { makeStyles } from '@mui/styles';

const HomePage = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Solving world problems through various web applications using efficient programs and tools',
    },
    {
      id: 2,
      icon: <AllInclusiveIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence:
        'Through team work, we collaborate and deliver quality projects of high standards',
    },
    {
      id: 3,
      icon: <PaidOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
      sentence: 'Flexible payment plan is applicable to all our services',
    },
  ];

  const guideItems = [
    {
      id: 1,
      title: 'We build, We revive',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1654866224/hackathons/human-hand-puts-vote-bulletin-into-vote-box-on-the-laptop-screen-vector-id1278554739_mx5tnh.jpg',
      content:
        'Your business needs to be in safe hands at all times. We ensure you never run out of customers and not run at loss. We are trusted by over 500+ companies to deliver quality marketing campaigns using Digital marketing & Offline marketing channels.',
      direction: 'row',
    },
    {
      id: 2,
      title: 'We build, We revive',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1654866224/hackathons/human-hand-puts-vote-bulletin-into-vote-box-on-the-laptop-screen-vector-id1278554739_mx5tnh.jpg',
      content:
        'Your business needs to be in safe hands at all times. We ensure you never run out of customers and not run at loss. We are trusted by over 500+ companies to deliver quality marketing campaigns using Digital marketing & Offline marketing channels.',
      direction: 'row-reverse',
    },
    {
      id: 3,
      title: 'We build, We revive',
      image:
        'https://res.cloudinary.com/sambitsankalp/image/upload/v1654866224/hackathons/human-hand-puts-vote-bulletin-into-vote-box-on-the-laptop-screen-vector-id1278554739_mx5tnh.jpg',
      content:
        'Your business needs to be in safe hands at all times. We ensure you never run out of customers and not run at loss. We are trusted by over 500+ companies to deliver quality marketing campaigns using Digital marketing & Offline marketing channels.',
      direction: 'row',
    },
  ];
  return (
    <>
      <Box className={classes.heroBox}>
        <Grid container spacing={6} className={classes.gridContainer}>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight={700} className={classes.title}>
              Let's scale your business
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Hire professionals who will help your business make 10X your
              previous income. With over 5years experience in Marketing &
              Business strategy, we are your best client.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '200px', fontSize: '16px' }}
            >
              HIRE US
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://res.cloudinary.com/sambitsankalp/image/upload/v1654866205/hackathons/election-referendum-campaign_74855-6386_imrtjl.jpg"
              alt="My Team"
              className={classes.largeImage}
            />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h4" className={classes.formHeading}>
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
              <Typography>{item.sentence}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography variant="h4" className={classes.formHeading}>
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
                fontWeight={500}
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
  },
  subtitle: {
    opacity: '0.4',
    paddingBottom: '30px',
  },
  largeImage: {
    width: '100%',
  },
  sectionGridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '500px',
  },
  sectionGridItem: {
    backgroundColor: '#f2f0f1',
    textAlign: 'center',
    padding: '30px',
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
