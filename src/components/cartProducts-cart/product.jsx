import { useState } from "react";
import cartData from "../../cartData";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function CartProducts() {
    const [data, setData] = useState(cartData)
    return (
        <div className="cart-products-container w-full h-full">
            <table className=" w-full h-auto">
                <thead>
                    <tr className=" border border-gray-300">
                        <th className=" w-[40%] text-center">نام کالا</th>
                        <th className=" text-center">قیمت</th>
                        <th className=" text-center">تعداد</th>
                        <th className=" text-center">قیمت نهایی</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return (
                                <tr key={i} className="border border-gray-300 h-12">
                                    <td className=" flex items-center justify-center h-full">
                                        <img className=" w-28" src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </td>
                                    <td className=" text-center">
                                        <span>{item.price}</span>
                                    </td>
                                    <td className=" text-center">
                                        <div className=" flex items-center w-full justify-center gap-3">
                                            <button><FiPlus /></button>
                                            <span>{item.quentity}</span>
                                            <button><FiMinus /></button>
                                        </div>
                                    </td>
                                    <td className=" text-center">
                                        <span>{item.quentity * item.price}</span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CartProducts;