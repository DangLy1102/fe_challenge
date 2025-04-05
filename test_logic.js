function processWithDelay(numbers) {
    return new Promise((resolve, reject) => {
        /* Kiểm tra đầu vào */
        if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
            return reject(new Error("Invalid input: Must be an array of numbers."));
        }

        /* Nếu mảng rỗng, resolve ngay lập tức */
        if (numbers.length === 0) {
            return resolve("No numbers to process.");
        }

        /*Hàm delay dùng Promise */
        function delay(ms) {
            return new Promise(res => setTimeout(res, ms));
        }

        /* Hàm xử lý từng số với delay */
        async function processNumbers() {
            for (const num of numbers) {
                await delay(1000); // sleep 1 giây
                console.log(num);
            }
            resolve("All numbers processed");
        }

        /* Gọi hàm xử lý */
        processNumbers().catch(reject);
    });
}

// Ví dụ chạy thử
processWithDelay([1, 2, 3, 4, 5])
    .then(message => console.log(message))
    .catch(error => console.error(error.message));
function processWithDelay(numbers) {
    return new Promise((resolve, reject) => {
        /* Kiểm tra đầu vào */
        if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
            return reject(new Error("Invalid input: Must be an array of numbers."));
        }

        /* Nếu mảng rỗng, resolve ngay lập tức */
        if (numbers.length === 0) {
            return resolve("No numbers to process.");
        }

        /*Hàm delay dùng Promise */
        function delay(ms) {
            return new Promise(res => setTimeout(res, ms));
        }

        /* Hàm xử lý từng số với delay */
        async function processNumbers() {
            try {
                for (const num of numbers) {
                    await delay(1000); // sleep 1 giây
                    console.log(num);
                }
                resolve("All numbers processed");
            } catch (error) {
                reject(error);
            }
        }

        /* Gọi hàm xử lý */
        processNumbers();
    });
}

// Ví dụ chạy thử
processWithDelay([1, 2, 3, 4, 5])
    .then(message => console.log(message))
    .catch(error => console.error(error.message));