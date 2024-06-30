// import React from 'react';
// import { Link ,useParams} from 'react-router-dom';
// let EditContact =()=>{
//     let {contactId}=useParams();
//     let[state,stState]=useState(initialState:{
//         loading:false,
//         contact:{
//             name :'',
//             photo:'',
//             mobile:'',
//             email:'',
//             company:'',
//             title:'',
//             groupId:''

//         },
//         groups:[],
//         errorMessage:''

//     });
//     useEffect(a:async()=>{
//         try{
//             setState(value{...state,loading:false});
//             let response=await ContactService.getContact(contactId);
//             setState(value{
//                 ...state,
//                 loading:false,
//                 contact:response.data
//             })
        
//         }
    
//         catch(error){
//             setState(value:{
//                 ...state,
//                 loading:false,
//                 errorMessage:error.message
//             });

//         }


//     },input[contactId]);
//     let {loading,contact,groups,errorMessage}=state;

//     return(
//         <>
//         <section className="add-contact p-3">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <p className="h4 text-primary fw-bold">Edit Contact</p>
//                     <p className="fst-italic"> welocme to create contact!</p>
//                     </div>
//                 </div>
//                 <div className="row align-items-center">
//                     <div className="col-md-4">
//                         <form>
//                             <div className="mb-2">
//                                 <input type="text" className="form-control" placeholder="Name"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input type="text" className="form-control" placeholder="Photo url"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input type="number" className="form-control" placeholder="Mobile"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input type="text" className="form-control" placeholder="Email"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input type="text" className="form-control" placeholder="Company"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input type="text" className="form-control" placeholder="Title"/>
//                             </div>
//                             <div className="mb-2">
//                                 <select className="form-control">
//                                     <option value="">select a Group</option>

//                                 </select>
                               
//                             </div>
//                             <div className="mb-2">
//                                 <input type="Submit" className="btn btn-success" value="Update"/>
//                             <Link to={'/contacts/list'} className="btn btn-primary ms-2">Cancel
//                             </Link>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="col-md-6">
//                         <img src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt=""className=" contact-img img-fluid"/>

//                     </div>
//                 </div>
//             </div>

//         </section>
        
//         </>
//     );
// }
// export default EditContact;
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {ContactService} from '../../../services/ContactService'; // Adjust the import according to your project structure

const EditContact = () => {
    let navigate = useNavigate();
    let { contactId } = useParams();
    const [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: ''
        },
        groups: [],
        errorMessage: ''
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                setState((prevState) => ({ ...prevState, loading: true }));
                let response = await ContactService.getContact(contactId);
                let groupResponse = await ContactService.getGroups();
                setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    contact: response.data,
                    groups: groupResponse.data
                }));
            } catch (error) {
                setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    errorMessage: error.message
                }));
            }
        };

        fetchContact();
    }, [contactId]); // Dependency array to fetch contact on contactId change

    const updateInput = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }));
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.updateContact(state.contact, contactId);
            if (response) {
                navigate('/contacts/list', { replace: true });
                console.log('Contact updated successfully');
            }
        } catch (error) {
            setState((prevState) => ({
                ...prevState,
                errorMessage: error.message
            }));
            navigate(`/contacts/edit/${contactId}`, { replace: false });
        }
    };

    const { loading, contact, groups, errorMessage } = state;

    return (
        <>
            <section className="edit-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Welcome to edit contact!</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        name="photo"
                                        value={contact.photo}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Photo URL"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Mobile"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={contact.email}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        name="company"
                                        value={contact.company}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        name="title"
                                        value={contact.title}
                                        onChange={updateInput}
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                                <div className="mb-2">
                                    <select
                                        name="groupId"
                                        value={contact.groupId}
                                        onChange={updateInput}
                                        className="form-control"
                                    >
                                        <option value="">Select a Group</option>
                                        {groups.map((group) => (
                                            <option key={group.id} value={group.id}>
                                                {group.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Update" />
                                    <Link to={'/contacts/list'} className="btn btn-primary ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={contact.photo || 'https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png'} alt="" className="contact-img img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditContact;
