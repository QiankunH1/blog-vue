
const js = {
    setCookie(cname, cvalue, h) {
        var d = new Date();
        d.setTime(d.getTime() + (h * 60 * 1000));
        // d.setTime(d.getTime() + (h * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        // console.info(cname + "=" + cvalue + "; " + expires);
        document.cookie = cname + "=" + cvalue + "; " + expires;
        // console.info(document.cookie);
      },
      getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    
        if (arr = document.cookie.match(reg))
    
          return unescape(arr[2]);
        else
          return null;
      }
}
export default js