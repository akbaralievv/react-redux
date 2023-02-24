import { useDispatch, useSelector } from "react-redux"

function MainPage() {
  const dispatch=useDispatch()
  const {title,titleTwo}=useSelector(state=>state)
  const changeTitle=()=>{
    dispatch({
      type:'CHANGE_TITLE'
    })
    dispatch({
      type:"CHANGE_TITLE_TWO"
    })
  }
  const changeTitleWithParams=()=>{
    dispatch({
      type:'CHANGE_TITLE_WITH_PARAMS',
      payload:'hello world'
    })
  }
  const deleteTitle=()=>{
    dispatch({
      type:'DELETE_ALL'
    })
  }
  return (
    <>
        <h1>{title}</h1>
        <h2>{titleTwo}</h2>
        <button onClick={changeTitle}>change title</button>
        <button onClick={changeTitleWithParams}>change title with params</button>
        <button onClick={deleteTitle}>delete</button>
    </>
  )
}

export default MainPage