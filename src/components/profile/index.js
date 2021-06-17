import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Photos from "./photos";
import { getUserPhotosByUserId } from "../../services/firebase";
import Upload from "./upload";
import Footer from "./footer";

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);
      console.log("user", user);
      console.log("photos", photos);

      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <div>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Upload user={user} />
      {/* <ImageUpload /> */}
      <Photos photos={photosCollection} />
      {/* <Footer /> */}
    </div>
  );
}

// Profile.propTypes = {
//   user: PropTypes.shape({
//     dateCreated: PropTypes.number,
//     emailAddress: PropTypes.string,
//     followers: PropTypes.array,
//     following: PropTypes.array,
//     fullName: PropTypes.string,
//     userId: PropTypes.string,
//     username: PropTypes.string,
//   }),
// };
