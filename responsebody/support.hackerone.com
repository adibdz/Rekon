<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
  <meta charset="utf-8" />
  <!-- v19831 -->

  <title>HackerOne</title>

  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="hc:meta:server:GwnpIC4qNkchqo4mv-CW0PnQ02jxffc_q6O1tEz5Hh3cOlGzOCrgg-jec9nvH9AvLs7NLzhVTKr0cgzW97Du-Q" />

  <link rel="canonical" href="https://support.hackerone.com/hc/en-us" />
<link rel="alternate" hreflang="en" href="https://support.hackerone.com/hc/en-us" />

  <link rel="stylesheet" media="all" href="//static.zdassets.com/hc/assets/application-79172500fb4dbec2484043d570946543.css" id="stylesheet" />
    <!-- Entypo pictograms by Daniel Bruce — www.entypo.com -->
    <link rel="stylesheet" media="all" href="//static.zdassets.com/hc/assets/theming_v1_support-cf937686d5b6669242017892da7bad78.css" />
  <link rel="stylesheet" type="text/css" href="//p13.zdassets.com/hc/theming_assets/543838/23375/style.css?digest=360053253632">

  <link rel="shortcut icon" type="image/x-icon" href="//theme.zdassets.com/theme_assets/543838/860e16b72702a8263c4c79996e568d5278fdccb9.ico" />

    <script src="//static.zdassets.com/hc/assets/jquery-d5395f0b7ac5027403fc17855c46dbfc.js"></script>
    <script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49905813-2', 'auto');
ga('send', 'pageview');

</script>


  <script src="https://cdn.statuspage.io/se-v2.js"></script>
  <script type="text/javascript" src="//p13.zdassets.com/hc/theming_assets/543838/23375/script.js?digest=360053253632"></script>
<script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
<body class="">
  
  

  <header class="header">
  <div class="header-inner">
    <div class="logo"><a title="Home" href="/hc/en-us">
      <img src="//theme.zdassets.com/theme_assets/543838/1df507850759da11cdaa3e28804ad313e6ed678d.png" alt="Logo">
    </a></div>
    <div class="logo-subtitle">Help Center</div>
    <nav class="user-nav">
      <a href="https://www.hackeronestatus.com" target="_blank">
        <span class="color-dot"></span>
        <span class="color-description"></span>
      </a>
      
      <a class="submit-a-request" href="/hc/en-us/requests/new">Submit a request</a>
        <a class="login" data-auth-action="signin" role="button" rel="nofollow" title="Opens a dialog" href="/hc/en-us/signin?return_to=https%3A%2F%2Fsupport.hackerone.com%2Fhc%2Fen-us&amp;locale=en-us">Sign in</a>

    </nav>
  </div>
</header>

  <main role="main">
    <div class="geometry hero-unit">
  <div class="geometry__container">
    test
  </div>
</div>

<div class="geometry hero-unit">
  <div class="geometry__container search-box">
    <form role="search" class="search" data-search="" action="/hc/en-us/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="search" name="query" id="query" placeholder="Search" aria-label="Search" />
<input type="submit" name="commit" value="Search" /></form>
  </div>
</div>

<section class="knowledge-base">
  
</section>

  </main>

  <footer class="footer">
  <div class="footer-inner">
    <ul class="footer-menu">
      <li><a href="https://hackerone.com">Back to HackerOne.com</a></li>
      <li><a href="https://hackerone.com/blog">Blog</a></li>
      <li><a href="https://hackerone.com/users/sign_up">Sign up as hacker</a></li>
      <li><a href="https://hackerone.com/teams/new">Try HackerOne</a></li>
    </ul>
    <div class="footer-copyright">2018 &copy; HackerOne</div>
  </div>
</footer>

    <div class="powered-by-zendesk">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" focusable="false" viewBox="0 0 26 26">
    <path d="M12 8.2v14.5H0zM12 3c0 3.3-2.7 6-6 6S0 6.3 0 3h12zm2 19.7c0-3.3 2.7-6 6-6s6 2.7 6 6H14zm0-5.2V3h12z"/>
  </svg>

  <a href="https://www.zendesk.com/help-center/?utm_source=helpcenter&utm_medium=poweredbyzendesk&utm_campaign=text&utm_content=HackerOne" target="_blank" rel="nofollow">Powered by Zendesk</a>
