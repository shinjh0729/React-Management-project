const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/api/customers',(req, res) => {
    res.send([
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
    ]);
});
app.listen(port,() => console.log(`Listening on port ${port}`));
