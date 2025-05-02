function CategoryHome() {
    const catItems = [{img : "../../images/cat1.png" , text : "پرسینگ"},{img : "../../images/cat2.png" , text : "ساعت مچی"},{img : "../../images/cat3.png" , text : "حلقه ازدواج"},{img : "../../images/cat4.png" , text : "دستبند"},{img : "../../images/cat5.png" , text : "گردنبند"},{img : "../../images/cat6.png" , text : "تاج"},]
    return (
        <div className="category w-full h-auto">
            <div className="category-container w-full h-auto flex items-center justify-center lgmax:justify-start gap-5 py-4 overflow-auto">
                {
                    catItems.map((item, i) => {
                        return (
                            <div key={i} className="cat-item min-w-44 h-56 flex flex-col justify-center items-center border rounded-3xl">
                                <img src={item.img} alt={item.text}/>
                                <span className=" text-slate-500">{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CategoryHome;