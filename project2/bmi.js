const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventdefault();
  console.log('submit')
  alert('submit')

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#Weight').value);
  const results = document.querySelector('#results').value;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `enter a valid height Nan ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `enter a valid weight Nan ${weight}`;
  } else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
