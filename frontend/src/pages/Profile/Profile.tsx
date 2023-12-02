import { ProfileWrapper } from './Profile.styles'
import { useParams } from 'react-router-dom'
import { fetchUserByIdApi } from '../../utils/Api'
import { useEffect, useState } from 'react';
import { UserType } from '../../utils/Types';
import Sidebar from '../../component/sidebar/Sidebar';
import ProfileSection from '../../component/Profile/ProfileSection/ProfileSection';

const Profile = () => {
    const {id} = useParams();
    const [userData,setUserData] = useState<UserType|null>(null)


    useEffect(()=>{
        getUserProfileData()
    },[])


    const getUserProfileData=async()=>{
        if(!id)return 
        try {
          const  {status,data} = await  fetchUserByIdApi(id);
          if(status===200){
            setUserData(data.message[0]);
          }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <ProfileWrapper>


    <Sidebar/>
    <ProfileSection/>





    </ProfileWrapper>
  )
}

export default Profile