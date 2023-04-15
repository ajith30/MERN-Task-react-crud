import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

function EditUser({data, handleEdit}) {
  
    const params = useParams();
    const user_id = params.id; 

    const chosenUser = data.filter((user) => {
        return user.id === user_id;
  
    });


    const id = chosenUser[0].id;
    const [firstName, setFirstName] = useState(chosenUser[0].firstName);
    const [lastName, setLastName] = useState(chosenUser[0].lastName);
    const [email, setEmail] = useState(chosenUser[0].email);
    const [phone, setPhone] = useState(chosenUser[0].phone);
    const [avatar, setAvatar] = useState(chosenUser[0].avatar);
    const [title, setTitle] = useState(chosenUser[0].profile.title);
    const [status, setStatus] = useState(chosenUser[0].profile.status);


    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(id)

        const updatedUser = {
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
     
        handleEdit(id, updatedUser);
        navigate("/users"); //Redirecting to /users after submitting the form
    }

    return(
        <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", minHeight: "100vh"}}>
            <form onSubmit={ handleSubmit }>
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Fist Name" variant="filled" defaultValue={chosenUser[0].firstName} onChange={(e) => {setFirstName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Last Name" variant="filled" defaultValue={chosenUser[0].lastName} onChange={(e) => {setLastName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Email" variant="filled" defaultValue={chosenUser[0].email}  onChange={(e) => {setEmail(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Avatar" variant="filled" defaultValue={chosenUser[0].avatar}  onChange={(e) => {setPhone(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Phone" variant="filled" defaultValue={chosenUser[0].phone}  onChange={(e) => {setAvatar(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="title" variant="filled" defaultValue={chosenUser[0].profile.title}  onChange={(e) => {setTitle(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="status" variant="filled" defaultValue={chosenUser[0].profile.status}  onChange={(e) => {setStatus(e.target.value)}} required/>
                <br />
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button type="submit" variant="outlined" sx={{mb: 3}} >Update User</Button>
                </Box>
            </form>
        </Box>
    );
}

export default EditUser;