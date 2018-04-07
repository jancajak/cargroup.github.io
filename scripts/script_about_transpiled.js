'use strict';

// Scripting for about page

{
  var blackout = function blackout() {
    var elements = document.querySelectorAll('.dialog_blackout');
    elements = Array.from(elements);
    elements.forEach(function (cur) {
      return cur.style.opacity = '0.3';
    });
  };

  var unBlackout = function unBlackout() {
    var elements = document.querySelectorAll('.dialog_blackout');
    elements = Array.from(elements);
    elements.forEach(function (cur) {
      return cur.style.opacity = '1';
    });
  };

  var init = function init() {
    //Newsletter button
    document.getElementById(DOMstrings.emailSubBtn).addEventListener('click', function () {
      function validation(email) {

        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        );
      }
      console.log(document.getElementById(DOMstrings.emailNews).value);
      if (validation(document.getElementById(DOMstrings.emailNews).value)) {
        blackout();
        document.getElementById(DOMstrings.endDialog).style.display = 'block';
        document.getElementById(DOMstrings.leaveBtn).addEventListener('click', function () {
          document.getElementById(DOMstrings.endDialog).style.display = 'none';
          unBlackout();
        });
      } else {
        document.getElementById(DOMstrings.errorEmail).style.display = 'block';
        document.getElementById(DOMstrings.inputEmailNews).style.border = '2px solid #ff704d';
      }
    });
  };

  var DOMstrings = {
    emailSubBtn: 'email_sub_btn',
    endDialog: 'end_dialog',
    leaveBtn: 'leave',
    emailNews: 'input_email_news',
    errorEmail: 'error_email',
    newsCheckbox: 'news_checkbox',
    errorCheckbox: 'error_checkbox',
    inputEmailNews: 'input_email_news'

    //Functions to highlight
  };

  init();
}
