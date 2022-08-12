import { createContext,useState } from "react";

const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {
            'id':1,
            'text':'This is a perfect app especially for begginers, keep on the winning streak guys!',
            'rating':10,
        },
        {
            'id':2,
            'text':'This is a perfect app especially for begginers, keep on the winning streak guys!',
            'rating':6.5,
        },
    ]);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        enabled:false,
    })
    const deleteFeedback = (id) => {
        // data.filter((item)=>)
        if (window.confirm("Are you okay?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
          console.log(id, "deleted");
        }
      };
      const addFeedBack=(newFeedBack)=>{
        setFeedback([...feedback,newFeedBack])
      }
      const editFeedback =(item)=>{
        setFeedbackEdit({
              item,
              enabled:true,
          })
      }
      const updateFeedback=(id,newItem)=>{
            setFeedback(feedback.map((item)=>item.id===id ? {...item,...newItem}:item))
      }
    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                addFeedBack,
                deleteFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
}
export default FeedbackContext;