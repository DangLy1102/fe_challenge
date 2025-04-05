
Promise trong JavaScript là một đối tượng đại diện cho một thao tác bất đồng bộ có thể hoàn thành thành công (resolve) hoặc thất bại (reject) trong tương lai.
Promisse thường được dùng để tránh callback hell

Cấu trúc: 

const promise = new Promise(function(resolve, reject) {
    // Thao tác bất đồng bộ tại đây
    // Nếu thành công:
    //     resolve(kết_quả);
    // Nếu thất bại:
    //     reject(lỗi);
});

Sử dụng:

 promise
    .then(result => {
        console.log("Thành công:", result);
    })
    .catch(error => {
        console.error("Thất bại:", error);
    });

//Hướng dẫn chạy chương trình, kiểm tra kết quả trên console log của trang web, đặt các giá trị trong mảng để thấy các trường hợp khác nhau.