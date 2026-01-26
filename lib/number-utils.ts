
const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const SCALES = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

/**
 * Converts a non-negative integer to words.
 */
function integerToWords(cls: number): string {
    if (cls === 0) return "zero";

    let words = "";
    let scaleIndex = 0;

    while (cls > 0) {
        if (cls % 1000 !== 0) {
            const partStr = convertLessThanOneThousand(cls % 1000);
            if (scaleIndex > 0) {
                words = partStr + " " + SCALES[scaleIndex] + (words ? " " + words : "");
            } else {
                words = partStr + (words ? " " + words : "");
            }
        }
        cls = Math.floor(cls / 1000);
        scaleIndex++;
    }
    return words;
}

function convertLessThanOneThousand(num: number): string {
    let current = "";

    if (num % 100 < 10) {
        current = ONES[num % 100];
        num = Math.floor(num / 100);
    } else if (num % 100 < 20) {
        current = TEENS[num % 10];
        num = Math.floor(num / 100);
    } else {
        current = ONES[num % 10];
        num = Math.floor(num / 10);

        current = TENS[num % 10] + (current ? "-" + current : "");
        num = Math.floor(num / 10);
    }

    if (num === 0) return current;

    return ONES[num] + " hundred" + (current ? " " + current : "");
}

/**
 * Main function to convert a number to words.
 * @param num The number to convert (can be float).
 */
export function numberToWords(num: number): string {
    if (isNaN(num)) return "";
    if (num === 0) return "zero";
    if (!isFinite(num)) return "infinity";

    let prefix = "";
    if (num < 0) {
        prefix = "negative ";
        num = Math.abs(num);
    }

    const integerPart = Math.floor(num);
    // Limit to 4 decimal places for readability in the text version?
    // User asked for "formatted full value and the written value".
    // Let's just handle up to a few decimals for the written part to be useful but not insane.
    // Actually, if it's scientific notation range, words are useless.
    // We'll return empty string for extremely large/small numbers that are displayed in scientific notation anyway.

    if (num > 1e18 || (num < 1e-6 && num > 0)) {
        return ""; // Scientific notation numbers are hard to read as words (e.g. "one point three times ten to the power...")
    }

    let words = integerToWords(integerPart);

    const decimalPart = num - integerPart;
    if (decimalPart > 0) {
        // Round to 4 decimal places for sanity
        const roundedDecimal = Math.round(decimalPart * 10000);
        if (roundedDecimal > 0) {
            // Check if we effectively just rounded to 0
            // "point ..."
            // A simple approach: read digits
            const decimalStr = decimalPart.toFixed(4).replace(/\.?0+$/, "").split('.')[1] || "";

            if (decimalStr.length > 0) {
                const decimalWords = decimalStr.split('').map(d => {
                    const digit = parseInt(d);
                    // 0 is "zero" here
                    return digit === 0 ? "zero" : ONES[digit];
                }).join(" ");

                if (words === "zero" && integerPart === 0) {
                    words = "zero point " + decimalWords;
                } else {
                    words += " point " + decimalWords;
                }
            }
        }
    }

    return prefix + words;
}

/**
 * Formats a number for display.
 * - Uses commas for grouping.
 * - Uses scientific notation for very large/small numbers.
 * - Handles 0 explicitly.
 */
export function formatNumber(num: number): string {
    if (num === 0) return "0";

    const absNum = Math.abs(num);

    // Scientific notation for very small or very large numbers
    if (absNum < 1e-6 || absNum >= 1e12) {
        return num.toExponential(6).replace(/\.?0+e/, 'e'); // cleanup trailing zeros before e? No, standard is fine.
        // Actually standard toExponential(6) is 1.230000e+2. User wants full formatted value "where possible".
        // Let's standard.
    }

    // Regular text formatting (commas)
    // Intl.NumberFormat handles 1,000.123
    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 6,
        minimumFractionDigits: 0,
        useGrouping: true
    }).format(num);
}
