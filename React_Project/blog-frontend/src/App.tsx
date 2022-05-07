import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";

const App = () => {
  return (
    <>
      <Routes>
        {/* /@:username은 username 부분을 파라미터로 읽어옴 */}
        <Route path="/" element={<PostListPage/>}/>
        <Route path="/@:username" element={<PostListPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/write" element={<WritePage/>}/>
        <Route path="/@:username/:postId" element={<PostPage/>}/>
      </Routes>
    </>
  )
}

export default App;