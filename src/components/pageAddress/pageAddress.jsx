import { Link } from "react-router-dom";


function PageAddress(props) {
    return (
        <div>
            <Link to={"/"}>{props?.mainPage} </Link>
            <span>{"<"}</span>
            <Link to={"/products"}> {props?.currentPage}</Link>
        </div>
    );
}

export default PageAddress;