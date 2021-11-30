import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import { history } from '../../routes/Routes'
import { message } from 'antd';
// import { toast } from 'react-toastify';
import axios from 'axios'
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, 
  EyeIconHid
} from '../../assets/images/index';

import {Link} from 'react-router-dom';
import { 
  Row, 
  Col, 
  Form, 
  Button,
  Container
} from 'react-bootstrap';
import './style.css';
import './responsive.css'
import { validEmail,validPassword,postItem,getItem } from '../../service/Constant'



const Signup = (props) => {
  // const [postData, setPostData]=useState({
  //   dataEmail:'',
  //   dataPassword:'',
  //   dataRePassword:'',
  //   dataTermscondtion:false,
  // })
  const [posts,setPosts]=useState([]);
  const [post,setPost]=useState({id:'',userId:'',title:'',body:''});
  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword]= useState('')  
  const [termscondition, setTermsCondition] = useState(false)
  
  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)
  // const [emailErr, setEmailErr] = useState(false);
  // const [pwdError, setPwdError] = useState(false);
  
  // const history = useHistory(); 
  const dispatch = useDispatch();
 
  const validSignup = useSelector( state => state.signupState.signup)
  const invalidSignup = useSelector( state => state.signupState.error)

  // const status = validSignup && validSignup.status;

  const onEmail = (e)=>{    
    setEmail(e.target.value);   
  }
  const onPassword = (e)=>{    
    setPassword(e.target.value);   
  }
  const onRePassword =(e)=> {
    setRepassword(e.target.value)
   
  }
  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () =>{
    setRePaswordShow(!repaswordShow);
  }  

  useEffect(()=>{ 
    postItem();
    getItem();
    // axios.get(baseURL).then((res)=>{     
    //   setPost(res.data)     
    //   console.log(res.data)
    // });
    // dummyApi.post(baseURL,{
    //   userId:11,
    //   id:101,
    //   title:'hello world',
    //   body: `cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta 
    //   in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut`
    // }).then((res)=>{     
    //   setPost(res.data)     
    //   console.log(res.data)
    // });
    // validateEmail();
    // validatePassword();
    // validateRePassword();
    // validationTerms();

    if(validSignup){
      message.success('Thanks!, Signup form is successfully registered ');
    } else if(invalidSignup) {
      message.error(`An account with email ${email} already exists`);
    }
  },[validSignup, invalidSignup])

  // const validateEmail = ()=>{
  //   if(!validEmail.test(email)){
  //     message.error('Your Email is Invalid')
  //   }else{
  //    message.success('Your Email is valid')
  //   }
  // }
  // const validatePassword = ()=>{
  //   if (!validPassword.test(password)) {      
  //     message.error('Your password is Invalid')
  //  }else{
  //   message.success('Your password is valid')
  //  }
  // }
  // const validateRePassword = ()=>{
  //   if(password !== repassword){
  //     message.error('Please check the  Conform Password')
  //   }else{
  //     message.success('Your conform password is valid')
  //   }
  // }
  //  const validationTerms = ()=>{
  //   if(termscondition === false){
  //     message.error("please accept the terms and condition")
  //   }else{
  //     message.success("verify the terms and condition")      
  //   }
  // }

  const onSubmit = (e) =>{
    e.preventDefault(); 

    // validateEmail();
    // validatePassword();
    // validateRePassword();
    // validationTerms();
    
    if (!email || !password || !repassword ) {       
      // message.error('Please fill all the fields')        
    }   
    else if (termscondition === false) {      
      // message.error('Please accept the Terms & Conditions and Privacy Policy')
    } 
    else {
      const signupDetailsuser = {
        email,        
        password,
        repassword,
        termscondition      
      };     
      dispatch({ type: 'SIGNUP_REQUEST', signup: signupDetailsuser});
    }
    console.log(email,password,repassword,termscondition);
 
    history.push({pathname:'/'});
  }  
  // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       title: "Hello World!",
  //       body: "This is a new post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!post) return "No post!"
  return (
   
    <div className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
          <Row>
            <Col sm={6} md={6} lg={6} className="text-center m-auto">
              <SiginImage />
            </Col>
            <Col  sm={6} md={6} lg={6}  className="p-3">
              <Logo  />
              <Form className="sign-form p-4">
                <h2 className="f1-19 mb-3 text-center signup-header">
                  Create account and get started
                </h2>
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className=' inputField'
                    type="email" 
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={onEmail}
                    />
                  <EmailIcon />
                </Form.Group>   
                {/* {emailErr && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your Mail id is Invalid</p>}           */}
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField"  
                    type={paswordShow ? 'password' : 'text'} 
                    placeholder="Password"
                    value={password}
                    onChange={onPassword}
                    minLength="8"
                    />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickPasswordShow}
                  >
                    { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>                  
                </Form.Group>
                
                {/* {pwdError && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your password is invalid</p> */}
      
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField" 
                    type={repaswordShow ? 'password' : 'text'} 
                    placeholder="Re-Enter Password"
                    value={repassword}
                    onChange={onRePassword}
                    minLength="8"
                  />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickRePasswordShow}
                  >
                    { repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>
                </Form.Group>
                {/* {pwdError && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your password is invalid</p>} */}
                <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Check 
                    className="float-start me-2" 
                    type="checkbox"
                    checked={termscondition}
                    onClick={() => 
                      setTermsCondition(!termscondition)                       
                    }
                  />
                  <Form.Label className="terms-cond-text">
                    I agree Skilltally’s <Link>Privacy Policy</Link> 	&#38; <Link>Terms of Services</Link>  
                  </Form.Label>
                </Form.Group>
                  <Button 
                    className="submit-btn mt-3"
                    variant="primary" 
                    type="submit" 
                    onClick={onSubmit}
                  >
                    Create Account
                  </Button>
              </Form>
            </Col>
          </Row>
          {posts.map((items)=>{
            return(
              <div>                
                <p key={items}>
                  {items.id}
                </p>
                <p>{items.userId}</p>
                <p>{items.title}</p>  
                <p>{items.body}</p>                                                              
              </div>
            )
          })}
          <div>                  
            <p>
              {post.id}
            </p>
            <p>{post.userId}</p>
            <p>{post.title}</p>  
            <p>{post.body}</p>                                                              
          </div>          
        </div>
      </div>       
  );
};

export default Signup;
