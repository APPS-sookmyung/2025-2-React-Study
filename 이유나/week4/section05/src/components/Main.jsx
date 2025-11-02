import "./Main.css";

const Main = () => {
  const user = {
    name: "이유나",
    isLogin: false,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
