import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./posts";
export default function Timeline() {
  const { photos } = usePhotos();
  // console.log("photos", photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
