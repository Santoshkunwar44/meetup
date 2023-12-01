import { Link, useNavigate } from "react-router-dom"
import { AuthWrapper } from "../Auth.styles"
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup"
import { useState } from "react";
import { loginApi } from "../../../utils/Api";
import useAlert from "../../../hooks/useAlert";



const Login = () => {

    const [loading,setLoading] =useState(false)
    const navigate  = useNavigate()
    const {notify} = useAlert()



interface formValues{
   
    email:string,
    password:string,
}


interface otherProps{
    // title:string,
    // ref:any 
    // loading:boolean
}

interface myFormProps{
    initialEmail?:string,
    initialPassword?:string,
    login?:any,
    // loading:boolean
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

              <form className="formBox" onSubmit={submitHandler}>
            
                <div className="formInputItem">
                    <input type="email" name="email"  placeholder="email address" required onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                      {
                        touched.email && errors.email && (
                            <p className="invalidMessage">{errors.email}</p>
                        )
                    }
                </div>
                <div className="formInputItem">
                    <input type="password" name="password"   placeholder="password" value={values.password} onBlur={handleBlur} onChange={handleChange}/>
                       {
                        touched.password && errors.password && (
                            <p className="invalidMessage">{errors.password}</p>
                        )
                    }
                </div> 
             <button className={`${loading ? "loading":""} authButton`} disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password) }>{loading ? <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe> :"Login"}</button>
            </form>
    </>

}




    const LoginForm= withFormik<myFormProps,formValues>(
    {
    mapPropsToValues: (props: myFormProps) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
    }),

    validationSchema:Yup.object().shape({
        email:Yup.string().email("Email is not valid").required("Email is required"),
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required"),
    }),
   handleSubmit: (loginValue: formValues, {}: any) => {
   handleLogin(loginValue);
  },

   })(InnerForm as React.ComponentType<otherProps & FormikProps<formValues>>);


   const handleLogin=async(loginValue :formValues)=>{
    setLoading(true)
    try {
      const {status} =   await loginApi(loginValue)
      if(status===200){
        notify("Login successfull","success")
        navigate("/")
      }
      setLoading(false)
    } catch (error:any) {
        console.log(error)
        setLoading(false);
        notify(error?.response?.data?.message ?? "Something went wrong , Try again later .","error")
    }
   }


  
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
            <LoginForm/>
          
        </div>
    </AuthWrapper>
  )
}

export default Login