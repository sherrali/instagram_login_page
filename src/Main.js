import Title from './images/title.png';
import Footer1 from './images/footer1.PNG';
import Footer2 from './images/footer2.PNG';

function Main()
{
    return(
        <div id='second-div' className='form-border'>
        <div id='child-div'>
          <div id="signin-form">
            <div id='form-bdr'>
            <div id='title'>
              < img src={Title} height="60px" width="auto" />
            </div>
            {/* form  */}

            <form className='login-dtls'>

              <input typeof='text' className='fill' placeholder='Phone number, username or email' style={{ barder: "1px solid grey" }}></input><br />
              <input type="password" className='fill' placeholder='Password'></input><br />
              <button type='submit' className='lgbtn' >Log In</button>
              <div id='dash'>
                <h4>OR</h4>
              </div>
              <div id='button'>
                <span className='fa fa-facebook'></span>
                <span><a href='https://www.google.com'>&nbsp;&nbsp;Log in with Facebook</a></span>
              </div>
              <div id='forgot-ps'>
                <a href='https//www.google.com' style={{ textDecoration: "none" }}>Forgot password? </a>
              </div>
            </form>
            </div>
            <div id='no-acc' className='form-border' style={{ fontSize: "10px", padding: "10px" }}>
              <span>Don't have an account?</span>&nbsp;&nbsp;<a href='https//www.google.com' style={{ textDecoration: "none" }}>Sign up</a>
            </div>
          </div>
          <div id="footer">
            <h4> Get the app.</h4>
            <img src={Footer1} height="40px" width="auto" />
            <img src={Footer2} height="40px" width="auto" />
          </div>
 
        </div>
      </div>
    )
}

export default Main;