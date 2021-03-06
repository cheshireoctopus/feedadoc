import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LinkedInIcon from "../../components/icons/LinkedIn";
import FacebookIcon from "../../components/icons/Facebook";
import EmailIcon from "../../components/icons/Email";
import TwitterIcon from "../../components/icons/Twitter";
import * as socialMediaLinks from "../../data/socialMediaLinks";

const VolunteerCallout = () => (
  <Box display="flex" alignItems="center" py={10} flexDirection="column">
    <Container maxWidth="md">
      <Typography
        component="h2"
        variant="h1"
        p="10"
        align="center"
        color="primary"
      >
        Help us make sure every care provider gets the support they need to
        fight COVID-19
      </Typography>
      <Typography
        component="p"
        variant="h2"
        align="center"
        style={{ marginTop: "20px" }}
      >
        Share #HospitalHero with family, friends, and on social media to help
        spread the word.
      </Typography>
    </Container>
    <Container maxWidth="xs" style={{ marginTop: "40px" }}>
      <Grid container spacing={4}>
        <Grid container item xs={6} sm={3} justify="center">
          <Link href={socialMediaLinks.FACEBOOK_LINK}>
            <FacebookIcon />
          </Link>
        </Grid>
        <Grid container item xs={6} sm={3} justify="center">
          <Link href={socialMediaLinks.TWITTER_LINK}>
            <TwitterIcon />
          </Link>
        </Grid>
        <Grid container item xs={6} sm={3} justify="center">
          <Link href={socialMediaLinks.LINKEDIN_LINK}>
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid container item xs={6} sm={3} justify="center">
          <Link href={socialMediaLinks.EMAIL_LINK}>
            <EmailIcon />
          </Link>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default VolunteerCallout;
