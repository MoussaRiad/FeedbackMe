import React, { useContext } from 'react'
import Card from './Card'
import {FaEdit, FaTimes} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackProvider'
export default function Item({key,item}) {
  const {deleteFeedback,editFeedback} =useContext(FeedbackContext)
  return (
    <Card>
        <div className='item-num'><span>{item.rating}</span></div>
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
          <FaTimes size={20}/>
        </button>
        <button onClick={()=>editFeedback(item)} className='edit'>
          <FaEdit size={20}/>
        </button>
        <div className='item-text'>{item.text}</div>
    </Card>
  )
}
