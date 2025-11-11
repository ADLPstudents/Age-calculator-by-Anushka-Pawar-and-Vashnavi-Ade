// simple age calculator

const dob = document.getElementById('dob');
const check = document.getElementById('check');
const result = document.getElementById('result');

function calcAge(from) {
  const today = new Date();
  let y = today.getFullYear() - from.getFullYear();
  let m = today.getMonth() - from.getMonth();
  let d = today.getDate() - from.getDate();

  if (d < 0) {
    // borrow days from previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    d += prevMonth.getDate();
    m -= 1;
  }
  if (m < 0) {
    m += 12;
    y -= 1;
  }
  return { y, m, d };
}

function show(msg) {
  result.textContent = msg;
}

check.addEventListener('click', () => {
  const value = dob.value;
  if (!value) {
    show('Please pick your date of birth.');
    return;
  }
  const picked = new Date(value + 'T00:00:00');
  const today = new Date();
  if (picked > today) {
    show('That date is in the future.');
    return;
  }
  const { y, m, d } = calcAge(picked);
  show(`${y} years, ${m} months, ${d} days`);
});


