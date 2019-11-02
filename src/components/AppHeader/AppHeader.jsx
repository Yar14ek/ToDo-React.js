import React from 'react';
import './appHeaderStyle.css'

const AppHeader =({todo,done})=>{
    return(
    <div className ='app-header d-flex'>
        <h1>Todo List</h1>
        <p>{todo} more to do,{done} done</p>

    </div>
    )
}
export default AppHeader ;