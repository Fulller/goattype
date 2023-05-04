export function checkLogin() {
  function getIsLogin(name, defaultValue) {
    let value = JSON.parse(localStorage.getItem(name));
    if (value == null) {
      localStorage.setItem(name, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return value;
  }
  let isLogin = getIsLogin("isLogin", false);
  const pathname = window.location.pathname;
  console.log(window.location);
  if (pathname.includes("/login.html")) {
    if (isLogin) {
      window.location.replace("index.html");
    }
  } else {
    if (isLogin == false) {
      window.location.replace("login.html");
    }
  }
}
