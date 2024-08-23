

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
    
  }, 'google_translate_element');
}

function triggerHtmlEvent(element, eventName) {
  var event;
  if (document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
  } else {
    event = document.createEventObject();
    event.eventType = eventName;
    element.fireEvent('on' + event.eventType, event);
  }
}

jQuery('.lang-select').click(function() {
  var theLang = jQuery(this).attr('data-lang');
  jQuery('.goog-te-combo').val(theLang);

  //alert(jQuery(this).attr('href'));
  window.location = jQuery(this).attr('href');
  location.reload();

});
const selectedLanguage = document.querySelector('.selected-language');
// const flagImg = selectedLanguage.querySelector('.flagimg');

document.querySelectorAll('.lang-select').forEach(item => {
item.addEventListener('click', event => {
event.preventDefault();
const lang = item.getAttribute('data-lang');
const flagUrl = item.querySelector('.flagimg').getAttribute('src');
flagImg.setAttribute('src', flagUrl);
});
});




