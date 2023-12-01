export const getAnotherUserMethod=(users,myId)=>  users.find(user=>user._id !== myId)

