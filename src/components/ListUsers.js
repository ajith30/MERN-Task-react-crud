import { Add, Delete, Edit} from "@mui/icons-material";
import { Box, Container, Fab, Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ListUsers({data, handleDelete}) {

    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-user/${id}`);
    }

    return(

        <Container >
            <TableContainer component={Paper} sx={{my: 3}}>
                <Table sx={{minWidth: 650}} >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Profile</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center"colSpan={2}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((user, index) => {
                            return(
                                <TableRow key={index}>
                                    <TableCell align="center">
                                        <Fab size="large" title="Change Profile">
                                            <img className="profile-avatar" src={user.avatar} alt="prfile" onClick={() => {navigate(`/profile/${user.id}`)}} />
                                        </Fab>
                                        </TableCell>
                                    <TableCell align="center">{user.firstName}</TableCell>
                                    <TableCell align="center">{user.lastName}</TableCell>
                                    <TableCell align="center">{user.email}</TableCell>
                                    <TableCell align="center">{user.phone}</TableCell>
                                    <TableCell>
                                        <Tooltip title="Edit" onClick={() => {handleEdit(user.id)}}>
                                            <Fab size="medium" color="secondary" aria-label="edit">
                                                <Edit />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>
                                        <Tooltip title="Delete" onClick={() =>{handleDelete(user.id)}}>
                                            <Fab size="medium" color="error" aria-label="dlete">
                                                <Delete />
                                            </Fab>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{display:"flex", justifyContent: "center", my: 3}}>
            <Tooltip title="Add" onClick={() => { navigate("/create-user")}}>
                <Fab size="medium" color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            </Box>
            </Container>
    );
}

export default ListUsers;