const datepickerInput = document.querySelector('#datepicker-input');
const datepickerOptions = {
  inline: true,
  container: '.default-layout__datepicker'
};

new AirDatepicker(datepickerInput, datepickerOptions);

$(function () {
  function iconFromValue(val) {
    if (val.text === 'Все сотрудники') {
      val = `
        <div class="select2-icons"><img src="/images/ic_groups.svg"> ${val.text}</div>`;

      return val;
    }

    return val.text;
  }

  $('.select2-users').select2({
    width: 'style',
    dropdownAutoWidth: true,
    templateSelection: iconFromValue,
    escapeMarkup: function (m) { return m; }
  });

  $('.select2-jobs').select2({
    width: 'style',
    dropdownAutoWidth: true,
  });

  function calcCurrentTimePx() {
    let coefficient = 80;
    if (window.innerWidth < 660) {
      coefficient = 100;
    }
    
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const currentPx = (hour * coefficient) + ((coefficient / 60) * minutes)
    $('.current-line').css({top: currentPx});
  }

  calcCurrentTimePx();

  $( window ).on( "resize", function() {
    calcCurrentTimePx();
  } );
});

