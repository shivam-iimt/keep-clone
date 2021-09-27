
import Note from './note';
import React, { useState } from 'react';
import Create from './Create';
import './App.css';

function App() {
  const [fitem,fChange]=useState([]);
  const addnote =(item)=>{
    fChange((predata)=>{
       return [...predata,item];
    });

   
    
  };
  const ondel=(id)=>{
    fChange((olddata)=>{
     return olddata.filter((curdata,indx)=>{
        return indx!==id;
      })
    }
    )} 
  return (
   <>
 <div className='header'>
      <h1>Google Keep Clone </h1>
    </div>
    <div className='main'>
      <Create
      passnote={addnote}
      />
      <div className='notes-cont'>
     

        {fitem.map((val,index) =>{
            return (
              <Note
              key={index}
              id={index}
              title={val.title}
              note={val.note}
              del={ondel}
              />
            );
        })}
      </div>
      </div>

    <div className='footer'>
      <p>Copyright 2020</p>
    </div>
   </>
  );
}

export default App;
