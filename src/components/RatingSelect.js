import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackProvider";

export default function RatingSelect({select}) {
  const {feedbackEdit} = useContext(FeedbackContext)

  const [selected, setSelected] = useState(2);
  useEffect(() => {
    console.log('rating ::: ',Math.round(feedbackEdit.item.rating))
    if(feedbackEdit.enabled===true) setSelected(Math.round(feedbackEdit.item.rating))
    else setSelected(2)
  }, [feedbackEdit])
  
  const handleClick=(e)=>{
      setSelected(+e.currentTarget.value)
      select(+e.currentTarget.value)
  }
  
  return (
    <ul className="select">
      <li>
        <input onChange={handleClick} id="radio-1" type={"radio"} value={1} checked={selected === 1} />
        <label htmlFor="radio-1">1</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-2" type={"radio"} value={2} checked={selected === 2} />
        <label htmlFor="radio-2">2</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-3" type={"radio"} value={3} checked={selected === 3} />
        <label htmlFor="radio-3">3</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-4" type={"radio"} value={4} checked={selected === 4} />
        <label htmlFor="radio-4">4</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-5" type={"radio"} value={5} checked={selected === 5} />
        <label htmlFor="radio-5">5</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-6" type={"radio"} value={6} checked={selected === 6} />
        <label htmlFor="radio-6">6</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-7" type={"radio"} value={7} checked={selected === 7} />
        <label htmlFor="radio-7">7</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-8" type={"radio"} value={8} checked={selected === 8} />
        <label htmlFor="radio-8">8</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-9" type={"radio"} value={9} checked={selected === 9} />
        <label htmlFor="radio-9">9</label>
      </li>
      <li>
        <input onChange={handleClick} id="radio-10" type={"radio"} value={10} checked={selected === 10} />
        <label htmlFor="radio-10">10</label>
      </li>
    </ul>
  );
}
