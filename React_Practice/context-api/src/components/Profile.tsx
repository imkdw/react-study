interface IProfile {
  result: {
    name: string;
    email: string;
  };
}
const Profile = ({ result }: IProfile) => {
  const { name, email } = result;
  return (
    <ul>
      <li>이름 : {name}</li>
      <li>이메일 : {email}</li>
    </ul>
  );
};

export default Profile;
