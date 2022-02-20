import { useState, useEffect } from "react";

function Info() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log("렌더링 완료!", info.name, info.email);
    return () => {
      console.log("컴포넌트가 사라짐!");
    };
  }, [info.name, info.email]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="이름을 입력하세요"
        value={info.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일을 입력하세요"
        value={info.email}
        onChange={onChange}
      />
      <div>
        정보 : {info.name} ({info.email})
      </div>
    </div>
  );
}

export default Info;
