import { Link } from "react-router-dom"
import { AuthWrapper } from "../Auth.styles"

const Login = () => {
  return (
   <AuthWrapper>
        <div className="topBar">
           <Link to={"/auth/login"}>
           
            <button className="topbarButton">
                Sign up
            </button>
           </Link>
        </div>
        <div className="authContent">
            
            <div className="authHeader">
                <div className="authTitle">
                   
                     {/* <h1 className="mainText"> Setup Meetup</h1>  */}
                     <h1>Continue from where you Left !</h1>
                    </div>
            </div>
            <form className="formBox">
            
                <div className="formInputItem">
                    <input type="email" name="" id=""  placeholder="email address"/>
                </div>
                <div className="formInputItem">
                    <input type="password" name="" id=""  placeholder="password"/>
                </div> 
                
                <button className="authButton">Login</button>
                
            </form>
        </div>
    </AuthWrapper>
  )
}

export default Login