import { Link } from "react-router-dom"
import { AuthWrapper } from "../Auth.styles"

const Register = () => {
  return (
    <AuthWrapper>
        <div className="topBar">
           <Link to={"/auth/login"}>
           
            <button className="topbarButton">
                Login
            </button>
           </Link>
        </div>
        <div className="authContent">
            
            <div className="authHeader">
                <div className="authTitle">
                   
                     <h1 className="mainText"> Setup Meetup</h1> 
                     <h1>Account and  enjoy it !</h1>
                    </div>
            </div>
            <form className="formBox">
                <div className="formInputItem">
                    <input type="text" name="" id=""  placeholder="first name"/>
                    <input type="text" name="" id=""placeholder="last name" />
                </div>
                <div className="formInputItem">
                    <input type="email" name="" id=""  placeholder="email address"/>
                </div>
                <div className="formInputItem">
                    <input type="password" name="" id=""  placeholder="password"/>
                </div> 
                <div className="formInputItem">
                    <input type="password" name="" id=""  placeholder="confirm password"/>
                </div> 
                <button className="authButton">Register</button>
                
            </form>
        </div>
    </AuthWrapper>
  )
}

export default Register