function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    let errorEl = input.parentNode.querySelector('.error-message');
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        input.parentNode.appendChild(errorEl);
    }
    errorEl.textContent = message;
    setTimeout(() => {
        input.classList.remove('error');
        if (errorEl) errorEl.remove();
    }, 3000);
}

function showResult(resultId, value, unit) {
    const resultEl = document.getElementById(resultId);
    resultEl.innerHTML = `<strong>${value} ${unit}</strong>`;
    resultEl.classList.add('show');
}

function convertDistance() {
    const input = document.getElementById('distanceInput');
    const type = document.getElementById('distanceType').value;
    const value = parseFloat(input.value);
    if (isNaN(value) || input.value === '') {
        showError('distanceInput', 'Por favor, digite um valor válido');
        return;
    }
    let result, unit;
    switch(type) {
        case 'km-to-miles':
            result = (value * 0.621371).toFixed(2);
            unit = 'milhas';
            break;
        case 'miles-to-km':
            result = (value * 1.60934).toFixed(2);
            unit = 'km';
            break;
        case 'm-to-ft':
            result = (value * 3.28084).toFixed(2);
            unit = 'pés';
            break;
        case 'ft-to-m':
            result = (value / 3.28084).toFixed(2);
            unit = 'metros';
            break;
    }
    showResult('distanceResult', result, unit);
}

function convertTemperature() {
    const input = document.getElementById('tempInput');
    const type = document.getElementById('tempType').value;
    const value = parseFloat(input.value);
    if (isNaN(value) || input.value === '') {
        showError('tempInput', 'Por favor, digite uma temperatura válida');
        return;
    }
    let result, unit;
    switch(type) {
        case 'c-to-f':
            result = ((value * 9/5) + 32).toFixed(1);
            unit = '°F';
            break;
        case 'f-to-c':
            result = ((value - 32) * 5/9).toFixed(1);
            unit = '°C';
            break;
    }
    showResult('tempResult', result, unit);
}

function convertWeight() {
    const input = document.getElementById('weightInput');
    const type = document.getElementById('weightType').value;
    const value = parseFloat(input.value);
    if (isNaN(value) || input.value === '') {
        showError('weightInput', 'Por favor, digite um peso válido');
        return;
    }
    let result, unit;
    switch(type) {
        case 'kg-to-lb':
            result = (value * 2.20462).toFixed(2);
            unit = 'libras';
            break;
        case 'lb-to-kg':
            result = (value / 2.20462).toFixed(2);
            unit = 'kg';
            break;
    }
    showResult('weightResult', result, unit);
}

function convertVolume() {
    const input = document.getElementById('volumeInput');
    const type = document.getElementById('volumeType').value;
    const value = parseFloat(input.value);
    if (isNaN(value) || input.value === '') {
        showError('volumeInput', 'Por favor, digite um volume válido');
        return;
    }
    let result, unit;
    switch(type) {
        case 'l-to-gal':
            result = (value * 0.264172).toFixed(2);
            unit = 'galões';
            break;
        case 'gal-to-l':
            result = (value / 0.264172).toFixed(2);
            unit = 'litros';
            break;
    }
    showResult('volumeResult', result, unit);
}

function resetDistance() {
    document.getElementById('distanceInput').value = '';
    document.getElementById('distanceResult').classList.remove('show');
    document.getElementById('distanceResult').innerHTML = '';
}

function resetTemperature() {
    document.getElementById('tempInput').value = '';
    document.getElementById('tempResult').classList.remove('show');
    document.getElementById('tempResult').innerHTML = '';
}

function resetWeight() {
    document.getElementById('weightInput').value = '';
    document.getElementById('weightResult').classList.remove('show');
    document.getElementById('weightResult').innerHTML = '';
}

function resetVolume() {
    document.getElementById('volumeInput').value = '';
    document.getElementById('volumeResult').classList.remove('show');
    document.getElementById('volumeResult').innerHTML = '';
}

// Real-time conversion on input
document.getElementById('distanceInput').addEventListener('input', () => {
    if (document.getElementById('distanceInput').value) {
        setTimeout(convertDistance, 300);
    }
});

document.getElementById('tempInput').addEventListener('input', () => {
    if (document.getElementById('tempInput').value) {
        setTimeout(convertTemperature, 300);
    }
});

document.getElementById('weightInput').addEventListener('input', () => {
    if (document.getElementById('weightInput').value) {
        setTimeout(convertWeight, 300);
    }
});

document.getElementById('volumeInput').addEventListener('input', () => {
    if (document.getElementById('volumeInput').value) {
        setTimeout(convertVolume, 300);
    }
});

// Convert on select change
document.getElementById('distanceType').addEventListener('change', () => {
    if (document.getElementById('distanceInput').value) {
        convertDistance();
    }
});

document.getElementById('tempType').addEventListener('change', () => {
    if (document.getElementById('tempInput').value) {
        convertTemperature();
    }
});

document.getElementById('weightType').addEventListener('change', () => {
    if (document.getElementById('weightInput').value) {
        convertWeight();
    }
});

document.getElementById('volumeType').addEventListener('change', () => {
    if (document.getElementById('volumeInput').value) {
        convertVolume();
    }
}); 