import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "firebaseInstance";
import { ChangeEvent, FormEvent, useState } from "react";

// TODO: Tweet 컴포넌트 props 타입 지정하기
const Tweet = ({ tweetObj, isOwner }: any) => {
  const [editing, setEditing] = useState(false);
  const [newTweetText, setNewTweetText] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("정말 트윗을 삭제할껀가요?");
    if (ok) {
      await deleteDoc(doc(db, "tweets", tweetObj.id));
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
        <>
          <h4>{tweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
          <hr />
        </>
      )}
    </div>
  );
};

export default Tweet;
