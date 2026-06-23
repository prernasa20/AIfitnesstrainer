function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // days → milliseconds
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      // ✅ Fixed: return must include decodeURIComponent()
      return decodeURIComponent(c.substring(nameEQ.length));
    }
  }
  return null;
}

function deleteCookie(name) {
  // Setting days = -1 makes it expire immediately
  setCookie(name, '', -1);
}

