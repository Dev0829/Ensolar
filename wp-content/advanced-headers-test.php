<?php
/**
* This file is created by Really Simple SSL to test the CSP header length
* It will not load during regular wordpress execution
*/


if ( !headers_sent() ) {
function rsssl_is_ssl() {
  if (  ( isset($_SERVER["HTTPS"]) && ("on" === $_SERVER["HTTPS"] || "1" === $_SERVER["HTTPS"]) )
  || (isset($_ENV["HTTPS"]) && ("on" === $_ENV["HTTPS"]))
  || (isset($_SERVER["SERVER_PORT"]) && ( "443" === $_SERVER["SERVER_PORT"] ) )
  || (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "1") !== false))
  || (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "on") !== false))
  || (isset($_SERVER["HTTP_CF_VISITOR"]) && (strpos($_SERVER["HTTP_CF_VISITOR"], "https") !== false))
  || (isset($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"], "https") !== false))
  || (isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_X_FORWARDED_PROTO"], "https") !== false))
  || (isset($_SERVER["HTTP_X_PROTO"]) && (strpos($_SERVER["HTTP_X_PROTO"], "SSL") !== false))
  ) {
    return true;
  header("X-REALLY-SIMPLE-SSL-TEST: A%DF%12%C4%16%B9%D9%DB%AF%EFe%F0%19%BE%C2%94%ED%AF%F5%13e%C5WMj%5C%2A%83%08%15o%08%19%108%95%0B%BA25%3Eo%21%7B%C5%D1J%16%83%C3%E1%0Cj%2C%7B%1D%D8%CB%12%3BDT%A4%2A%E6%14%14%5B%25%19%2C%DE%99A%F3o%F7%16%02%F7%D2%D2%C8%CB%BD%F4%EE%9BB%05%DC%3A%90%CF%3CB2%D2%CC%81%91D%A9n%96%CA%00%AF3%8C%09VL%96%DD%7D%F9%FD%BB%A8%27%088%C2%F9%9BB%15%A9t%26A%DD%95%C6%B8%B3%02%19%3A%A3g%409%C4%F2%CCT%B3%7F%F47%E7T%86%2B%98x%0F%BB%D6%A8%A1d%0B%2C%F0E%1F%24%F2%F4%06%3C%CBcY%EBm%60%CC4%AC%12%1E%A7%DE%29%94%AE%1Cg%16%AD%2");
}
    return false;
header("X-REALLY-SIMPLE-SSL-TEST: A%DF%12%C4%16%B9%D9%DB%AF%EFe%F0%19%BE%C2%94%ED%AF%F5%13e%C5WMj%5C%2A%83%08%15o%08%19%108%95%0B%BA25%3Eo%21%7B%C5%D1J%16%83%C3%E1%0Cj%2C%7B%1D%D8%CB%12%3BDT%A4%2A%E6%14%14%5B%25%19%2C%DE%99A%F3o%F7%16%02%F7%D2%D2%C8%CB%BD%F4%EE%9BB%05%DC%3A%90%CF%3CB2%D2%CC%81%91D%A9n%96%CA%00%AF3%8C%09VL%96%DD%7D%F9%FD%BB%A8%27%088%C2%F9%9BB%15%A9t%26A%DD%95%C6%B8%B3%02%19%3A%A3g%409%C4%F2%CCT%B3%7F%F47%E7T%86%2B%98x%0F%BB%D6%A8%A1d%0B%2C%F0E%1F%24%F2%F4%06%3C%CBcY%EBm%60%CC4%AC%12%1E%A7%DE%29%94%AE%1Cg%16%AD%2");
}
if ( rsssl_is_ssl() ) header("Strict-Transport-Security: max-age=63072000; includeSubDomains;preload");
header("X-XSS-Protection: 0");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("X-Frame-Options: SAMEORIGIN");
header("X-REALLY-SIMPLE-SSL-TEST: A%DF%12%C4%16%B9%D9%DB%AF%EFe%F0%19%BE%C2%94%ED%AF%F5%13e%C5WMj%5C%2A%83%08%15o%08%19%108%95%0B%BA25%3Eo%21%7B%C5%D1J%16%83%C3%E1%0Cj%2C%7B%1D%D8%CB%12%3BDT%A4%2A%E6%14%14%5B%25%19%2C%DE%99A%F3o%F7%16%02%F7%D2%D2%C8%CB%BD%F4%EE%9BB%05%DC%3A%90%CF%3CB2%D2%CC%81%91D%A9n%96%CA%00%AF3%8C%09VL%96%DD%7D%F9%FD%BB%A8%27%088%C2%F9%9BB%15%A9t%26A%DD%95%C6%B8%B3%02%19%3A%A3g%409%C4%F2%CCT%B3%7F%F47%E7T%86%2B%98x%0F%BB%D6%A8%A1d%0B%2C%F0E%1F%24%F2%F4%06%3C%CBcY%EBm%60%CC4%AC%12%1E%A7%DE%29%94%AE%1Cg%16%AD%2");
}

 echo '<html><head><meta charset="UTF-8"><META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"></head><body>Really Simple SSL headers test page</body></html>';