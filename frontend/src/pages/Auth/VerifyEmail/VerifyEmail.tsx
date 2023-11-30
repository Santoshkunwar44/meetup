import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { VerifyEmailWrapper } from './VerifyEmail.styles'
import { useNavigate } from 'react-router-dom'
import useAlert from '../../../hooks/useAlert'
import { sentEmailToVerifyAccountApi } from '../../../utils/Api'

const VerifyEmail = () => {
  const [email,setEmail] = useState("")
  const navigate =useNavigate();
  const {notify} = useAlert()
  const [loading,setLoading] =useState(false)

  const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)

  }

  const handleVerifyAccount=async(e:SyntheticEvent)=>{

    e.preventDefault()
    setLoading(true)
  try {
    const {status} = await sentEmailToVerifyAccountApi(email);
    if(status===200){
    navigate("/info/verifyEmail?info=email_sent")
       notify("Verification link has been sent to your email","success")
    }
    setLoading(false)
}  catch (error:any) {
  console.log(error)
  setLoading(false)
  notify(error?.response?.data?.message,"error")
}
  }

  return (
    <VerifyEmailWrapper>

    <div className="mainContent">
       <div className="contentHeader">
                <img src="/images/logo.png" alt="logo" />
                <h1 className='headerText'>Verify your account  </h1>
            </div>
            <form className="form" onSubmit={handleVerifyAccount}>
                <input  value={email} type="email" placeholder='your email address' onChange={handleInputChange} required />
                <button type='submit' className={loading?"loading":""}>
                  {loading ?  <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe>:"Verify"}
                   </button>
            </form>
    </div>

    </VerifyEmailWrapper>
  )
}

export default VerifyEmail