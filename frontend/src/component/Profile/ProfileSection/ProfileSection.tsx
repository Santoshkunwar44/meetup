import { ProfileSectionWrapper } from './ProfileSection.styles'
import ProfileCard from '../profileCard/ProfileCard'
import { useEffect, useState } from 'react';
import { UserType } from '../../../utils/Types';
import { useParams } from 'react-router-dom';
import { fetchUserByIdApi } from '../../../utils/Api';
import SuggestedBox from '../SuggestedPeople/SuggestedBox';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';

const ProfileSection = () => {
    const {id} = useParams();
    const [userData,setUserData] = useState<UserType|null>(null)
    const {refresh} = useSelector((state:State)=>state.other)


    useEffect(()=>{
        getUserProfileData()
    },[id,refresh])
    


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