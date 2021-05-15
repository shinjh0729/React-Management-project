import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  },
  progress: {
    margin : theme.spacing.unit * 2
  }
});

/* 1) constructor() 2) componentWillMount() 3)render() 4)componentDidMount()
 이후 props or state의 변경이 있으면 => shouldComponentUpdate() */

 class App extends Component {
  state = {
    customers: "",  //state는 Component내에서 변경될 수 있는 데이터를 처리하고자 할때 사용
    completed: 0
  }
  componentDidMount() { //API서버 접속
    this.timer = setInterval(this.progress, 100);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  callApi = async() =>{ //비동기적으로 접속하고자하는 api주소 접근
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress = () => {
    const {completed} = this.state;
    this.setState({ completed : completed >= 100 ? 0 : completed +1});
  }
  render(){
    const {classes } = this.props; // props는 변경될 수 없는 데이터 쓸때 사용
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c=> {
            return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) }) : 
            <TableRow>
              <TableCell colSpan = "6" align ="center">
                <CircularProgress className = {classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
    
}
export default withStyles(styles)(App);
