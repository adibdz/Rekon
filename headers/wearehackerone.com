HTTP/1.1 301 Moved Permanently
Date: Tue, 22 Jun 2021 06:54:46 GMT
Cache-Control: max-age=3600
Expires: Tue, 22 Jun 2021 07:54:46 GMT
Location: https://wearehackerone.com/
cf-request-id: 0ad41915f90000e2332a9ce000000001
X-Content-Type-Options: nosniff
Server: cloudflare
CF-RAY: 663391365ca6e233-SIN
Transfer-Encoding: chunked
Connection: keep-alive

HTTP/2 301 
date: Tue, 22 Jun 2021 06:54:48 GMT
cache-control: max-age=3600
expires: Tue, 22 Jun 2021 07:54:48 GMT
location: https://docs.hackerone.com/hackers/hacker-email-alias.html
cf-request-id: 0ad4191c7f0000d994b7a1d000000001
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
server: cloudflare
cf-ray: 66339140cffed994-SIN

HTTP/2 200 
server: GitHub.com
content-type: text/html; charset=utf-8
last-modified: Fri, 11 Jun 2021 07:08:31 GMT
access-control-allow-origin: *
etag: "60c30bef-11f90"
expires: Tue, 22 Jun 2021 06:37:01 GMT
cache-control: max-age=600
x-proxy-cache: MISS
x-github-request-id: 9658:42A0:1603AD:177873:60D182B5
accept-ranges: bytes
date: Tue, 22 Jun 2021 06:54:50 GMT
via: 1.1 varnish
age: 2
x-served-by: cache-qpg1235-QPG
x-cache: HIT
x-cache-hits: 2
x-timer: S1624344891.916901,VS0,VE0
vary: Accept-Encoding
x-fastly-request-id: a710899ab0188c787119f3b26916a87a1efc650a
content-length: 73616

