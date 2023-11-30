import { Link, useNavigate } from "react-router-dom"
import { ForgotPasswordWrapper } from "./ForgotPassword.styles"
import { ChangeEvent, SyntheticEvent, useState } from "react"
import useAlert from "../../../hooks/useAlert"
import { sentEmailToResetPasswordApi } from "../../../utils/Api"

const ForgotPassword = () => {
  const [email,setEmail ] =useState("");
  const {notify} = useAlert()
  const [loading,setLoading] = useState(false)
  const navigate =useNavigate()



  const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{

    setEmail(e.target.value)

  }

  const handleSentPasswordResetEmail=async(e:SyntheticEvent)=>{
    e.preventDefault()
    setLoading(true)
    try {
     const {status} =   await  sentEmailToResetPasswordApi(email)
     if(status===200){
      notify("Password reset link has been sent to your email","success")
      navigate("/info/email_sent?info=email_sent");
     }
     setLoading(false)
    } catch (error:any) {
      setLoading(false)
      notify(error?.response?.data?.message,"error")
    }
  }



  return (
    <ForgotPasswordWrapper>
            <div className="mainContent">
                <div className="contentHeader">
                    <img src="/images/logo.png" alt="" />
                    <h3 className="headerText">Forgot Password</h3>
                </div>
                <form  className="form" onSubmit={handleSentPasswordResetEmail}>
                    <div className="formItem">
                        <label htmlFor="">Email</label>
                        <input required type="email" placeholder="your email address" onChange={handleInputChange} />
                    </div>
                    <button className={loading ? "loading":""} type="submit">{loading?   <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe>:"Send link to email"}</button>
                </form>
                <hr className="hrLine" />
               <Link to={"/auth/login"}>
                 <p className="goToText">Back to login</p>
                </Link>
            </div>
    </ForgotPasswordWrapper>
  )
}

export default ForgotPassword