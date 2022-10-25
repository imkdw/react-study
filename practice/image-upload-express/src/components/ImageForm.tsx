import axios from "axios";
import { FormEvent, useState, ChangeEvent } from "react";

const ImageForm = () => {
  const [uploadFiles, setUploadFiles] = useState<FileList | never[]>([]);

  const submitHanlder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    for (const file in uploadFiles) {
      formData.append("file", file);
    }

    const res = await axios.post("http://localhost:5000/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res);
  };

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    setUploadFiles(files);
  };

  return (
    <form
      action="http://localhost:5000/images"
      encType="multipart/form-data"
      onSubmit={submitHanlder}
    >
      <input type="file" name="image" onChange={imageUploadHandler} multiple />
      <button type="submit">Send!</button>
    </form>
  );
};

export default ImageForm;
