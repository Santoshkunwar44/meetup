import { fetchChatsOfUserApi, fetchUserByIdApi, getNotificationOfUserApi, getUserStatsApi } from '../utils/Api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'

const useUpdateApp = () => {
    const {user} =useSelector((state:State)=>state.user);
    const dispatch = useDispatch()
    const {AddUserAction,AddUserStatsAction ,AddAllNotificationsAction ,AddNewChatAction} = bindActionCreators(actionCreators,dispatch);


    
    const setup=()=>{
        
        if(!user?._id)return;
        getAllMyChats()
        fetchAllMyNotifications()
        fetchUnseenChatsAndNotifications()
    }
    const fetchUser=async()=>{
        if(!user?._id)return;
        try {   
            const {data,status} = await fetchUserByIdApi(user?._id);

            if(status===200){
                AddUserAction(data.message[0])
            }
        } catch (error) {
            console.log(error)
        }
    }
    const fetchUnseenChatsAndNotifications = async()=>{
        
        if(!user?._id)return;
        try {
            const {data,status} = await getUserStatsApi(user?._id)
            if(status===200){
                const {unseenNotificationCount,unseenChatCount}  = data.message;
                console.log(unseenChatCount,unseenNotificationCount)
                AddUserStatsAction({unseenChatCount,unseenNotificationCount})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getAllMyChats=async()=>{
    if(!user?._id)return;
    try {
     const {status,data} =  await fetchChatsOfUserApi(user?._id)
     if(status===200){
        AddNewChatAction(data.message)
     }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAllMyNotifications=async()=>{
    if(!user?._id)return;
    try {
        const {status,data} = await getNotificationOfUserApi(user?._id)
        if(status === 200){
            AddAllNotificationsAction(data.message)
        }
    } catch (error) {
        console.log(error)
    }
  }
 return { setup ,fetchUser}
}

export default useUpdateApp