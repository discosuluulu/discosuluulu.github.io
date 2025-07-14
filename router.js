window.addEventListener("DOMContentLoaded", () => {
  const subdomain = window.location.hostname.split(".")[0];
  const rootDomain = "discosuluulu.com";

  const redirectMap = {
    "discosuluulu": "index.html", // default domain
    "shop": "shop.html",
    "info": "info.html",
    "shop2": "shop2.html"
  };

  if (window.location.hostname.endsWith(rootDomain)) {
    const page = redirectMap[subdomain];
    if (page && window.location.pathname !== `/${page}`) {
      window.location.replace(`/${page}`);
    }
  }
});
