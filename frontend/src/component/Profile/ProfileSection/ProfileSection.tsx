import { ProfileSectionWrapper } from './ProfileSection.styles'
import ProfileCard from '../profileCard/ProfileCard'
import { useEffect, useState } from 'react';
import { UserType } from '../../../utils/Types';
import { useParams } from 'react-router-dom';
import { fetchUserByIdApi } from '../../../utils/Api';
import SuggestedBox from '../SuggestedPeople/SuggestedBox';

const ProfileSection = () => {
    const {id} = useParams();
    const [userData,setUserData] = useState<UserType|null>(null)


    useEffect(()=>{
        getUserProfileData()
    },[id])


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
    <ProfileSectionWrapper>
            <ProfileCard user={userData}/>
            <SuggestedBox/>
    </ProfileSectionWrapper>
  )
}

export default ProfileSection