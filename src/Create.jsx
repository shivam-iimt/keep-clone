
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
function Create(props) {
  const [item,changeitem]=useState({
    title:'',
    note:''
  });
  const [expand,setexpand]=useState(false);
  



 const setEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    changeitem((preval)=>{
      return  {  ...preval,[name]:value,};
       
          
    } );
  }
 const  fevent=()=>{
   props.passnote(item);
   changeitem({
    title:'',
    note:'',
  });
 

  };
  const expandit=()=>{
    setexpand(true);
  }
  const unexpandit=()=>{
    setexpand(false);
  }
  return (
   <>
   <div className='notehead'  onClick={expandit} onDoubleClick={unexpandit} >
   <form >
         { expand?
           <input  type='text' name='title' placeholder='Title' autoComplete='off' onChange={setEvent} value={item.title}/>
       : null}
           <textarea row='' onclick={expandit} column='' name='note' value={item.note} onChange={setEvent} placeholder='Write a note...'/>
         { expand?
           <Button className='btn1' onClick={fevent}><AddIcon className='plus'/></Button>
          :null}
       </form>

   </div>
   </>
  );
}

export default Create;
