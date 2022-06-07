const initialState = {
   profile : {
       nickname : "nickname",
       fullname : "John",
       email : "qwe@mail.com",
       age : 21,
       gender : "Male",
       level : "B1",
       avatarURL : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",

       progress : {}
   }
};

export function bilingoReducer(state = initialState, action) {
    let newState = {...state};
    switch(action.type) {
        
        default: 
            return newState;
    }
}


export function GetProfileDetailsThunkCreator(){

}
