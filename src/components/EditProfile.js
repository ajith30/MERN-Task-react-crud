import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditProfile({data, handleEdit}) {
    const params = useParams();
    const profile_id = params.id;

    const chosenProfile = data.filter((profile) => {
        return profile.id === profile_id;
    });

    const id = chosenProfile[0].id;
    const [firstName, setFirstName] = useState(chosenProfile[0].firstName);
    const [lastName, setLastName] = useState(chosenProfile[0].lastName);
    const [email, setEmail] = useState(chosenProfile[0].email);
    const [avatar, setAvatar] = useState(chosenProfile[0].avatar);
    const [phone, setPhone] = useState(chosenProfile[0].phone);
    const [title, setTitle] = useState(chosenProfile[0].profile.title);
    const [status, setStatus] = useState(chosenProfile[0].profile.status);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(id)

        const updatedProfile = {
          id,
          firstName,
          lastName,
          email,
          avatar,
          phone,
          profile: {
            title,
            status,
          }  
        };
     

        handleEdit(id, updatedProfile);
        navigate(`/profile/${profile_id}`);
    }

  return (
 
          <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", minHeight: "100vh"}}>
            <form onSubmit={ handleSubmit }>
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Fist Name" variant="filled" defaultValue={chosenProfile[0].firstName} onChange={(e) => {setFirstName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Last Name" variant="filled" defaultValue={chosenProfile[0].lastName} onChange={(e) => {setLastName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Email" variant="filled" defaultValue={chosenProfile[0].email}  onChange={(e) => {setEmail(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Avatar" variant="filled" defaultValue={chosenProfile[0].avatar}  onChange={(e) => {setPhone(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Phone" variant="filled" defaultValue={chosenProfile[0].phone}  onChange={(e) => {setAvatar(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Title" variant="filled" defaultValue={chosenProfile[0].profile.title}  onChange={(e) => {setTitle(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Status" variant="filled" defaultValue={chosenProfile[0].profile.status}  onChange={(e) => {setStatus(e.target.value)}} required/>
                <br />
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button type="submit" variant="outlined" sx={{mb: 3}} >Update Profile</Button>
                </Box>
            </form>
        </Box>

  )
}

export default EditProfile;
