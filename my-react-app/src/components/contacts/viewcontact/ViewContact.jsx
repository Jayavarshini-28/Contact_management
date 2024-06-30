// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { ContactService } from '../../../services/ContactService'; // Adjust the import path based on your project structure

// const ViewContact = () => {
//     const { contactId } = useParams();
//     const [state, setState] = useState({
//         loading: false,
//         contact: {},
//         errorMessage: '',
//         group : {}
//     });

//     useEffect(() => {
//         const fetchContact = async () => {
//             setState({ ...state, loading: true });
//             try {
//                 const response = await ContactService.getContact(contactId);
//                 const groupresponse=await ContactService.getGroup(response.data);
//                 console.log(response.data); // Log the fetched data to the console
//                 setState({
//                     ...state,
//                     loading: false,
//                     contact: response.data,
//                     group:groupResponse.data,
//                 });
//             } catch (error) {
//                 console.error('Error fetching contact:', error); // Log any errors to the console
//                 setState({
//                     ...state,
//                     loading: false,
//                     errorMessage: 'Something went wrong. Please try again later.'
//                 });
//             }
//         };

//         fetchContact();
//     }, [contactId]);

//     const { loading, contact, errorMessage,group } = state;

//     return (
//         <>
//             <section className="view-contact-intro p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-warning fw-bold">View Contact</p>
//                             <p className="fst-italic">Hello! Welcome to view contact</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="view-contact mt-3">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-md-4">
//                             <img src={contact.photo} alt="" className="contact-img" />
//                         </div>
//                         <div className="col-md-8">
//                             <ul className="list-group">
//                                 <li className="list-group-item list-group-item-action">
//                                     Name: <span className="fw-bold">{contact.name}</span>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action">
//                                     Mobile: <span className="fw-bold">{contact.mobile}</span>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action">
//                                     Email: <span className="fw-bold">{contact.email}</span>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action">
//                                     Company: <span className="fw-bold">{contact.company}</span>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action">
//                                     Title: <span className="fw-bold">{contact.title}</span>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action">
//                                     Group: <span className="fw-bold">{contact.group}</span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                             <Link to={'/contacts/list'} className="btn btn-warning ms-2">Back</Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default ViewContact;


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';

const ViewContact = () => {
    const { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
        group: {}
    });

    useEffect(() => {
        const fetchContact = async () => {
            setState({ ...state, loading: true });
            try {
                const response = await ContactService.getContact(contactId);
                const groupResponse = await ContactService.getGroup(response.data);
                console.log(response.data); // Log the fetched data to the console
                setState({
                    ...state,
                    loading: false,
                    contact: response.data,
                    group: groupResponse.data,
                });
            } catch (error) {
                console.error('Error fetching contact:', error); // Log any errors to the console
                setState({
                    ...state,
                    loading: false,
                    errorMessage: 'Something went wrong. Please try again later.'
                });
            }
        };

        fetchContact();
    }, [contactId]);

    const { loading, contact, errorMessage, group } = state;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (errorMessage) {
        return <p className="text-danger">{errorMessage}</p>;
    }

    return (
        <>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Hello! Welcome to view contact</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={contact.photo} alt="" className="contact-img" />
                        </div>
                        <div className="col-md-8">
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
                                <li className="list-group-item list-group-item-action">
                                    Company: <span className="fw-bold">{contact.company}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Title: <span className="fw-bold">{contact.title}</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group: <span className="fw-bold">{group.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning ms-2">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewContact;
