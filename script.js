async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currencyFrom = document.getElementById('currency-from').value;
    const currencyTo = document.getElementById('currency-to').value;

    if (isNaN(amount) || amount <= 0) {
        alert("يرجى إدخال مبلغ صحيح");
        return;
    }

    try {
        const apiKey = "2db14e7a42fa582ecdac6786";
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFrom}`);
        const data = await response.json();

        console.log("API response:", data); // Debug فقط

        if (data.result !== "success") {
            alert("حدث خطأ أثناء جلب سعر الصرف");
            return;
        }

        const rate = data.conversion_rates[currencyTo];
        const result = amount * rate;

        const currencyToName = document.getElementById('currency-to').selectedOptions[0].textContent;
        const resultField = document.getElementById('result');
        resultField.value = `${result.toFixed(2)} ${currencyToName}`;

        resultField.classList.add('flash');
        setTimeout(() => {
            resultField.classList.remove('flash');
        }, 800);

    } catch (error) {
        alert("فشل الاتصال بخدمة أسعار الصرف");
        console.error("Fetch error:", error);
    }
}
    console.error(error);

// أنميشن زر السحابة
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const cloudToggle = document.querySelector('.cloud-toggle');
    cloudToggle.classList.add('clicked');

    setTimeout(() => {
        cloudToggle.classList.remove('clicked');
    }, 500);
}
