import { FriendItemWrapper } from './FriendItem.styles'

const FriendItem = () => {
  return (
    <FriendItemWrapper>
        <div className="leftItem">

        <img src="https://images.pexels.com/photos/16835612/pexels-photo-16835612/free-photo-of-branches-of-a-dead-tree.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <div className="userInfo">
            <h3 className='username'>Heroistic john</h3>
            <p className='followersCount'>274 Followers</p>
        </div>
        </div>
        <button>Follow </button>
    </FriendItemWrapper>
  )
}

export default FriendItem