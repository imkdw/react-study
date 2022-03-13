import Contents from "components/common/Contents";

interface FriendProps {
  userObj: any;
}
const Friends = ({ userObj }: FriendProps) => {
  return (
    <Contents>
      <div
        style={{
          width: "100%",
          height: "40px",
          background: "red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          친구
        </span>
        <ul
          style={{
            width: "60px",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li style={{ width: "20px" }}>검색</li>
          <li style={{ width: "20px" }}>친추</li>
        </ul>
      </div>
    </Contents>
  );
};

export default Friends;
