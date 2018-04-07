'use strict';

//Scripting for home page
//focusing data fields on wrong answer and check email


{
  var init = function init() {

    //Functions to highlight
    function blackout() {
      var elements = document.querySelectorAll('.dialog_blackout');
      elements = Array.from(elements);
      elements.forEach(function (cur) {
        return cur.style.opacity = '0.3';
      });
    }
    function unBlackout() {
      var elements = document.querySelectorAll('.dialog_blackout');
      elements = Array.from(elements);
      elements.forEach(function (cur) {
        return cur.style.opacity = '1';
      });
    }

    //Setup event listeners function
    function setupEvent() {
      // Get info button
      document.getElementById(DOMstrings.infoButton).addEventListener('click', function () {
        location.assign("about.html");
      });

      // Calc ranges listeners
      document.getElementById(DOMstrings.rangeVolume).addEventListener('change', function () {
        var x = document.getElementById(DOMstrings.rangeVolume).value;
        document.getElementById(DOMstrings.inputVolume).textContent = x;
        calcPrice();
      });

      document.getElementById(DOMstrings.rangeAge).addEventListener('change', function () {
        var x = document.getElementById(DOMstrings.rangeAge).value;
        document.getElementById(DOMstrings.inputAge).textContent = x;
        calcPrice();
      });

      //Contact button after calc
      document.getElementById(DOMstrings.getContactBtn).addEventListener('click', function () {

        // Blackout page elements
        blackout();

        // Display dialog
        document.getElementById(DOMstrings.dialog).style.display = 'block';

        //Get and display price
        var price = parseInt(document.getElementById(DOMstrings.yourPrice).textContent);
        document.getElementById(DOMstrings.subPrice).textContent = price;
      });

      //Submit button
      document.getElementById(DOMstrings.contactSubmitBtn).addEventListener('click', function () {

        document.getElementById(DOMstrings.errorName).style.display = 'none';
        document.getElementById(DOMstrings.nameInput).style.border = 'none';
        document.getElementById(DOMstrings.errorNumber).style.display = 'none';
        document.getElementById(DOMstrings.subNumber).style.border = 'none';
        document.getElementById(DOMstrings.errorCheckbox).style.display = 'none';

        var x = document.getElementById(DOMstrings.subNumber).value;
        x = x.replace(/ /g, "");
        x = parseInt(x);

        if (document.getElementById(DOMstrings.nameInput).value.toString().length === 0) {
          //Validating UK number
          document.getElementById(DOMstrings.errorName).style.display = 'block';
          document.getElementById(DOMstrings.nameInput).style.border = '2px solid #ff704d';
        } else if (x.toString().length !== 12) {
          document.getElementById(DOMstrings.errorNumber).style.display = 'block';
          document.getElementById(DOMstrings.subNumber).style.border = '2px solid #ff704d';
        } else if (!document.getElementById(DOMstrings.dataCheckbox).checked) {
          document.getElementById(DOMstrings.errorCheckbox).style.display = 'block';
        } else {
          //Get rid of form
          document.getElementById(DOMstrings.dialog).style.display = 'none';

          //Ending dialog, being smart
          blackout();
          document.getElementById(DOMstrings.endDialog).style.display = 'block';
          document.getElementById(DOMstrings.leaveBtn).addEventListener('click', function () {
            document.getElementById(DOMstrings.endDialog).style.display = 'none';
            unBlackout();
          });
        }
      });

      //Close button
      document.getElementById(DOMstrings.closeDialog).addEventListener('click', function () {
        document.getElementById(DOMstrings.dialog).style.display = 'none';
        unBlackout();
      });

      // Clearing fields
      calcPrice();
    }

    //Calculate function
    function calcPrice() {
      document.getElementById(DOMstrings.yourPrice).textContent = function () {
        var a = document.getElementById(DOMstrings.rangeAge).value;
        var b = document.getElementById(DOMstrings.rangeVolume).value;
        document.getElementById(DOMstrings.inputVolume).textContent = b;
        document.getElementById(DOMstrings.inputAge).textContent = a;

        return Math.round(b * 10000 / a);
      }();
    };

    setupEvent();
  };

  // All strings used in script
  var DOMstrings = {
    infoButton: 'info_button',
    yourPrice: 'your_price',
    rangeVolume: 'range_volume',
    inputVolume: 'input_volume',
    rangeAge: 'range_age',
    inputAge: 'input_age',
    getContactBtn: 'get_contact_btn',
    dialog: 'dialog',
    rangeOutput: 'rangeOutput',
    subPrice: 'sub_price',
    contactSubmitBtn: 'contact_submit_btn',
    subNumber: 'sub_number',
    errorNumber: 'error_number',
    errorCheckbox: 'error_checkbox',
    errorName: 'error_name',
    dataCheckbox: 'data_checkbox',
    endDialog: 'end_dialog',
    leaveBtn: 'leave',
    nameInput: 'name_input',
    closeDialog: 'close_dialog'
  };

  ;

  init();
}
