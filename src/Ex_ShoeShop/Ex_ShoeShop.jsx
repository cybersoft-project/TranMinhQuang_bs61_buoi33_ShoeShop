import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ListShoe from "./ListShoe";
import CardModal from "./CardModal";
import { useParams } from "react-router-dom";

const Ex_ShoeShop = () => {
    const {id} = useParams();
    console.log('param', id);
    
    let [isOpen, setIsOpen] = useState(false);
    const arrShoe = [
        {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
        },
        {
            id: 2,
            name: "Adidas Prophere Black White",
            alias: "adidas-prophere-black-white",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 990,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
        },
        {
            id: 3,
            name: "Adidas Prophere Customize",
            alias: "adidas-prophere-customize",
            price: 375,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 415,
            image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
        },
        {
            id: 4,
            name: "Adidas Super Star Red",
            alias: "adidas-super-star-red",
            price: 465,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 542,
            image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
        },
        {
            id: 5,
            name: "Adidas Swift Run",
            alias: "adidas-swift-run",
            price: 550,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 674,
            image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
        },
        {
            id: 6,
            name: "Adidas Tenisky Super Star",
            alias: "adidas-tenisky-super-star",
            price: 250,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 456,
            image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
        },
        {
            id: 7,
            name: "Adidas Ultraboost 4",
            alias: "adidas-ultraboost-4",
            price: 450,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 854,
            image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
        },
        {
            id: 8,
            name: "Adidas Yeezy 350",
            alias: "adidas-yeezy-350",
            price: 750,
            description:
                "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription:
                "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 524,
            image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
        },
        {
            id: 9,
            name: "Nike Adapt BB",
            alias: "nike-adapt-bb",
            price: 630,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 599,
            image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
        },
        {
            id: 10,
            name: "Nike Air Max 97",
            alias: "nike-air-max-97",
            price: 650,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 984,
            image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
        },
        {
            id: 11,
            name: "Nike Air Max 97 Blue",
            alias: "nike-air-max-97-blue",
            price: 450,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 875,
            image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
        },
        {
            id: 12,
            name: "Nike Air Max 270 React",
            alias: "nike-air-max-270-react",
            price: 750,
            description:
                "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            shortDescription: "Paul George is the rare high-percentage shooter",
            quantity: 445,
            image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
        },
    ];

    const [arrCart, setArrCart] = useState([]);

    function addShoeCart(shoe) {
        //chia thành 2 trường hợp để xử lí khi nhận giày
        //Th1: Khi đôi giày nvuowif dùng chọn chưa có trong arCart, thêm giày vào arCart và tạo một thuộc tính total quan lí sốl luọng người dùng chọn
        //TH2: khi đôi giày đã có trong giỏ hàngm thì sẽ thực hiện tăng giá trị mà thuộc tính total đang lưu trữ liên thêm một đơn vị
        // Kiem tra phan tu shoe co trong mang hay khong
        let check = arrCart.findIndex((item) => {
            return item.id == shoe.id;
        })

        let newArrCart = [...arrCart]
        if (check == -1) {
            //trường hợp khi chưa có sản phẩm trong giỏ hàng
            newArrCart.push({ ...shoe, total: 1 });
            setArrCart(newArrCart)
        }
        else {
            newArrCart[check].total += 1;
            setArrCart(newArrCart);
        }

    }
    function deleteShoeCart(shoeID) {
        let index = arrCart.findIndex((item) => {
            return item.id == shoeID
        })
        if (index != -1) {
            let newArrCart = [...arrCart];
            newArrCart.splice(index, 1);
            setArrCart(newArrCart);
        }
    }
    function updateTotalShoeCart(type, shoeID) {
        //Kiem tra total neu luc tru total di ma total thi se xoa phan tu sua      
        let index = arrCart.findIndex((item) => {
            return item.id == shoeID
        });
        if (index != -1) {
            let newArrCart = [... arrCart]

            let value = type == "plus" ? 1 : -1;
            if (value==-1 && newArrCart[index].total==1) {
                deleteShoeCart(newArrCart[index].id);
            }
            else{
                newArrCart[index].total += value;
                setArrCart(newArrCart);
            }

        }
    }
    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div className="container mx-auto py-10">
            <h1 className="font-bold text-3xl text-center">Bài tập danh sách giày</h1>

            {/* Gio hang */}
            <div className="shoe_cart">
                <button
                    onClick={openModal}
                    className="py-3 px-5 text-white bg-orange-500 rounded-md"
                >
                    Giỏ hàng <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
            {/* danh sach giay */}
            <ListShoe listShoe={arrShoe} addShoeCart={addShoeCart} openModal={openModal} />
            {/* Yeu cau  thu hien quan li modal hien thi danh sach san pham da chon mua thong qua component cardMo */}
            <CardModal listShoe={arrShoe} isOpen={isOpen} closeModal={closeModal} arrCart={arrCart} deleteShoeCart={deleteShoeCart} updateTotalShoeCart={updateTotalShoeCart} />
            {/* modal hien thi gio hang */}

        </div>
    );
};

export default Ex_ShoeShop;
