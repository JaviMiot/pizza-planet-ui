const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

fetch('http://127.0.0.1:5000/report/')
  .then((response) => response.json())
  .then((report) => {
    const monthId = report.month.month_number;
    report.month.month_number = getMonthName(monthId);
    let template = createRowTemplate(report);
    $('#report').append(template);
  });

function getMonthName(id) {
  return monthNames[Number(id) - 1];
}

function createRowTemplate(order) {
  let template = $('#report-template')[0].innerHTML;
  return Mustache.render(template, order);
}
