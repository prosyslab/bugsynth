
        // Code examples data
const examples = {
            1: `int division_by_zero_while(int x, int y, int z)
{
    int temp1 = 0;
    int result = 0;

    temp1 = x / (x - 5) * y;    // [BUG] Potential division-by-zero@4:15 '/ (x - 5)' with input: x = 5, y = 10, z = 1

    if (x == 5) {
        result = 0;
    } else {
        result = temp1 / (result + 1);    // Safe division
    }
    return result;
}`,
            2: `int div_by_zero_while(int x, int y, int z)
{
    int result = 0;
    int sum = 0;
    int ten = 10;
    int digit = 0;
    int temp = x;

    while (temp != 0) {
        digit = temp - (temp / digit) * ten;    // [BUG] Potential division-by-zero@8:30 '/ digit' with input: x = -7, y = -6, z = 2
        sum = sum + digit;
        temp = temp;
    }
    
    return result;
}`,
            3: `int division_by_zero_while(int x, int y, int z)
{
    int y_norm = y;

    while (y_norm != 0) {
        x = x / y_norm;
        y_norm = y_norm - 1 / (y_norm + 3) * z;    // [BUG] Potential division-by-zero@5:29 '/ (y_norm + 3)' with input: x = 6, y = -3, z = 4
    }

    x = x / (y_norm + 3) * z;    // Safe division

    if (x > 0) {
        int temp = x;
        x = x / z;    // Safe division
        z = temp;
    }
    return 0;
}`
        };

// Function to display code examples
function showCodeExample(exampleNumber) {
    const code = examples[exampleNumber] || '// Example not found.';
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    document.getElementById('code-example').innerHTML = `<pre><code class="language-c overflow-x-auto">${escaped}</code></pre>`;
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}