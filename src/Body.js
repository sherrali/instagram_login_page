import Title from './images/title.png';
import ReactLogo from './images/Capture.PNG';
import Main from './Main';


function Body() {
  return (
    <div id='main-div'>

      <div id='insta-img'>
        <img src={ReactLogo} height="400px" width="auto" />
      </div>

      <Main />
    </div>
  )
}
export default Body;