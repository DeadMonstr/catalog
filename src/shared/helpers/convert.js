export function convertUsdToUzs(amountUsd, rate = 12100) {
    const usd = Number(amountUsd);

    return usd * rate;
}

function formatNumber(val) {
    return Number(val).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export function convertUzsToUsd(amountUzs, rate = 12100) {
    const uzs = Number(amountUzs);

    return formatNumber(uzs / rate);
}