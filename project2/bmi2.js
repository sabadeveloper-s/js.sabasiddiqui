document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) {
        console.log('No form found, please check your HTML.');
        return;
    }
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#Weight').value);
        const results = document.querySelector('#results');

        if (!results) {
            console.log('Results div not found.');
            return;
        }
        if (height <= 0 || isNaN(height)) {
            results.innerHTML = 'Please enter a valid height';
        } else if (weight <= 0 || isNaN(weight)) {
            results.innerHTML = 'Please enter a valid weight';
        } else {
            const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            
            results.innerHTML = `<span>${bmi}</span>`;
        }
    });
});