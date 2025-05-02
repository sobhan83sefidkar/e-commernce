import "./product.css"
import { GoCommentDiscussion } from "react-icons/go";
import { FaStar } from "react-icons/fa6";


function ProductComment() {
    const comments = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="product-comment w-full h-auto">
            <div className="product-comment-container w-full h-full">
                <div className=" flex items-center justify-center py-3">
                    <div className="comment-title flex items-center gap-2 relative">
                        <GoCommentDiscussion size={25} />
                        <h2 className="  text-2xl">
                            نظرات مشتریان
                        </h2>
                    </div>
                </div>
                <div className="comment-section my-5 ">
                    <div className="comment-input mx-4 border border-gray-300 smmax:mx-3">
                        <form className=" p-5">
                            <div className=" flex items-center justify-between">
                                <span>کیفیت :</span>
                                <div className="rating">
                                    <input type="radio" id="star5" name="rating" value="5" />
                                    <label for="star5"></label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label for="star4"></label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label for="star3"></label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label for="star2"></label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label for="star1"></label>
                                </div>
                            </div>
                            <div className=" flex flex-col">
                                <span>نظر شما :</span>
                                <textarea className=" h-[200px] p-1 rounded-md border border-gray-300" name="comment" id="" minLength={3} maxLength={100} placeholder="نظرتان را تایپ کنید..."></textarea>
                            </div>
                            <div className=" my-4 flex justify-end">
                                <button onClick={(e) => e.preventDefault()} className=" send-comment">
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>ارسال</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="show-comment rounded-md">
                        <div className=" w-full h-full max-h-[500px] overflow-y-auto ">
                            {
                                comments.map((item, i) => {
                                    return (
                                        <div key={i} className="comment-item w-full h-auto p-3">
                                            <div className=" w-full h-full relative p-1 px-5 border-r-[1px] border-gray-400">
                                                <div className=" flex items-center gap-3">
                                                    <img className="w-10" src="../../images/userprofile.png" alt="" />
                                                    <span>سبحان سفیدکار</span>
                                                </div>
                                                <div>
                                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                </div>
                                                <div className=" flex items-center">
                                                    <span>4</span>
                                                    <FaStar size={25} fill="gold" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductComment;