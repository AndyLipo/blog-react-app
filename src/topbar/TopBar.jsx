import "./topbar.css";


export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <img className="topImg"
            src="https://png.pngtree.com/template/20191014/ourlarge/pngtree-real-estate-business-logo-template-building-property-development-and-construction-logo-image_317796.jpg" alt=""></img> 
        {/* <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i> */}
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Blog</li>
            <li className="topListItem">Contact</li>
            </ul>
        </div>
        <div>
          <form autocomplete="off" action="/action_page.php">
              <div class="autocomplete">
                <input id="myInput" type="text" name="myCountry" placeholder="Posts"></input>
              </div>
              <input  type="submit"></input>
            </form>
        </div>
    </div>
  )
}
