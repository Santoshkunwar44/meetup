import { FormikProps, withFormik } from 'formik'
import { ResetPasswordWrapper } from './ResetPassword.styles'
import { useState } from 'react'
import  * as Yup from "yup"

import useAlert from '../../../hooks/useAlert'
import { useNavigate } from 'react-router-dom'
import { resetPasswordApi } from '../../../utils/Api'







const ResetPassword = () => {

  const [loading,setLoading] =useState(false)
  const  token = new URLSearchParams(location.search).get('token');
  const {notify} =useAlert()
  const navigate =useNavigate()
  interface formValues{
   
    password:string,
    confirmPassword:string, 
}


interface otherProps{
    // title:string,
    // ref:any 
    // loading:boolean
}

interface myFormProps{
    initialPassword?:string,
    initialUsername?:string,

}
const InnerForm=(props:otherProps & FormikProps<formValues>)=>{

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    }= props;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(e); // Manually call the formik handleSubmit function
  };

    return <>
   <form className="form" onSubmit={submitHandler}>
                    <div className="formItem">
                    <label htmlFor="">password</label>
                    <input type="password" placeholder="new password" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} />

                    { 
                        touched.password && errors.password && (
                            <p className="invalidMessage">{errors.password}</p>
                        )
                    }

                </div>
                    <div className="formItem">
                    <label htmlFor="">confirm Password</label>
                    <input type="password" placeholder="confirm password" name='confirmPassword' value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} />
                      {
                        touched.confirmPassword && errors.confirmPassword && (
                            <p className="invalidMessage">{errors.confirmPassword}</p>
                        )
                    }
                </div>
             <button className={loading ? "loading":""} disabled={isSubmitting ||  !!(errors.password && touched.password) || !!(errors.confirmPassword && touched.confirmPassword)}  >{loading ? <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe> :"Reset Password"}</button>
                </form>
    </>

}




    const LoginForm= withFormik<myFormProps,formValues>(
    {
mapPropsToValues: (props: myFormProps) => ({
  password: props.initialPassword || '',
  confirmPassword: '',
}),

        validationSchema:Yup.object().shape({
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required"),
        confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
    }),

   handleSubmit: (registerValue: formValues, {}: any) => {
  handleResetPassword(registerValue);
},

   })(InnerForm as React.ComponentType<otherProps & FormikProps<formValues>>);

   

   const handleResetPassword=async(value:formValues)=>{
    if(!token)return;
    setLoading(true)
    try {
      const {status} = await resetPasswordApi(value.password,token)
      if(status===200){
        notify("Password reset successfully","success");
        navigate("/auth/login")
      }
      setLoading(false)
    } catch (error:any) {
      notify(error?.response?.data?.message,"error")
      setLoading(false)
    }
   }

  return (
    <ResetPasswordWrapper>
            <div className="mainContent">
                <div className="contentHeader">
                    <img src="/images/logo.png" alt="logoImg" />
                    <h3 className='headerText'>Reset password</h3>
                </div>
              <LoginForm/>
            </div>
    </ResetPasswordWrapper>
  )
}

export default ResetPassword