const BlogCategory =[
    {
        id: 1,
        name: "Breakfast"
    },
    {
        id: 2,
        name: "Vegan"
    },
    {
        id: 3,
        name: "Meat"
    },
    {
        id: 4,
        name: "Dessert"
    },
    {
        id: 5,
        name: "Lunch"
    },
    {
        id: 6,
        name: "Chocolate"
    }
]
const Blog =[
    {
        id: 1,
        tiltle: "Bún mắm Sài Gòn",
        image :"src/img/blog/Image1.jpg",
        content: "Ăn tối ngon ở Sài Gòn còn có gì? Hãy thử món bún mắm. Đây là một món ăn của miền Tây miệt. Bún mắm với hương vị rất đặc trưng ít nơi nào có được, tạo nên một mùi thơm đậm đà và lôi cuốn thực khách. Nước dùng làm từ mắm cá linh, cá sặc và được dùng chung với bún. Ngoài ra, người ta thường cho thêm các loại rau để tăng hương vị cho món ăn như: rau muống chẻ, bắp chuối, giá, bông súng… ",
        blogCateId: 1
    },
    {
        id: 2,
        tiltle: "Bánh cuốn cao bằng",
        image: "src/img/blog/Image2.jpg",
        content: "Lần đầu tiên ăn món này do xem trên clip Stream đến bao giờ của Độ Mixi và clip review nhà Độ của Linh Ngọc Đàm nên cũng tò mò ăn thử xem thế nào và thấy đúng là với lời cảnh cáo của Độ trong clip của Linh là món này đúng là có vị nhạt nên cần phải thêm mắm với ớt bởi do khác cách làm với bánh cuốn ở đồng bằng bởi món này là bánh cuốn ăn với nước xương",
        blogCateId: 2
    },
    {
        id: 3,
        tiltle: "Streetfood",
        image: "src/img/blog/Image3.jpg",
        content: "Streetfood đang có một số lợi thế nhất định so với fastfood như Hợp với khẩu vị người Việt, hợp với túi tiền của những người trẻ đặc biệt là học sinh sinh viên, đáp ứng được sự nhanh hơn với fastfood (phải đến các cửa hàng order và chờ đợi), đồng thời cũng đáp ứng được nhu cầu tụ tập bạn bè của giới trẻ và có hình ảnh gần gũi, tự do, bình dân so với sự sang chảnh, sành điệu của Fastfood",
        blogCateId: 3
    },
    {
        id: 4,
        tiltle: "Phở gà",
        image: "src/img/blog/Image4.jpg",
        content: "nếu so sánh với phở gà thì ở thời điểm hiện tại sự tin cậy cũng không cao. Đã có một cuộc thống kê của cơ quan chức năng về thực phẩm và thấy nhiều hàng phở bò đều không dùng... thịt bò, mà là thịt trâu hoặc thịt lợn sề. Và một người hay ăn vặt như tôi, cũng vì cái “tội”thích khám phá ẩm thực mà đã có lần nửa khóc nửa cười vì ăn phải bát phở thịt lợn sề tanh lợm",
        blogCateId: 4
    },
    {
        id: 5,
        tiltle: "Bún hải sản",
        image: "src/img/blog/Image5.jpg",
        content: "Bún hải sản Hạ Long được chế biến sẽ có tôm, thịt ghẹ, mực, bề bề, chả cá, rau cải hoặc rau cần ăn kèm. Và thứ tạo nên sự ngon tuyệt vời của món ăn này chính là vị ngọt của nướclèo do những người dân địa phương sáng chế mà du khách khó có thể nào tìm thấy ở bất kì nơi nào khác. Thưởng thức một tô bún hải sản đầy ắp vào một buổi sáng sớm sẽ vô cùng tuyệt vời để du khách có thể bắt đầu một ngày mới khám phá trọn vẹn Hạ Long.",
        blogCateId: 5
    },
    {
        id: 6,
        tiltle: "Bún riêu cua",
        image: "src/img/blog/Image6.jpg",
        content: "Cắn vào miếng đậu hũ ráng vàng ruộm, óng mỡ hay miếng gạch cua bùi bùi, bạn sẽ không khỏi xuýt xoa trước vị chua ngọt và thơm cay từ món ăn. Bún riêu cua là món ăn dân dã, có vị chua thanh, ăn mùa hè rất mát nên được nhiều người ưa thích, kể cả khách du lịch nước ngoài. Có nhiều hàng bán bún riêu trên các đường phố từ Nam tới Bắc, mỗi nơi một hương vị riêng đọng lại từ cảm nhận của thực khách. Nhưng bún riêu cua ở Sài Gòn vẫn mang nét đặc trưng, không lẫn vào đâu được bởi nó là sự tổng hòa hương vị của nhiều nơi.",
        blogCateId: 6
    }
]
console.log(Blog);
console.log(BlogCategory);
function showContent(data){
    const contentProduct = document.querySelector(".content-products");
    console.log(contentProduct);
    if(contentProduct){
        contentProduct.innerHTML =""
        for (let item of data) {
            contentProduct.innerHTML += `
            <div class="product">
            <img src="${item.image}" alt="">
            <p>${item.tiltle}</p>
            <span>${item.content}</span>
        </div>
            `
        }
    }
}
showContent(Blog);
function showMenu(){
    const listprd = document.querySelector("#menu");
    console.log(listprd);
    if(listprd){
        listprd.innerHTML ="";
        for (let item of BlogCategory) {
            listprd.innerHTML += `
            <li><a href="blog.html?id=${item.id}">${item.name}</a></li>
            `
        }
    }
}
showMenu();
function render(){
    const blogId = new URLSearchParams(window.location.search).get("id");
    console.log(blogId);
    const PrdId = Blog.filter(function(e){
        return e.id == blogId;
    })
    if(blogId){
        showContent(PrdId);
    }else{
        showContent(Blog)
    }
}
render();