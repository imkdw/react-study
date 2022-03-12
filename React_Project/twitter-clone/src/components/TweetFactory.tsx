import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { db, storage } from "firebaseInstance";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const TweetFactory = ({ userObj }: any) => {
  const [tweet, setTweet] = useState("");

  // TODO: file 타입 지정
  const [file, setFile] = useState<any>();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setTweet(value);
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    const theFile = files![0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFile(reader.result);
    });

    reader.readAsDataURL(theFile);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const storageRef = ref(storage, `${userObj.uid}/${v4()}`);
    try {
      await uploadString(storageRef, file, "data_url");
      const downloadUrl = await getDownloadURL(storageRef);
      await addDoc(collection(db, "tweets"), {
        text: tweet,
        createAt: Date.now(),
        creatorId: userObj.uid,
        fileUrl: downloadUrl,
      });
      setFile(null);
    } catch (e: any) {
      console.error(e);
    }

    setTweet("");
    setFile("");
  };

  const onClearFile = () => {
    setFile(null);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="tweet-form">
        <input
          type="text"
          placeholder="Enter you Tweet"
          onChange={onChange}
          value={tweet}
          className="text-input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="file-input"
        />
        <button type="submit">Tweet!</button>
      </form>
      {file && (
        <>
          <img src={file} alt="tweet file" width="200px" height="200px" />
          <button onClick={onClearFile}>Clear File</button>
        </>
      )}
      <hr />
    </>
  );
};

export default TweetFactory;
