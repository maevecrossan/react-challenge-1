import css from "./css/Sidebar.module.css"

const Sidebar = () => <div className={css.sidebar}> 
    <a href = "#." target= "_blank">My Photos</a> 
    <a href = "#." target= "_blank">My Illustrations</a> 
    <a href = "#." target= "_blank">My Paintings</a> 
    </div>

// Vanilla JS
// function Sidebar() {
//     return (
//         <div>
//             <a href = "#." target= "_blank">My Photos</a>
//             <a href = "#." target= "_blank">My Illustrations</a>
//             <a href = "#." target= "_blank">My Paintings</a>
//         </div>
//     )
// }

export default Sidebar