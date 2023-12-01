import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DisplayInfoWrapper } from './DisplayInfo.styles';
import { emailConfirmationApi } from "../../../utils/Api"
import useAlert from '../../../hooks/useAlert';




const DisplayInfo = () => {

   const  info = new URLSearchParams(location.search).get('info');


   const mapping={
    email_sent:<EmailSent/>,
    account_verfied:<AccountVerfied/>,
    verify_email:<VerifyEmail/>
   }

  return (
    <DisplayInfoWrapper>

      <DisplayInfoWrapper>{mapping[info as keyof typeof mapping]}</DisplayInfoWrapper>

    </DisplayInfoWrapper>
  )
}

export default DisplayInfo;

const EmailSent=()=>{
    return(
        <div className='mainContent'>
            <img width={"45px"} src="/images/logo.png" alt="logo" />
            <p className='infoText'>A Link has been sent to your email ,open  it to verify your email .The Link will be expired with in  5 minutes after it is sent to you . </p>
          <a href='https://gmail.com' target='_blank'>
           <button>Open Gmail </button>
          </a> 
        </div>
    )
}
const AccountVerfied=()=>{
    return(
        <div className='mainContent'>
            <img  width={"45px"} src="/images/logo.png" alt="logo" />
            <p className='infoText'>Your account has been verfied . You can now login to start . </p>
           <Link to={"/auth/login"}>
            <button>Go to Login </button>
           </Link>
        </div>
    )
}

const VerifyEmail=()=>{
  const location = useLocation()
  const  token = new URLSearchParams(location.search).get('token');
  const navigate =useNavigate()   ;

  const {notify} =useAlert()

   const handleConfirm=async()=>{
    

    if(!token)return;

    try {

        const {status } = await emailConfirmationApi(token); 
         
        if(status===200){
        
            notify("Account verified successfully","success")
            navigate("/")
        }

    } catch (error:any) {
      console.log(error?.response?.data?.message);
       notify(error?.response?.data?.message,"error")
    }
}


  return   <div className='mainContent'>
            <img width={"45px"} src="/images/logo.png" alt="logo" />
            <p className='infoText'> Great!! Confirm Your Email and Unlock the Power of Resourcify !  </p>
           <button onClick={handleConfirm}>Verify Email </button>
        </div>
}