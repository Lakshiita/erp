import { AppBar, Avatar, Button, Grid, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { FcLock } from 'react-icons/fc';
class Login extends React.Component{
    constructor(props) {  
        super(props);  
         this.state = {user:'',pass:''};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }  
      handleChange(event){
          this.setState({user:event.state.user , pass:event.state.pass});
      }
      handleSubmit(event){
          event.preventDefault();
          if(this.state.user=='mohit' && this.state.pass=='123'){
              window.open('hello.html');
          }else{
                alert("game over");
          }
      }
    render() {  
        const paperStyle ={padding:20, width:280,height:'60vh',margin:'80px auto' }
        const btnStyle = {margin:'8px 0'}
        const txtStyle = {margin:'8px 0'}
      return ( 
        
        <Grid>
        <AppBar position="static" style={{alignItems:'center'}}>
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div" >
           <center> Admin Login </center>
          </Typography>
        </Toolbar>
        </AppBar> 
        <Paper elevation={10} style={paperStyle} >
        <form onSubmit={this.handleSubmit} method='post'> 
        <Grid align='center'>
            
            <div align='center' style={{paddingTop:'2rem'}}>
            <Avatar style={{width:"3.5rem",height:"3.5rem"}}><FcLock/></Avatar> 
            <h3>Login</h3>  
            </div>
        </Grid>     
            <TextField required placeholder='Enter UserId' label='UserId' fullWidth variant='outlined' style={txtStyle} 
                name="user" value={this.state.user} onChange={(event) =>this.setState({[event.target.name]:event.target.value})}
            />
            <TextField required placeholder='Enter Password' label='Password' fullWidth variant='outlined' style={txtStyle}
                name="pass" value={this.state.pass} onChange={(event) =>this.setState({[event.target.name]:event.target.value})}
            /> 
            <Button type='Submit' fullWidth variant='contained' color='primary' style={btnStyle}>Login</Button>  
             
            </form>  
        
        </Paper>
        </Grid>
      );  
    }  
  }  

export default Login;