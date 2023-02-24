const initialState={
    title:'old title',
    titleTwo:'my name is Alisher',
    inputValue:'',
    aboutTitle:'',
    user:{
        name:'',
        age:null
    }
}

function reduser(state=initialState,action) {
    
    if(action.type==='CHANGE_TITLE'){
        return {...state,title:'hello geeks'}
    }else if(action.type==='CHANGE_TITLE_TWO'){
        return {...state, titleTwo:"my names is Anna"}
    }else if(action.type==="CHANGE_TITLE_WITH_PARAMS"){
        return{...state, title:action.payload}
    }else if(action.type==="DELETE_ALL"){
        return{...state, title:'',titleTwo:''}
    }else if(action.type==='CHANGE_INPUT'){
        return {...state,inputValue:action.payload}
    }else if(action.type==='CHANGE_ABOUT_TITLE'){
        return {...state,aboutTitle:action.payload,inputValue:''}
    }else if(action.type==='DELETES_ALL'){
        return {...state,aboutTitle:'',inputValue:''}
    }else if(action.type==="OBJECT"){
        return {...state,user:{...state.user,age:action.payload.age,name:action.payload.name}}
    }
  return (
   state
  )
}

export default reduser