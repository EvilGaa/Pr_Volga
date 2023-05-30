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
});

