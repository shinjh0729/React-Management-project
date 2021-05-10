import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  }
})
const customers =[
  {
    'id' : 1,
    'image' : './sjh.jpg',
    'name' : '신준혁',
    'birthday' : '970729',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : './sjh.jpg',
    'name' : '홍길동',
    'birthday' : '111111',
    'gender' : '남자',
    'job' : '군인'
  },
  {
    'id' : 3,
    'image' : './sjh.jpg',
    'name' : '김나박이',
    'birthday' : '000000',
    'gender' : '여자',
    'job' : '가수'
  }
]

class App extends Component {
  render(){
    const {classes } = this.props;
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
          {customers.map(c=> {return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
    
}
export default withStyles(styles)(App);
