import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackProvider";
import Button from "./Button";
import Card from "./Card";
import RatingSelect from "./RatingSelect";

export default function RateForm() {
  const {addFeedBack,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isDisabled, setDisable] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(feedbackEdit)
    if(feedbackEdit.enabled===true){
      console.log('edit mode')
      setDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
    
  }, [feedbackEdit])
  
  const handleReviewChange = (e) => {
    if(text=== ''){
        setMessage(null)
    }  
    else if (text && text.trim().length <= 9) {
      setMessage("You must enter at least 10 characters");
      setDisable(true)
    } else if (text) {
    //   setText(e.target.value);
      setMessage(null)
      setMessage("Perfect ! You can now send the review");
      setDisable(false)
      
    }
    // else{
    //     setMessage(null)
    // }
    setText(e.target.value);
    console.log(e.target.value)
  };
  const handleSubmit =(e)=>{
      e.preventDefault()
      if(text.trim().length >10){
          const newFeedBack={
              text,
              rating,
          };
        //   newFeedBack.id=
        if(feedbackEdit.enabled===true){
          updateFeedback(feedbackEdit.item.id,newFeedBack)
        }
        else addFeedBack(newFeedBack)
        console.log(newFeedBack)
      }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1>Rate your service with us</h1>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your review here"
            onChange={handleReviewChange}
            value={text}
          />
          <Button type="submit" disable={isDisabled}>
            Send
          </Button>
        </div>
        {isDisabled &&text &&(<div className="msg msg-danger">{message}</div>)}
        {!isDisabled && text &&(<div className="msg msg-success">{message}</div>)}
      </form>
    </Card>
  );
}
