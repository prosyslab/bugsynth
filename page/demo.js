
        // Code examples data
const examples = {
    1: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
            2: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(5, 3);
    printf("Sum: %d\\n", sum);
    return 0;
}`,
            3: `#include <stdio.h>

void greet() {
    printf("Welcome to Bugsynth!\\n");
}

int main() {
    greet();
    return 0;
}`,
            4: `#include <stdio.h>

int multiply(int a, int b) {
    return a * b;
}

int main() {
    int product = multiply(4, 5);
    printf("Product: %d\\n", product);
    return 0;
}`,
            5: `#include <stdio.h>

void displayMessage() {
    printf("This is a simple message.\\n");
}

int main() {
    displayMessage();
    return 0;
}`,
            6: `#include <stdio.h>

int subtract(int a, int b) {
    return a - b;
}

int main() {
    int difference = subtract(10, 4);
    printf("Difference: %d\\n", difference);
    return 0;
}`,
            7: `#include <stdio.h>

int divide(int a, int b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("Division by zero error!\\n");
        return 0;
    }
}

int main() {
    int quotient = divide(20, 4);
    printf("Quotient: %d\\n", quotient);
    return 0;
}`,
            8: `#include <stdio.h>

int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    int fact = factorial(5);
    printf("Factorial: %d\\n", fact);
    return 0;
}`,
            9: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    printf("Before swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\\n", x, y);
    return 0;
}`,
            10: `#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    printArray(arr, 5);
    return 0;
}`
        };

// Function to display code examples
function showCodeExample(exampleNumber) {
    const code = examples[exampleNumber] || '// Example not found.';
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    document.getElementById('code-example').innerHTML = `<pre><code class="language-c">${escaped}</code></pre>`;
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}