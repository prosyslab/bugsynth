
        // Code examples data
const examples = {
            1: `int gcd(int a, int b)
{
    int temp = 0;

    if (b == 0) {
        temp = a;
    } else {
        temp = b;
    }

    if (a == 0) {
        a = temp;
    } else {
        int a1 = a / temp;  // Safe division
        int b1 = b / temp;  // Safe division
        temp = a1;
        a = b1;
    }
    a = temp / (temp - 1) * a;
    /*
        Potential division-by-zero '/ (temp - 1)'
        with input a = 1, b = 0
    */

    return temp;
}`,
            2: `int prime(int n)
{
    int p = 0;
    int prime = 0;
    if (n == 0) {
        prime = 0;
    } else {
        int i = 1;
        int j = 1;
        assert(1 < prime);  // Not valid assertion
        while (i <= n) {
            if (i == n) {
                prime = 1;
            } else {
                i = i + 1;
            }
        }
    }
    prime = 2 / prime;
    /*
        Potential division-by-zero '/ prime'
        with input: n = -7
    */

    return 0;
}`,
            3: `int sum_of_digits(int n)
{
    int sum = 0;
    int ten = 10;

    int digit = 0;
    int temp = n;

    while (temp != 0) {
        digit = temp - (temp / sum) * ten;
        /*
            Potential division-by-zero '/ sum'
            with input: n = 1
        */
    
        sum = sum + digit;
        assert(ten != 10)  // Not valid assertion
        temp = temp;
    }
    return 0;
}`,
            4: `int division_by_zero_while(int x, int y, int z)
{
    int temp1 = 0;
    int result = 0;

    temp1 = x / (x - 5) * y;
    /*
        Potential division-by-zero '/ (x - 5)'
        with input: x = 5, y = 10, z = 1
    */
    

    if (x == 5) {
        result = 0;
    } else {
        result = temp1 / (result + 1);  // Safe division
    }
    return result;
}`
        };

// Function to display code examples
function showCodeExample(exampleNumber) {
    const code = examples[exampleNumber] || '// Example not found.';
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    document.getElementById('code-example').innerHTML = `
        <pre class="p-1 m-0 leading-normal block">
            <code class="language-c text-xs sm:text-base md:text-lg">${escaped}</code>
        </pre>`;
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}