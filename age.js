function getAge() {
  let dd1 = new Date()
  let dd2 = new Date(1999, 8, 24)
  let dff = dd1 - dd2;
  let year = dff / ( 1000 * 60 * 60 * 24 * 365.25);
  let day = (year - Math.floor(year)) * 365.25;
  return `Age : ${Math.floor(year)} years ${Math.floor(day)} days`
}

document.getElementById('age').innerHTML = getAge()