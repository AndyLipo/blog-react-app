import "./topbar.css";


export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <img className="topImg" src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-real-estate-business-logo-template-building-property-development-and-construction-logo-image_317796.jpg" alt=""></img> 
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Blog</li>
            <li className="topListItem">Contact</li>
            </ul>
        </div>
        <form  autoComplete="off" >
          <div className="autoComplete">
            <input id="myInput" type="text" name="myCountry" placeholder="Post"></input>
          </div>
          <input type="submit"></input>
        </form>
        
        
    </div>
  )
}
