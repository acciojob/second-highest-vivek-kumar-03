//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const input = document.getElementById('arrayInput').value;
        const arr = input.split(',').map(item => {
            const num = parseInt(item.trim());
            return isNaN(num) ? 0 : num;
        });
        
        const result = secondHighest(arr);
        resultDiv.textContent = result !== -Infinity ? result : '-Infinity';
    });

    function secondHighest(arr) {
        if (arr.length < 2) return -Infinity;
        
        const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
        return uniqueSorted.length >= 2 ? uniqueSorted[1] : -Infinity;
    }
});