import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note=(props)=>{
    const ondelete = ()=>{
        props.del(props.id);
    }
    return(
        <>
            <div className='notes'>
   
           <h1>{props.title}</h1>
           
           <p>{props.note}</p>

           <button onClick={ondelete} className='btn1'><DeleteOutlineIcon className='del'/></button>
       

   </div>
        </>
    );
};
export default Note;