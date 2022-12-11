<div id='page'>
<div  id='insta-img'>
<img src={ReactLogo}/>
</div>

<div id="signin-form">
<div id='title'>
<h1 >instagram</h1>
</div>
<form className='login-dtls'>

  <input typeof='text' className='fill' placeholder='Phone number,username or email' style={{barder:"1px solid grey"}}></input>
  <input type="password" className='fill' placeholder='password'></input>
  <button type='submit' className='lgbtn'>Log in</button>
<div id='dash'>
  <h1>OR</h1>
  </div>
 <div id='button'>
   <button type='button'> <span className='fa fa-facebook'></span>
   <span><a href='https://www.google.com'>Log in with Facebook</a></span>
   </button>
   </div>
  <div id='forgot-ps'> 
    <center><a href='https//www.google.com'>forgot password? </a></center>
  </div>
  </form>
  </div>

  <div id='no-acc'>
    <span>Don't have an account?</span><a href='https//www.google.com' style={{textDecoration:"none"}}>Sign up</a>
  </div>
  <div id="footer">
   <h2> Get the app.</h2>
   <img src={Footer1} height="40px" width="auto" />
   <img src= {Footer2} height="40px" width="auto" />
  </div>
</div>
// css
// #dash h1::after{
//   content: "";
//   width: 50px;
//   height: 2px;
//   display: block;
//   background:#000;
//   position: absolute;
//   left:0;
//   top: 50%;
// }


// #dash h1::before{
//   content: "";
//   width: 50px;
//   height: 2px;
//   display: block;
//   background:#000;
//   position: absolute;
//   right: 0;
//   top: 50%;
  
// }
