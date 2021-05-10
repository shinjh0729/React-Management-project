import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';

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
    return (
      <div>
        {
          customers.map(c=> {
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
    
}
export default App;
