import {  Box, Button, Card, CardActions, CardContent,  Stack, Typography} from "@mui/material";
import {  Edit, Facebook, Home, Instagram, LinkedIn, Share, Twitter } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";


function Profile({data}) {
    const params = useParams();
    const profile_id = params.id; 

    const navigate = useNavigate();

    const chosenProfile = data.filter((profile) => {
        return profile.id === profile_id;
    });
 
  return (
      <Box sx={{ display: "flex", justifyContent: "center",  minHeight: "100vh", bgcolor: "#424242"}}>
        <Card sx={{ minWidth: 345, maxHeight: 600,  my:2}}>
          <CardContent>
            <Box sx={{display: "flex",  justifyContent: "center", m: 0}}>
              <img  className="profile" src={chosenProfile[0].avatar} alt="profile"/>
            </Box>
            <Typography textAlign="center" my={2} variant="h6">{`${chosenProfile[0].firstName} ${chosenProfile[0].lastName}`}</Typography>

            <Typography varient="caption" fontWeight={900}>Email: </Typography>
            <Typography variant="p">{chosenProfile[0].email}</Typography>

            <Typography mt={2} varient="caption" fontWeight={900}>Phone: </Typography>
            <Typography variant="p">{chosenProfile[0].phone}</Typography>

            <Typography mt={2} varient="caption" fontWeight={900}>Role: </Typography>
            <Typography variant="p">{chosenProfile[0].profile.title}</Typography>

            <Typography mt={2} varient="caption" fontWeight={900}>Status: </Typography>
            <Typography  variant="body2" color="text.primary">
                {chosenProfile[0].profile.status}
            </Typography>
          </CardContent>

          <Stack direction="row" justifyContent="center" gap={2} mb={2}>
            <Twitter />
            <Facebook />
            <LinkedIn />
            <Instagram />
          </Stack>


          <CardActions sx={{display: "flex", justifyContent: "space-around"}}>
              <Button variant="outlined" onClick={() => {navigate(`/edit-profile/${profile_id}`)}} startIcon={<Edit color="secondary"  />}>
                  Edit
              </Button>

              <Button variant="outlined"  onClick={() => {navigate(`/users`)}} startIcon={<Home   color="primary"  />}>
                  Users
              </Button>
              <Share />
          </CardActions>
        </Card>
      </Box>
  )
}

export default Profile;
