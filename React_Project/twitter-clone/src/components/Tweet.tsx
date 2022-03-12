import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "firebaseInstance";
import { ChangeEvent, FormEvent, useState } from "react";
import { ref, deleteObject } from "firebase/storage";
import "routes/Tweet.scss";

// TODO: Tweet 컴포넌트 props 타입 지정하기
const Tweet = ({ tweetObj, isOwner }: any) => {
  const [editing, setEditing] = useState(false);
  const [newTweetText, setNewTweetText] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 트윗을 삭제할껀가요?");
    if (ok) {
      // firestore 내부에서 트윗삭제
      await deleteDoc(doc(db, "tweets", tweetObj.id));

      // storage 내부에서 사진 삭제
      const storageRef = ref(storage, tweetObj.fileUrl);
      await deleteObject(storageRef);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTweetText(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tweetRef = doc(db, "tweets", tweetObj.id);
    await updateDoc(tweetRef, {
      text: newTweetText,
    });
    setEditing((prev) => !prev);
  };

  const onCancelClick = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={newTweetText}
              required
              placeholder="Edit your tweet"
              onChange={onChange}
            />
          </form>
          <button onClick={onCancelClick}>Cancel</button>
        </>
      ) : (
        <div className="tweet">
          <h3>텍스트 : {tweetObj.text}</h3>
          <img
            src={tweetObj.fileUrl}
            alt={`${tweetObj.text}의 이미지`}
            width="200px"
            height="200px"
          />
          {isOwner && (
            <div className="button-wrapper">
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </div>
          )}
          <hr />
        </div>
      )}
    </div>
  );
};

export default Tweet;
