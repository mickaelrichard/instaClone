import { useEffect, useContext, useState } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";
export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const { user } = useContext(UserContext);
  const { uid: userId = "" } = user; //get uid, call it userId, give it default ""

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      // console.log("following", following);

      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    // console.log("test", userId);
    getTimelinePhotos();
  }, [userId]);
  return { photos };
}
