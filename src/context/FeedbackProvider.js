import { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  
  const [isLoading,setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    enabled: false,
  });

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    console.log('response ===',response);
    console.log('data === ',data);
    setFeedback(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchFeedback();
    console.log("feedbacks =======", feedback);
  }, []);

  // const deleteFeedback = async(id) => {
  //   // data.filter((item)=>)
  //   if (window.confirm("Are you okay?")) {
  //     await fetch(`/feedback/${id}`, { method: 'DELETE' })
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //     // console.log(id, "deleted");
  //     // console.log("feedbacks after delete =======", feedback);
  //   }
  // };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  const addFeedBack = async (newFeedBack) => {
    // newFeedBack.id = uuidv4();
    const response = await fetch('/feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newFeedBack)
    })
    const data = await response.json()
    setFeedback([...feedback, data]);
  };
  
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      enabled: true,
    });
    console.log("feedbacks after edit =======", feedback);
  };
  
  const updateFeedback = async(id, newItem) => {
    const response = await fetch(`/feedback/${id}`,{
      method:'PUT',
      headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newItem)
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({
      item: {},
      enabled: false,
    });
  };
  
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedBack,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
