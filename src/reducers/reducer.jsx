const initialState = {
   
    learnPage : {
        newWord : "Hello",
        newWordTranslation : "Привет",
        examplesWithNewWord : ["Hello?", "Hello!"],
        examplesWithNewWordTranslation : ["Привет?","Привет!"],
        task : {},
        levelOfUser : "",
        newWordInfo : {
            partOfSpeech : "Noun",
            level : "A2"
        }
    }
};

export function bilingoReducer(state = initialState, action) {
    let newState = {...state};
    switch(action.type) {
        
        default: 
            return newState;
    }
}

export function GetNewWordThunkCreator(){

}
