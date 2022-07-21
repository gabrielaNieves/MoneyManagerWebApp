import { Avatar, Card, CardContent, Divider, makeStyles, styled} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



const useStyles = styled(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

  

const UserCard = () => {
  const styles = useStyles();
 

    return (
    <Box  flex={1} padding={5}  sx={{display: {xs:"none", sm:"block"}}}>
      <Card sx={{textAlign: 'center'}}>
      <CardContent margin="auto">
        <Avatar sx={{
    width: 60,
    height: 60,
    margin:"auto",
  }} src={'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} />
        <h3 >User Name</h3>
        <span className={styles.subheader}>email</span>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={1} margin='auto' >
          <p className={styles.statLabel}>actions</p>
          <p className={styles.statValue}>actions</p>
        </Box>
      </Box>
    </Card>  
    </Box> );
}

export default UserCard;