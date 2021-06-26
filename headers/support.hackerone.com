HTTP/2 301 
date: Tue, 22 Jun 2021 06:54:48 GMT
content-type: text/html; charset=UTF-8
content-length: 98
p3p: CP="NOI DSP COR NID ADMa OPTa OUR NOR"
vary: Accept
x-xss-protection: 1; mode=block
content-security-policy: frame-ancestors 'self' support.hackerone.com;
zendesk-ep: 10
location: https://support.hackerone.com/hc
set-cookie: _zendesk_shared_session=-TTkvWDJjM0V3UTFKVzYvNVNGOENWdUpFTkVmblNlRDZCblJzb3F1T1dsMEVlOGkreU1JTk5SUDNIZ2dqU0VSY1kyWmhRTk5jbGFTeElMRjR1QldUemZ4NWwyTlNKKzFNZkxWdGNkWDlZdGh5dVI5NU5kU0h2MkEyanBmSUV2NUc0ajMvYlJqdXVWS3F2NmVWK3J5ZGhBPT0tLUVlaEVZd25lQTNoUmhFRFQ0ZjVXdXc9PQ%3D%3D--e734e0abb64ec649dcbea16677311e0e36922e3c; path=/; secure; HttpOnly; SameSite=None
strict-transport-security: max-age=31536000;
cache-control: no-cache
x-zendesk-origin-server: classic-app-server-66b95cdd94-qm45x
x-request-id: 663391424da2dd02-SEA
x-runtime: 0.092318
x-content-type-options: nosniff
cf-cache-status: DYNAMIC
cf-request-id: 0ad4191d700000dd02033ef000000001
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v2?s=jdIuurk36982W4vrbRQVPSJKMahZTLQ0syJvaEkk%2F%2B7Nr4kdTwnc4hocWVS%2FCgPrW%2FrDPG1KaTGXsNMA6IqWcYJJzpLV3OZe4W%2FnQhsQCvQJ%2FYQy%2FDcEDPJzpu2wr8NUCMU%3D"}],"group":"cf-nel","max_age":604800}
nel: {"report_to":"cf-nel","max_age":604800}
set-cookie: _zendesk_authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 -0000; secure; HttpOnly; SameSite=None
set-cookie: _zendesk_session=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJWIxMzMyNzYzM2ZhNjE0ZWZjOGMzZmU5OGUzMzk0MGJjBjsAVEkiDGFjY291bnQGOwBGaQNeTAhJIgpyb3V0ZQY7AEZpA7CxBkkiDmlzX21vYmlsZQY7AFRGSSITd2FyZGVuLm1lc3NhZ2UGOwBUewA%3D--319b88d28ecbd67210dd72caf8c8cd8a27296349; path=/; secure; HttpOnly; SameSite=None
set-cookie: __cfruid=cf95a3e28ed167677077ff1b7775d3e8ec6e6617-1624344888; path=/; domain=.support.hackerone.com; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 663391424da2dd02-SIN

HTTP/2 301 
date: Tue, 22 Jun 2021 06:54:49 GMT
content-type: text/html; charset=utf-8
x-ua-compatible: IE=edge
content-language: en-us
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
location: https://support.hackerone.com/hc/en-us
cache-control: max-age=0, public, s-maxage=180, stale-while-revalidate=60, stale-if-error=10800
strict-transport-security: max-age=31536000;
x-zendesk-origin-server: help-center-unicorn-8cbf99dc6-tsh84
x-request-id: 663391488ff8dd02-SEA
x-runtime: 0.049471
protocol: HTTP/1.1
x-zendesk-zorg: yes
x-request-id: 663391488ff8dd02-SEA
x-content-type-options: nosniff
cf-cache-status: DYNAMIC
cf-request-id: 0ad41921570000dd02ff0fc000000001
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v2?s=MESoCWaOPk7XnPQyTCxoU%2FdGGNbEg7LEmYuv0Shl0MsjQbm8rhtsu8oCBNQ4G9tFRBweveLLlxxkdZH3Yb1s8rwoCFAwXLTwiQHDhtYi%2ByQldyVRLslRKPV%2FB2%2FjAYQtyrs%3D"}],"group":"cf-nel","max_age":604800}
nel: {"report_to":"cf-nel","max_age":604800}
set-cookie: __cfruid=0a1c87fa91031a47464511b0b21d3e567c29becd-1624344889; path=/; domain=.support.hackerone.com; HttpOnly; Secure; SameSite=None
server: cloudflare
cf-ray: 663391488ff8dd02-SIN

HTTP/2 200 
date: Tue, 22 Jun 2021 06:54:50 GMT
content-type: text/html; charset=utf-8
cf-ray: 6633914dafe7dd02-SIN
age: 0
cache-control: public, max-age=0
content-language: en-us
strict-transport-security: max-age=31536000;
vary: Accept-Encoding
cf-cache-status: HIT
cf-request-id: 0ad41924850000dd02fc158000000001
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
protocol: HTTP/1.1
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-request-id: 661864ddd3e02524-SJC
x-request-id: 6618b003e6bf2ef2-SEA
x-runtime: 0.136029
x-ua-compatible: IE=edge
x-xss-protection: 1; mode=block
x-zendesk-origin-server: help-center-unicorn-5bb7f87b46-pw8ck
x-zendesk-zorg: yes
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v2?s=3vfI9HfUrqSFdkb%2BiRJCM55mYXtwiAGEjgn0OjAO8WIhobUTB4Sv7x9307VKuHUjA8kN3tAyciELmTPpq0z1F%2F8aAvH6rcEupyKgCMolx3I7EqcenHzQn9GsPZtL%2FXG79rk%3D"}],"group":"cf-nel","max_age":604800}
nel: {"report_to":"cf-nel","max_age":604800}
set-cookie: __cfruid=ad7d7ddab6af560a341de9d62d75e9ba4b24074d-1624344890; path=/; domain=.support.hackerone.com; HttpOnly; Secure; SameSite=None
server: cloudflare

