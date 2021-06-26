HTTP/2 301 
date: Tue, 22 Jun 2021 06:54:47 GMT
content-type: text/html
content-length: 92
location: https://www.hackerone.com/
x-request-id: 326fbb39-8665-43cf-b563-ac7d2304066a
cache-control: no-cache
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
x-download-options: noopen
x-permitted-cross-domain-policies: none
referrer-policy: strict-origin-when-cross-origin
expect-ct: enforce, max-age=86400
content-security-policy: default-src 'none'; base-uri 'self'; block-all-mixed-content; child-src www.youtube-nocookie.com; connect-src 'self' www.google-analytics.com errors.hackerone.net; font-src 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: cover-photos.hackerone-user-content.com hackathon-photos.hackerone-user-content.com profile-photos.hackerone-user-content.com hackerone-us-west-2-production-attachments.s3.us-west-2.amazonaws.com; media-src 'self' hackerone-us-west-2-production-attachments.s3.us-west-2.amazonaws.com; script-src 'self' www.google-analytics.com; style-src 'self' 'unsafe-inline'; report-uri https://errors.hackerone.net/api/30/csp-report/?sentry_key=374aea95847f4040a69f9c8d49a3a59d
cf-cache-status: DYNAMIC
cf-request-id: 0ad41916a1000001e18c9bb000000001
server: cloudflare
cf-ray: 663391376a9201e1-SIN

HTTP/2 200 
date: Tue, 22 Jun 2021 06:54:51 GMT
content-type: text/html; charset=UTF-8
expires: Fri, 23 Jul 2021 06:54:50 GMT
cache-control: public, max-age=2678400
x-drupal-dynamic-cache: HIT
link: <https://www.hackerone.com/>; rel="canonical", <https://www.hackerone.com/>; rel="shortlink"
link: <https://www.hackerone.com/>; rel="alternate"; hreflang="en"
link: <https://www.hackerone.com/home>; rel="revision"
x-ua-compatible: IE=edge
content-language: en
x-frame-options: DENY
last-modified: Tue, 22 Jun 2021 01:31:07 GMT
etag: W/"1624325467"
x-generator: Drupal 9 (https://www.drupal.org)
content-security-policy: default-src 'none'; base-uri 'self'; block-all-mixed-content; child-src blob: js.driftt.com *.youtube-nocookie.com *.marketo.com; connect-src 'self' *.6sc.co *.6sense.com *.company-target.com *.google-analytics.com *.litix.io *.mktoresp.com *.mktoutil.com *.stripe.com *.wistia.com s3.amazonaws.com api.lever.co embedwistia-a.akamaihd.net hackerone.com secure.adnxs.com stats.g.doubleclick.net; font-src 'self' data: fonts.gstatic.com *.typekit.net; form-action 'self' *.marketo.com *.twitter.com; frame-ancestors 'self'; frame-src 'self' fast.wistia.com js.driftt.com *.youtube.com *.youtube-nocookie.com *.marketo.com *.twitter.com my.pima.app; object-src 'self'; img-src 'self' data: *.6sc.co *.adsymptotic.com *.bidr.io *.company-target.com *.google-analytics.com *.google.com *.linkedin.com *.techtarget.com *.twimg.com *.twitter.com s3.amazonaws.com cdn.bizible.com cdn.bizibly.com cdn.ttgtmedia.com embed-fastly.wistia.com embedwistia-a.akamaihd.net fast.wistia.com id.rlcdn.com stats.g.doubleclick.net t.co via.placeholder.com https://*.bred4tula.com https://*.googletagmanager.com; media-src 'self' blob: data: *.wistia.com s3.amazonaws.com embedwistia-a.akamaihd.net; script-src 'self' 'sha256-GIzg/vN5a9TbTavbaC/fu8ZDVJriAcj3NVOm9O9Ez7g=' 'sha256-njEVDP22SRLTbvkBGYBk/bZxj3vsHZe/TM7+ykFIPtk=' 'sha256-chw1FVji+ddLlO/RrcP3fhKOLsJUUh+FaKbjsOC2BiQ=' 'sha256-D6d37gZGDMRuNu3bDdYkGuOfCaaNGdTrB3eF5d5IU/Y=' 'sha256-XrP50Mq6s78GLH2Vyt4BfKhn8rx4OdU6FYqQGbxRuZc=' *.6sc.co *.ads-twitter.com *.cloudflare.com *.demandbase.com *.google-analytics.com *.linkedin.com *.techtarget.com *.twitter.com *.marketo.com *.ads-twitter.com s3.amazonaws.com cdn.bizible.com cdn.syndication.twimg.com fast.wistia.com js.driftt.com munchkin.marketo.net snap.licdn.com unpkg.com https://*.bred4tula.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline' *.twitter.com *.marketo.com s3.amazonaws.com checkout.stripe.com fast.wistia.com fonts.googleapis.com *.typekit.net; report-uri https://errors.hackerone.net/api/30/csp-report/?sentry_key=61c1e2f50d21487c97a071737701f598
x-drupal-cache: HIT
x-request-id: v-278a0cd4-d320-11eb-89ab-336416b88f30
x-ah-environment: prod
x-geo-country: 
vary: Cookie,X-Geo-Country
referrer-policy: no-referrer-when-downgrade
x-content-type-options: nosniff
x-permitted-cross-domain-policies: none
x-xss-protection: 1; mode=block
strict-transport-security: max-age=31536000; includeSubDomains; preload
expect-ct: enforce, max-age=31536000
via: varnish
x-cache: HIT
x-cache-hits: 7
cf-cache-status: MISS
cf-request-id: 0ad41925a1000001dd52080000000001
server: cloudflare
cf-ray: 6633914f6da001dd-SIN

ff
x-permitted-cross-domain-policies: none
x-xss-protection: 1; mode=block
strict-transport-security: max-age=31536000; includeSubDomains; preload
expect-ct: enforce, max-age=31536000
via: varnish
x-cache: HIT
x-cache-hits: 6
cf-cache-status: MISS
cf-request-id: 0ad4191d110000cbf8b3802000000001
server: cloudflare
cf-ray: 66339141bdeecbf8-SIN

