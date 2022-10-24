import { FormEvent, useState, ChangeEvent } from "react";

const ImageForm = () => {
  const [uploadFiles, setUploadFiles] = useState<File[] | never[]>([]);
  const submitHanlder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
  };

  return (
    <form encType="multipart/form-data" onSubmit={submitHanlder}>
      <input type="file" name="image" onChange={imageUploadHandler} />
    </form>
  );
};

export default ImageForm;
