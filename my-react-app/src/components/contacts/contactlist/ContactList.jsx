// // import React from 'react';
// // import { Link } from "react-router-dom";

// // let ContactList = () => {
// //     return (
// //         <>
// //             <section className="contact-search p-5">
// //                 <div className="container">
// //                     <div className="grid">
// //                         <div className="row">
// //                             <div className="col">
// //                                 <p className="h3">Contact Manager
// //                                 <Link to="/contacts/add" className='btn btn-primary ms-2'>
// //                                     <i className="fa fa-plus-circle me-2"></i>
// //                                     New
// //                                 </Link>
// //                                 <p className="fst-italic">hi welcome to contact management</p>
// //                                 </p>
// //                             </div>
// //                         </div>
// //                         <div className="row">
// //                             <div className="col-md-6">
// //                                 <form className="row">
// //                                     <div className="col">
// //                                     <div className="mb-2">
// //                                         <input type="text" className="form-control" placeholder="search names"/>
// //                                     </div>

// //                                     </div>
// //                                     <div className="col">
// //                                     <div className='mb-2'>
// //                                     <input type="submit" className="btn btn-outline-dark" value="search"/>
// //                                     </div>

// //                                     </div>
                                    
                                    



// //                                 </form>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //             <section className="contact-list">
// //                 <div className="container">
// //  <div className="row"><div className="col-md-6">
// //  <div className="card">
 

// //  <div className="card-body">
// //  <div className="row align-item center">
    
// //  <div className="col-md-4">
// //     <img src="https://cdn-icons-png.freepik.com/512/7718/7718888.png" alt=""className="contact-img"/>
// //     </div>
    
// //     <div className="col-md-7">
// //         <ul className="list-group">
            
// //         <li className="list-group-item list-group-item-action">
// //                 Name :   <span className="fw-bold">Jayavarshini</span>

// //             </li>
// //             <li className="list-group-item list-group-item-action">
// //             Mobile :   <span className="fw-bold">8903036541</span>

// //             </li>
// //             <li className="list-group-item list-group-item-action">
// //                 Email :   <span className="fw-bold">Jayavarshini@gmail.com</span>

// //             </li>
// //         </ul>
// //     </div><div className="col-md-1">
// //     </div>

// //     </div>
    
 
// //  </div>
// //  </div>
// //                 </div>
                
// //  </div>
// //                 </div>

// //             </section>
// //         </>
// //     );
// // }

// // export default ContactList;
// import React from 'react';
// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import ContactService from './services/ContactService';




// let ContactList = () => {
//     let[state,setState]=useState(initialState:{
//           loading:false,
//           contacts : [],
//           errorMessage : ''

//     });
//     useEffect(effect:async ()=>{
//         try{
//             let response =await ContactService.getAllContacts();
//           console.log(response.data);
      
//         }
//         catch(error){

//         }

//     },inputs: []);
//     return (
//         <>
//             <section className="contact-search p-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 fw-bold">
//                                 Contact Manager
//                                 <Link to="/contacts/add" className='btn btn-primary ms-2'>
//                                     <i className="fa fa-plus-circle me-2"></i>
//                                     New
//                                 </Link>
//                             </p>
//                             <p className="fst-italic">Hi, welcome to contact management</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <form className="row">
//                                 <div className="col">
//                                     <div className="mb-2">
//                                         <input type="text" className="form-control" placeholder="Search names"/>
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className='mb-2'>
//                                         <input type="submit" className="btn btn-outline-dark" value="Search"/>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="contact-list">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <div className="row align-items-center d-flex jsutify-content-around">
//                                         <div className="col-md-4">
//                                             <img src="https://cdn-icons-png.freepik.com/512/7718/7718888.png" alt="Contact" className="contact-img img-fluid"/>
//                                         </div>
//                                         <div className="col-md-7">
//                                             <ul className="list-group">
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Name: <span className="fw-bold">Jayavarshini</span>
//                                                 </li>
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Mobile: <span className="fw-bold">8903036541</span>
//                                                 </li>
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Email: <span className="fw-bold">Jayavarshini@gmail.com</span>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                         <div className="col-md-1 d-flex flex-column align-items-center">
//                                             <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
//                                                 <i className="fa fa-eye"></i>
//                                             </Link>
//                                             <Link to={'/contacts/edit/:contactid'} className="btn btn-primary my-1">
//                                                 <i className="fa fa-pen"></i>
//                                             </Link>
//                                             <button className="btn btn-danger my-1">
//                                                 <i className="fa fa-trash"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
                            
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <div className="row align-items-center d-flex jsutify-content-around">
//                                         <div className="col-md-4">
//                                             <img src="https://cdn-icons-png.freepik.com/512/7718/7718888.png" alt="Contact" className="contact-img img-fluid"/>
//                                         </div>
//                                         <div className="col-md-7">
//                                             <ul className="list-group">
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Name: <span className="fw-bold">Jayavarshini</span>
//                                                 </li>
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Mobile: <span className="fw-bold">8903036541</span>
//                                                 </li>
//                                                 <li className="list-group-item list-group-item-action">
//                                                     Email: <span className="fw-bold">Jayavarshini@gmail.com</span>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                         <div className="col-md-1 d-flex flex-column align-items-center">
//                                             <Link to={'/contacts/view/:contactId'} className="btn btn-warning my-1">
//                                                 <i className="fa fa-eye"></i>
//                                             </Link>
//                                             <Link to={'/contacts/edit/:contactid'} className="btn btn-primary my-1">
//                                                 <i className="fa fa-pen"></i>
//                                             </Link>
//                                             <button className="btn btn-danger my-1">
//                                                 <i className="fa fa-trash"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
                            
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default ContactList;


// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// // import ContactService from './services/ContactService'; // Adjust the import path based on your project structure
// import { ContactService } from '../../../services/ContactService';
// let ContactList = () => {
//     const [state, setState] = useState({
//         loading: false,
//         contacts: [],
//         errorMessage: ''
//     });

//     useEffect(() => {
//         const fetchContacts = async () => {
//             setState({ ...state, loading: true });
//             try {
//                 let response = await ContactService.getAllContacts();
//                 console.log(response.data);
//                 setState({
//                     ...state,
//                     loading: false,
//                     contacts: response.data
//                 });
//             } catch (error) {
//                 setState({
//                     ...state,
//                     loading: false,
//                     errorMessage: 'Something went wrong. Please try again later.'
//                 });
//             }
//         };

//         fetchContacts();
//     }, []);

//     return (
//         <>
//             <section className="contact-search p-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 fw-bold">
//                                 Contact Manager
//                                 <Link to="/contacts/add" className='btn btn-primary ms-2'>
//                                     <i className="fa fa-plus-circle me-2"></i>
//                                     New
//                                 </Link>
//                             </p>
//                             <p className="fst-italic">Hi, welcome to contact management</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <form className="row">
//                                 <div className="col">
//                                     <div className="mb-2">
//                                         <input type="text" className="form-control" placeholder="Search names" />
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className='mb-2'>
//                                         <input type="submit" className="btn btn-outline-dark" value="Search" />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="contact-list">
//                 <div className="container">
//                     <div className="row">
//                         {state.contacts.map(contact => (
//                             <div className="col-md-6" key={contact.id}>
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <div className="row align-items-center d-flex justify-content-around">
//                                             <div className="col-md-4">
//                                                 <img src="https://cdn-icons-png.freepik.com/512/7718/7718888.png" alt="Contact" className="contact-img img-fluid" />
//                                             </div>
//                                             <div className="col-md-7">
//                                                 <ul className="list-group">
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Name: <span className="fw-bold">{contact.name}</span>
//                                                     </li>
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Mobile: <span className="fw-bold">{contact.mobile}</span>
//                                                     </li>
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Email: <span className="fw-bold">{contact.email}</span>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <div className="col-md-1 d-flex flex-column align-items-center">
//                                                 <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
//                                                     <i className="fa fa-eye"></i>
//                                                 </Link>
//                                                 <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
//                                                     <i className="fa fa-pen"></i>
//                                                 </Link>
//                                                 <button className="btn btn-danger my-1">
//                                                     <i className="fa fa-trash"></i>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default ContactList;




// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { ContactService } from '../../../services/ContactService'; // Adjust the import path based on your project structure

// let ContactList = () => {
//     const [state, setState] = useState({
//         loading: false,
//         contacts: [],
//         errorMessage: ''
//     });

//     useEffect(() => {
//         const fetchContacts = async () => {
//             setState({ ...state, loading: true });
//             try {
//                 let response = await ContactService.getAllContacts();
//                 console.log(response.data); // Log the fetched data to the console
//                 setState({
//                     ...state,
//                     loading: false,
//                     contacts: response.data
//                 });
//             } catch (error) {
//                 console.error('Error fetching contacts:', error); // Log any errors to the console
//                 setState({
//                     ...state,
//                     loading: false,
//                     errorMessage: 'Something went wrong. Please try again later.'
//                 });
//             }
//         };

//         fetchContacts();
//     }, []);

