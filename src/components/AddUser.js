import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddUser({handleAdd}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
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

        handleAdd(newUser);

        //Resetting the form after submitting
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        
        navigate("/users");
    }

    return (
    
        <Box sx={{display: "flex", justifyContent: "center",  alignItems: "center", minHeight: "100vh"}}>
            <form onSubmit={handleSubmit}>
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Fist Name" variant="filled" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Last Name" variant="filled" value={lastName} onChange={(e) => {setLastName(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Email" variant="filled" value={email} onChange={(e) => {setEmail(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Avatar" variant="filled" value={avatar}  onChange={(e) => {setAvatar(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Phone" variant="filled" value={phone} onChange={(e) => {setPhone(e.target.value)}}  required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Title" variant="filled" value={title}  onChange={(e) => {setTitle(e.target.value)}} required/>
                <br />
                <TextField id="filled-basic" sx={{width: 500, mb:2}}  label="Status" variant="filled" value={status}  onChange={(e) => {setStatus(e.target.value)}} required/>
                <br />
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button type="submit" variant="outlined" sx={{mb: 3}} >ADD User</Button>
                </Box>
            </form>
        </Box>

    )
}

export default AddUser;
