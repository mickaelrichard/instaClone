import React, { useEffect, useContext } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile, user }) => {
  console.log("user", user);
  const { progress, imageSrc } = useStorage(file, user.userId);

  useEffect(() => {
    if (imageSrc) {
      setFile(null);
    }
  }, [imageSrc, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