//     return (
//         <>
//             <section className="contact-search p-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 fw-bold">
//                                 Contact Manager
//                                 <Link to="/contacts/add" className='btn btn-primary ms-2'>
//                                     <i className="fa fa-plus-circle me-2"></i>
//                                     New
//                                 </Link>
//                             </p>
//                             <p className="fst-italic">Hi, welcome to contact management</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <form className="row">
//                                 <div className="col">
//                                     <div className="mb-2">
//                                         <input type="text" className="form-control" placeholder="Search names" />
//                                     </div>
//                                 </div>
//                                 <div className="col">
//                                     <div className='mb-2'>
//                                         <input type="submit" className="btn btn-outline-dark" value="Search" />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="contact-list">
//                 <div className="container">
//                     <div className="row">
//                         {state.contacts.map(contact => (
//                             <div className="col-md-6" key={contact.id}>
//                                 <div className="card my-2">
//                                     <div className="card-body">
//                                         <div className="row align-items-center d-flex justify-content-around">
//                                             <div className="col-md-4">
//                                                 <img src={contact.photo} className="contact-img img-fluid" />
//                                             </div>
//                                             <div className="col-md-7">
//                                                 <ul className="list-group">
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Name: <span className="fw-bold">{contact.name}</span>
//                                                     </li>
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Mobile: <span className="fw-bold">{contact.mobile}</span>
//                                                     </li>
//                                                     <li className="list-group-item list-group-item-action">
//                                                         Email: <span className="fw-bold">{contact.email}</span>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                             <div className="col-md-1 d-flex flex-column align-items-center">
//                                                 <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
//                                                     <i className="fa fa-eye"></i>
//                                                 </Link>
//                                                 <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
//                                                     <i className="fa fa-pen"></i>
//                                                 </Link>
//                                                 <button className="btn btn-danger my-1">
//                                                     <i className="fa fa-trash"></i>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default ContactList;


 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService'; // Adjust the import path based on your project structure

const ContactList = () => {

    let [query, setQuery] = useState({
        text: ''
    });
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        filteredContacts: [],
        errorMessage: ''
    });

    useEffect(() => {
        const fetchContacts = async () => {
            setState({ ...state, loading: true });
            try {
                const response = await ContactService.getAllContacts();
                console.log(response.data); // Log the fetched data to the console
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filteredContacts: response.data
                });
            } catch (error) {
                console.error('Error fetching contacts:', error); // Log any errors to the console
                setState({
                    ...state,
                    loading: false,
                    errorMessage: 'Something went wrong. Please try again later.'
                });
            }
        };

        fetchContacts();
    }, []);

    let clickDelete = async (contactId) => {
        try {
            let response = await ContactService.deleteContact(contactId);
            if (response) {
                const response = await ContactService.getAllContacts();
                console.log(response.data); // Log the fetched data to the console
                setState({
                    ...state,
                    loading: false,
                    contacts: response.data,
                    filteredContacts: response.data
                });
            }
        } catch (error) {
            console.error('Error deleting contact:', error); // Log any errors to the console
            setState({
                ...state,
                loading: false,
                errorMessage: 'Something went wrong. Please try again later.'
            });
        }
    }

    let handleInputChange = (event) => {
        setQuery({ ...query, text: event.target.value });
    }

    let searchContacts = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        let theContacts = state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(query.text.toLowerCase())
        });
        setState({
            ...state,
            filteredContacts: theContacts
        });
    }

    const { loading, filteredContacts, errorMessage } = state;

    return (
        <>
            <section className="contact-search p-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">
                                Contact Manager
                                <Link to="/contacts/add" className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-2"></i>
                                    New
                                </Link>
                            </p>
                            <p className="fst-italic">Hi, welcome to contact management</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row" onSubmit={searchContacts}>
                                <div className="col">
                                    <div className="mb-2">
                                        <input
                                            name="text"
                                            value={query.text}
                                            onChange={handleInputChange} type="text" className="form-control" placeholder="Search names" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {loading && <p>Loading...</p>}
                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                        {filteredContacts.map(contact => (
                            <div className="col-md-6" key={contact.id}>
                                <div className="card my-2">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src={contact.photo} alt="contact" className="contact-img img-fluid" />
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-action">
                                                        Name: <span className="fw-bold">{contact.name}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Mobile: <span className="fw-bold">{contact.mobile}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Email: <span className="fw-bold">{contact.email}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                    <i className="fa fa-eye"></i>
                                                </Link>
                                                <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
                                                    <i className="fa fa-pen"></i>
                                                </Link>
                                                <button className="btn btn-danger my-1" onClick={() => clickDelete(contact.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactList;
