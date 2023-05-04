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
  const href = window.location.href;
  if (isLogin) {
    if (href.includes("login.html")) {
      window.location.replace("index.html");
    }
  } else {
    if (!href.includes("login.html")) {
      window.location.replace("login.html");
    }
  }
}
