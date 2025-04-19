// أسعار الصرف
const exchangeRates = {
    usd: { usd: 1, euro: 0.93, sar: 3.75, aed: 3.67, egp: 30.86, kwd: 0.31, bhd: 0.38, qar: 3.64, lbp: 1500, jod: 0.71 },
    euro: { usd: 1.08, euro: 1, sar: 4.02, aed: 3.94, egp: 33.10, kwd: 0.33, bhd: 0.41, qar: 3.92, lbp: 1600, jod: 0.76 },
    sar: { usd: 0.27, euro: 0.25, sar: 1, aed: 0.99, egp: 8.21, kwd: 0.078, bhd: 0.095, qar: 0.97, lbp: 400, jod: 0.19 },
    aed: { usd: 0.27, euro: 0.25, sar: 1.01, aed: 1, egp: 8.59, kwd: 0.078, bhd: 0.095, qar: 0.98, lbp: 410, jod: 0.19 },
    egp: { usd: 0.032, euro: 0.030, sar: 0.12, aed: 0.12, egp: 1, kwd: 0.010, bhd: 0.012, qar: 0.12, lbp: 50, jod: 0.023 },
    kwd: { usd: 3.28, euro: 3.02, sar: 12.81, aed: 12.86, egp: 310.19, kwd: 1, bhd: 1.24, qar: 11.83, lbp: 4820, jod: 2.34 },
    bhd: { usd: 2.65, euro: 2.42, sar: 10.50, aed: 10.55, egp: 267.78, kwd: 0.81, bhd: 1, qar: 9.55, lbp: 3900, jod: 1.89 },
    qar: { usd: 0.27, euro: 0.25, sar: 1.02, aed: 1.02, egp: 8.66, kwd: 0.085, bhd: 0.095, qar: 1, lbp: 410, jod: 0.19 }
};

// دالة التحويل
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    if (isNaN(amount) || amount <= 0) {
        alert("يرجى إدخال مبلغ صحيح");
        return;
    }

    // حساب النتيجة
    const result = amount * exchangeRates[currencyFrom][currencyTo];
    
    // تحديد اسم العملة المستهدفة
    const currencyToName = document.getElementById('currency-to').selectedOptions[0].textContent;

    // عرض النتيجة مع اسم العملة المستهدفة فقط داخل input
    document.getElementById('result').value = `${result.toFixed(2)} ${currencyToName}`;
}
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    if (isNaN(amount) || amount <= 0) {
        alert("يرجى إدخال مبلغ صحيح");
        return;
    }

    const result = amount * exchangeRates[currencyFrom][currencyTo];
    const currencyToName = document.getElementById('currency-to').selectedOptions[0].textContent;

    const resultField = document.getElementById('result');
    resultField.value = `${result.toFixed(2)} ${currencyToName}`;
    
    // أنميشن النتيجة
    resultField.classList.add('flash');
    setTimeout(() => {
        resultField.classList.remove('flash');
    }, 800);
}

// أنميشن زر السحابة
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const cloudToggle = document.querySelector('.cloud-toggle');
    cloudToggle.classList.add('clicked');

    setTimeout(() => {
        cloudToggle.classList.remove('clicked');
    }, 500);
}

