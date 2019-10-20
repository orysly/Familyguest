
  (function() {
    var options = {
      whatsapp: "+447522341520", // WhatsApp number
      call_to_action: "Questions? Ask Richard", // Call to action
      position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
      host = "whatshelp.io",
      url = proto + "//static." + host;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url + '/widget-send-button/js/init.js';
    s.onload = function() {
      WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();
