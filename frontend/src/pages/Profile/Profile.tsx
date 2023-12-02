import { ProfileWrapper } from './Profile.styles'
import { useParams } from 'react-router-dom'
import { fetchUserByIdApi } from '../../utils/Api'
import { useEffect, useState } from 'react';
import { UserType } from '../../utils/Types';
import Sidebar from '../../component/sidebar/Sidebar';
import ProfileSection from '../../component/Profile/ProfileSection/ProfileSection';

const Profile = () => {
  
  return (
    <ProfileWrapper>


    <Sidebar/>
    <ProfileSection/>





    </ProfileWrapper>
  )
}

export default Profile