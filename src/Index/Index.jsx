import IndiceBody from "../Body/Index/IndexBody"
import Navbar from "../Navbar/Navbar"


export default function Index() {
    return(
    <div className="  d-flex flex-md-row flex-column"> 
        <div className="col-md-2 ">
              <Navbar />  
        </div>
        
        <div className="col-md-10  ">
            <IndiceBody/>
        </div>

        
    </div>
)
}