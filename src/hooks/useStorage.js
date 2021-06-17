import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import {
  projectStorage,
  projectFirestore,
  timestamp,
  firebase,
} from "../lib/firebase";
const useStorage = (file, id) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("photos");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imageSrc = await storageRef.getDownloadURL();
        const dateCreated = firebase.firestore.FieldValue.serverTimestamp();
        const caption = "";
        const comments = [];
        const likes = "";
        const photoId = nanoid();
        const userId = id;

        await collectionRef.add({
          imageSrc,
          dateCreated,
          caption,
          comments,
          likes,
          photoId,
          userId,
        });
        setImageSrc(imageSrc);
      }
    );
  }, [file]);

  return { progress, imageSrc, error };
};

export default useStorage;
