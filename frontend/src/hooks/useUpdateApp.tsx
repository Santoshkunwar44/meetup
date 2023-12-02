import { fetchUserByIdApi } from '../utils/Api'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux'

const useUpdateApp = () => {
    const {user} =useSelector((state:State)=>state.user);
    const dispatch = useDispatch()
    const {AddUserAction} = bindActionCreators(actionCreators,dispatch)

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

    return {fetchUser}
}

export default useUpdateApp