</div>


  <!-- / -->

  
  <script src="//static.zdassets.com/hc/assets/en-us.446c81d0dfd893cfe7e4.js"></script>
  <script src="https://hackerone.zendesk.com/auth/v2/host.js" data-brand-id="23375" data-return-to="https://support.hackerone.com/hc/en-us" data-theme="hc" data-locale="en-us" data-auth-origin="23375,true,true"></script>

  <script type="text/javascript">
  /*

    Greetings sourcecode lurker!

    This is for internal Zendesk and legacy usage,
    we don't support or guarantee any of these values
    so please don't build stuff on top of them.

  */

  HelpCenter = {};
  HelpCenter.account = {"subdomain":"hackerone","environment":"production","name":"HackerOne"};
  HelpCenter.user = {"identifier":"da39a3ee5e6b4b0d3255bfef95601890afd80709","email":null,"name":null,"role":"anonymous","avatar_url":"https://assets.zendesk.com/hc/assets/default_avatar.png","is_admin":false,"organizations":[],"groups":[]};
  HelpCenter.internal = {"asset_url":"//static.zdassets.com/hc/assets/","web_widget_asset_composer_url":"https://static.zdassets.com/ekr/snippet.js","current_session":{"locale":"en-us","csrf_token":"hc:hcobject:server:o65YaeUCuiSrCQV7MkKQuHeUJj_-NQ9Jr1e_ZJoHJ21kneD68wJs4GJ9-IRivdZHoIo4eDcdtNzwhgYGIU7XiQ","shared_csrf_token":null},"settings":{},"usage_tracking":{"event":"front_page_viewed","data":"BAh7BjoKX21ldGF7CzoPYWNjb3VudF9pZGkDXkwIOhNoZWxwX2NlbnRlcl9pZGkEg6vtCzoNYnJhbmRfaWRpAk9bOgx1c2VyX2lkMDoTdXNlcl9yb2xlX25hbWVJIg5BTk9OWU1PVVMGOgZFVDoLbG9jYWxlSSIKZW4tdXMGOwtU--3b3d97c544b2404fc850ef4bfbaabb0f3870b509","url":"https://support.hackerone.com/hc/activity"},"current_record_id":null,"current_record_url":null,"current_record_title":null,"search_results_count":null,"current_text_direction":"ltr","current_brand":{"account_id":543838,"brand_id":23375,"brand_url":"https://support.hackerone.com","url":"https://hackerone.zendesk.com/api/v2/brands/23375.json","name":"HackerOne","logo":"","subdomain":"hackerone","host_mapping":"support.hackerone.com","help_center_state":"enabled","ticket_form_ids":null,"active":true,"default":true,"has_help_center":true,"created_at":"2014-06-22T02:05:16Z","updated_at":"2020-08-19T17:42:43Z","id":23375,"route_id":438704},"current_brand_url":"https://hackerone.zendesk.com","current_host_mapping":"support.hackerone.com","current_path":null,"authentication_domain":"https://hackerone.zendesk.com","show_autocomplete_breadcrumbs":false,"rollbar_config":{"enabled":true,"endpoint":"https://rollbar-us.zendesk.com/api/1/item/","accessToken":"731a5a953e9a4b7ab6cac9623f50c732","captureUncaught":true,"captureUnhandledRejections":true,"payload":{"environment":"production","client":{"javascript":{"source_map_enabled":true,"code_version":"4e315dd33816f298c1a6dff4696e12cb6585f552","guess_uncaught_frames":true}}}},"user_info_changing_enabled":false,"has_user_profiles_enabled":false,"has_end_user_attachments":true,"user_aliases_enabled":false,"has_anonymous_kb_voting":false,"has_multi_language_help_center":true,"mobile_device":false,"mobile_site_enabled":true,"show_at_mentions":false,"embeddables_config":{"embeddables_web_widget":false,"embeddables_connect_ipms":false},"base_domain":"zendesk.com","answer_bot_subdomain":"static","manage_content_url":"https://support.hackerone.com/hc/en-us","arrange_content_url":"https://support.hackerone.com/hc/admin/arrange_contents?locale=en-us","general_settings_url":"https://support.hackerone.com/hc/admin/general_settings?locale=en-us","user_segments_url":"https://hackerone.zendesk.com/knowledge/user_segments?brand_id=23375","has_gather":true,"has_community_enabled":false,"has_community_badges":false,"has_user_segments":true,"has_answer_bot_web_form_enabled":false,"has_answer_bot_web_form_modal_v2":false,"billing_url":"/access/return_to?return_to=https://hackerone.zendesk.com/admin/billing/subscription","is_account_owner":false,"theming_cookie_key":"hc-da39a3ee5e6b4b0d3255bfef95601890afd807091-preview","is_preview":false,"has_guide_user_segments_search":true,"has_alternate_templates":false,"arrange_articles_url":"https://hackerone.zendesk.com/knowledge/arrange?brand_id=23375","article_verification_url":"https://hackerone.zendesk.com/knowledge/verification?brand_id=23375","has_article_verification":false,"guide_language_settings_url":"https://support.hackerone.com/hc/admin/language_settings?locale=en-us","docs_importer_url":"https://hackerone.zendesk.com/knowledge/import_articles?brand_id=23375","community_badges_url":"https://hackerone.zendesk.com/knowledge/community_badges?brand_id=23375","community_settings_url":"https://hackerone.zendesk.com/knowledge/community_settings?brand_id=23375","gather_plan_state":"subscribed","search_settings_url":"https://hackerone.zendesk.com/knowledge/search_settings?brand_id=23375","has_multibrand_search_in_plan":false,"theming_api_version":1,"has_pci_credit_card_custom_field":false,"current_brand_id":23375,"help_center_restricted":false,"current_brand_active":true,"is_assuming_someone_else":false,"flash_messages":[],"user_photo_editing_enabled":true,"has_end_user_apps":false,"has_docs_importer":true,"has_sunco_widget":false};
</script>

  <script src="//static.zdassets.com/hc/assets/moment-f6f8513da6ab17eadada59a1a4edb536.js"></script>
  <script src="//static.zdassets.com/hc/assets/hc_enduser-67a423d1d73699774b9d15d9f47e0a59.js"></script>
  
<script type="text/javascript">(function(){window['__CF$cv$params']={r:'663391650d0cddbf',m:'d09de9362a9586e5293d786ab408d8e8c2fc1a0d-1624344894-1800-ATBYB8Qj/Zhjn/dfWDif3jhlaRdsQtytzp6qZJ88LtBs5rt7UFdDbYxAgssB1qo4127EIBtz7APww1lX8B1xl/Dz9KqzKir4xfYicc4/WsS7beEaN7jAX24pqS9Vn09bSw==',s:[0x51e4fcdabe,0xddf4e71daf],}})();</script></body>
</html>