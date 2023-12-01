import { Link, useNavigate } from "react-router-dom"
import { AuthWrapper } from "../Auth.styles"
import { FormikProps, withFormik } from "formik"
import { useState } from "react"
import * as  Yup from "yup"
import { registerApi } from "../../../utils/Api"
const Register = () => {


    const [loading,setLoading]= useState(false)
    const navigate = useNavigate()


interface formValues{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string, 
}


interface otherProps{
    // title:string,
    // ref:any 
    // loading:boolean
}

interface myFormProps{
    initialEmail?:string,
    initialPassword?:string,
    initialFirstName?:string,
    initialLastName?:string,
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
                <div className="formInputItem singleRow">
                    <div className="inputBox">

                    <input type="text" name="firstName"   placeholder="first name" value={values.firstName} onBlur={handleBlur} onChange={handleChange}/>
                         {
                        touched.firstName && errors.firstName && (
                            <p className="invalidMessage">{errors.firstName}</p>
                        )
                    }
                    </div>
                    <div className="inputBox">

                    <input type="text" name="lastName" id=""placeholder="last name" value={values.lastName} onBlur={handleBlur} onChange={handleChange} />
                         {
                        touched.lastName && errors.lastName && (
                            <p className="invalidMessage">{errors.lastName}</p>
                        )
                    }
                    </div>
                </div>
                <div className="formInputItem">
                    <input type="email" name="email" placeholder="email address" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
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
                <div className="formInputItem">
                    <input type="password" name="confirmPassword"  placeholder="confirm password" value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange}/>
                        {
                        touched.confirmPassword && errors.confirmPassword && (
                            <p className="invalidMessage">{errors.confirmPassword}</p>
                        )
                    }
                </div> 
             <button className={`${loading ? "loading":""} authButton`} disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password) || !!(errors.firstName && touched.firstName) ||!!(errors.lastName && touched.lastName) || !!(errors.confirmPassword && touched.confirmPassword)}  >{loading ? <iframe src="https://lottie.host/embed/001b9309-3a98-48c6-96d4-42b13cf1b412/eDDX84yAca.json"></iframe> :"Register"}</button>
                
            </form>
    </>

}




    const RegisterForm= withFormik<myFormProps,formValues>(
    {
mapPropsToValues: (props: myFormProps) => ({
  email: props.initialEmail || '',
  password: props.initialPassword || '',
  firstName: props.initialFirstName || '',
  lastName:props.initialLastName || '',
  confirmPassword: '',
}),

    validationSchema:Yup.object().shape({
        email:Yup.string().email("Email is not valid").required("Email is required"),
        password:Yup.string().min(8,"Password must be more than 8 characters").required("Password is required"),
        firstName:Yup.string().min(3,"Firstname must be more thatn 3  characters").required("FirstName is required"),
        lastName:Yup.string().min(3,"LastName must be more thatn 3  characters").required("LastName is required"),
        confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
  .required('Confirm Password is required'),
    }),
   handleSubmit: (registerValue: formValues, {}: any) => {
  handleRegister(registerValue);
},

   })(InnerForm as React.ComponentType<otherProps & FormikProps<formValues>>);

   const handleRegister=async(registerValue :formValues)=>{
    setLoading(true)
    try {
      const {status} =   await registerApi(registerValue)

      if(status===200){
        navigate("/info/verify_email_sent?info=email_sent")
      }
      setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
   }
  

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
            <RegisterForm/>
        </div>
    </AuthWrapper>
  )
}

export default Register