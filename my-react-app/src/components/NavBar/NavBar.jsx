import React from 'react';
import {Link} from 'react-router-dom';
let NavBar =()=>{
    return(
        <>
       <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
<div className="container">
    <Link to={'/'}className="navbar-brand">
   <i className="fa fa-mobile text-warning"/><span className="text-warning"/>
    Contact Management</Link>

   

</div>
       </nav>
        </>

    );
}
export default NavBar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Navbar</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/contacts/list">Contact List</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
