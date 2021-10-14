import express from 'express';
import morgan from 'morgan';
import {json, urlencoded} from 'body-parser';

const app=express();
const router=express.Router();

app.use(morgan('combined'));
app.use(json());
app.use(urlencoded({extended:true}));
app.use('/api/v1',router);

const custumLogger=(res,req,next)=>{
  console.log("Logged In");
  next();
}

app.get('/',custumLogger,(req,res)=>{
  console.log(req.body);
  res.send({"message":"ok-get"});

});

app.post('/',(req,res)=>{
  console.log(req.body);
  res.send({"message":"ok-post"});

});

// router.get('/post',(req,res)=>{
//   res.send({"message":"router-get"});
// });
// router.post("/post",(req,res)=>{
//   res.send({"message":"router-post"});
// });

router
  .route('/post')
    .get((req,res)=>{
      res.send({"message":"router-get"});
    })
    .post((req,res)=>{
      res.send({"message":"router-post"});
    });


router
  .route('/post/:id/:num')
  .put((req,res)=>{
    console.log(req.params);
    res.send({message:"router-put"})
  })
  .patch((req,res)=>{
    res.send({message:"router-patch"})
  })
  .delete((req,res)=>{
    res.send({message:"router-delete"})
  })


export const start=()=>{
  app.listen(3000,()=>{
    console.log("Server running at port 3000");
  });
}
