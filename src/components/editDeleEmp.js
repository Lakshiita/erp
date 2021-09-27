import { AppBar, Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@material-ui/core";
import React,{Component} from "react";


class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            students:[
                {id: 1, name: 'Jaju Juneja', age: 20, email: 'jaju@gmail.com'},
                {id: 2, name: 'Ali Faruque', age: 22, email: 'ali@gmail.com'},
                {id: 3, name: 'Jaju Jaja', age: 20, email: 'jaju@gmail.com'},
                {id: 4, name: 'Ali khan', age: 22, email: 'ali@gmail.com'},
                {id: 1, name: 'Jaju Juneja', age: 20, email: 'jaju@gmail.com'},
                {id: 2, name: 'Ali Faruque', age: 22, email: 'ali@gmail.com'},
                {id: 3, name: 'Jaju Jaja', age: 20, email: 'jaju@gmail.com'},
                {id: 4, name: 'Ali khan', age: 22, email: 'ali@gmail.com'},
                {id: 1, name: 'Jaju Juneja', age: 20, email: 'jaju@gmail.com'},
                {id: 2, name: 'Ali Faruque', age: 22, email: 'ali@gmail.com'},
                {id: 3, name: 'Jaju Jaja', age: 20, email: 'jaju@gmail.com'},
                {id: 4, name: 'Ali khan', age: 22, email: 'ali@gmail.com'}
            ]
        }
    }
    TableData(){
        return this.state.students.map((student, index) => {
            const{id, name, age, email} = student
            const tdth = {border:'1px solid #dddddd', padding:'8px'}
            const delBut = {backgroundColor:'red', color:'white'}
            const editBut = {backgroundColor:'green', color:'white'}
            return(
                
                <TableRow >
                    <TableCell>{name}</TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell><Button variant="contained" size='small' style={delBut}>Delete</Button></TableCell>
                    <TableCell><Button variant="contained" style={editBut} size="small">Edit</Button></TableCell>
                </TableRow>
            )
        })
    }
    render(){
        const paperStyle ={padding:20, width:'75%',margin:'80px auto' }
        return(
            <div >
               <AppBar position="static" >
                    <Toolbar variant="dense">
                    
                    <Typography variant="h6" color="inherit" component="div" >
                    Add Edit Employee
                    <Button variant='contained' size='small' style={{backgroundColor:'green', color:"white", left:'4rem'}} >Add Employee</Button>
                    </Typography>
                    </Toolbar>
                </AppBar> 
                <Paper elevation={10} style={paperStyle}>
                <TableContainer  >
                <table id='students' aria-label="simple table" style={{padding:'2rem'}}>
                <TableHead>
                    <TableRow>
                        <TableCell  align='center'>Name</TableCell>
                        <TableCell  align='center'>Age</TableCell>
                        <TableCell  align='center'>Email</TableCell>
                        <TableCell  align='center'>Delete</TableCell>
                        <TableCell  align='center'>Edit</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {this.TableData()}
                    </TableBody>
                </table>
                </TableContainer>
                </Paper>
            </div>
        );
    }
}
export default Table;