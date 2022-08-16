import React from "react";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackProvider";
import Spinner from "./Spinner";

export default function ListItem() {
  const {feedback,isLoading} = useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet ....</p>;
  }
  return isLoading? <Spinner />:
  (
    <div className="list-item">
      <AnimatePresence>
        {feedback.map((item) => {
            return<motion.div
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <Item item={item} key={item.id} />
            </motion.div>
          
        })}
      </AnimatePresence>
    </div>
  );
}
