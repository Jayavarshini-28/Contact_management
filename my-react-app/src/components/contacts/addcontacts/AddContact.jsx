// import React from 'react';
// import { Link } from 'react-router-dom';
// let AddContact =()=>{
//     let [state,setState]=useState(initialState:{
//         loading:false,
//         contact:{
//             name : '',
//             phot: '',
//             mobile: '',
//             email:'',
//             company:'',
//             title:'',
//             groupId:'',

//         },
//         groups:[],
//         errorMessage: ''
//     });
//     let updateInput= (event)=>{
//         setState()
//         ...state,
//         contact:{
//             ...state.contact,
//             [event.target.name]:event.target.value
//         }
//     });
// };
// let{loading,contact,groups,errorMessage}=state;
//     return(
//         <>
//         <pre>{JSON.stringify(state.contact)}

//         </pre>
//         <section className="add-contact p-3">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <p className="h3 text-success fw-bold">Create Contact</p>
//                     <p className="fst-italic"> welocme to create contact!</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-4">
//                         <form>
//                             <div className="mb-2">
//                                 <input
//                                 required={true}
//                                 name="name"
//                                 value={contact.name}
//                                 onChange={updateInput
//                                 } 
//                                 type="text"
//                                  className="form-control" placeholder="Name"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input 
//                                                required={true}
//                                 name="photo"
//                                 value={contact.photo}
//                                 onChange={updateInput
//                                 } type="text" className="form-control" placeholder="Photo url"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input 
//                                  required={true}
//                                  name="mobile"
//                                  value={contact.mobile}
//                                  onChange={updateInput}type="number" className="form-control" placeholder="Mobile"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input
//                                  required={true}
//                                  name="email"
//                                  value={contact.email}
//                                  onChange={updateInput} type="text" className="form-control" placeholder="Email"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input
//                                  required={true}
//                                  name="company"
//                                  value={contact.company}
//                                  onChange={updateInput} type="text" className="form-control" placeholder="Company"/>
//                             </div>
//                             <div className="mb-2">
//                                 <input 
//                                  required={true}
//                                  name="title"
//                                  value={contact.title}
//                                  onChange={updateInput}type="text" className="form-control" placeholder="Title"/>
//                             </div>
//                             <div className="mb-2">
//                                 <select 
//                                  required={true}
//                                  name="groupId"
//                                  value={contact.groupId}
//                                  onChange={updateInput}className="form-control">
//                                     <option value="">select a Group</option>

//                                 </select>
                               
//                             </div>
//                             <div className="mb-2">
//                                 <input type="Submit" className="btn btn-success" value="create"/>
//                             <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel
//                             </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </section>
        
//         </>
//     );

// }
// export default AddContact;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// let AddContact = () => {
//     let [state, setState] = useState({
//         loading: false,
//         contact: {
//             name: '',
//             photo: '',
//             mobile: '',
//             email: '',
//             company: '',
//             title: '',
//             groupId: '',
//         },
//         groups: [],
//         errorMessage: ''
//     });

//     let updateInput = (event) => {
//         setState({
//             ...state,
//             contact: {
//                 ...state.contact,
//                 [event.target.name]: event.target.value
//             }
//         });
//     };
//     useEffect(effect async () =>{
//         try{
//             setState(value{...state,loading:true});
//             let response=await ContactService.getGroups();
//          setState(value:{
//             ..state,
//             loading:false,
//             groups:response.data
//          })
        
//         }
//         catch(error){

//         }
//     })

//     let { loading, contact, groups, errorMessage } = state;

//     return (
//         <>
//             <pre>{JSON.stringify(state.contact, null, 2)}</pre>
//             <section className="add-contact p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-success fw-bold">Create Contact</p>
//                             <p className="fst-italic">Welcome to create contact!</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <form>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="name"
//                                         value={contact.name}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Name"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="photo"
//                                         value={contact.photo}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Photo URL"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="mobile"
//                                         value={contact.mobile}
//                                         onChange={updateInput}
//                                         type="number"
//                                         className="form-control"
//                                         placeholder="Mobile"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="email"
//                                         value={contact.email}
//                                         onChange={updateInput}
//                                         type="email"
//                                         className="form-control"
//                                         placeholder="Email"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="company"
//                                         value={contact.company}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Company"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="title"
//                                         value={contact.title}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Title"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <select
//                                         required
//                                         name="groupId"
//                                         value={contact.groupId}
//                                         onChange={updateInput}
//                                         className="form-control"
//                                     >
//                                         <option value="">Select a Group</option>
//                                         {groups.map((group) => (
//                                             <option key={group.id} value={group.id}>
//                                                 {group.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="submit" className="btn btn-success" value="Create" />
//                                     <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default AddContact;
// import React, { useState, useEffect,useNavigate } from 'react';
// import { Link } from 'react-router-dom';
// import { ContactService } from '../../../services/ContactService'; // Adjust the import according to your project structure

// const AddContact = () => {
//     let navigate= useNavigate();
//     const [state, setState] = useState({
//         loading: false,
//         contact: {
//             name: '',
//             photo: '',
//             mobile: '',
//             email: '',
//             company: '',
//             title: '',
//             groupId: '',
//         },
//         groups: [],
//         errorMessage: ''
//     });

//     const updateInput = (event) => {
//         setState({
//             ...state,
//             contact: {
//                 ...state.contact,
//                 [event.target.name]: event.target.value
//             }
//         });
//     };

//     useEffect(() => {
//         const fetchGroups = async () => {
//             try {
//                 setState({ ...state, loading: true });
//                 let response = await ContactService.getGroups();
//                 setState({
//                     ...state,
//                     loading: false,
//                     groups: response.data
//                 });
//             } catch (error) {
//                 setState({
//                     ...state,
//                     loading: false,
//                     errorMessage: 'Failed to fetch groups'
//                 });
//             }
//         };

//         fetchGroups();
//     }, []);
//     let submitForm=async (event) =>{
//         event.preventDefault();
//         try{
//             let response=await ContactService.createContact(state.contact);
//             if(response){
//                 navigate('/contacts/list',{replace:true});

//             }

//         }
//         catch(error){
//             setState(value{...state,errorMessage:error.message});
//             navigate('/contacts/add',{replace:false});

//         }

//     };

//     const { loading, contact, groups, errorMessage } = state;

//     return (
//         <>
            
//             <section className="add-contact p-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <p className="h3 text-success fw-bold">Create Contact</p>
//                             <p className="fst-italic">Welcome to create contact!</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-4">
//                             <form onSubmit={submitForm}>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="name"
//                                         value={contact.name}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Name"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="photo"
//                                         value={contact.photo}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Photo URL"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="mobile"
//                                         value={contact.mobile}
//                                         onChange={updateInput}
//                                         type="number"
//                                         className="form-control"
//                                         placeholder="Mobile"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="email"
//                                         value={contact.email}
//                                         onChange={updateInput}
//                                         type="email"
//                                         className="form-control"
//                                         placeholder="Email"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="company"
//                                         value={contact.company}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Company"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <input
//                                         required
//                                         name="title"
//                                         value={contact.title}
//                                         onChange={updateInput}
//                                         type="text"
//                                         className="form-control"
//                                         placeholder="Title"
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <select
//                                         required
//                                         name="groupId"
//                                         value={contact.groupId}
//                                         onChange={updateInput}
//                                         className="form-control"
//                                     >
//                                         <option value="">Select a Group</option>
//                                         {groups.map((group) => (
//                                             <option key={group.id} value={group.id}>
//                                                 {group.name}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className="mb-2">
//                                     <input type="submit" className="btn btn-success" value="Create" />
//                                     <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default AddContact;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService'; // Adjust the import according to your project structure

const AddContact = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: '',
        },
        groups: [],
        errorMessage: ''
    });

    const updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        });
    };

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                setState({ ...state, loading: true });
                let response = await ContactService.getGroups();
                setState({
                    ...state,
                    loading: false,
                    groups: response.data
                });
            } catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: 'Failed to fetch groups'
                });
            }
        };

        fetchGroups();
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.createContact(state.contact);
            if (response) {
                navigate('/contacts/list', { replace: true });
            }
        } catch (error) {
            setState({ ...state, errorMessage: error.message });
            navigate('/contacts/add', { replace: false });
        }
    };

    const { loading, contact, groups, errorMessage } = state;

    return (
        <>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Welcome to create contact!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="photo"
                                        value={contact.photo}
                                        onChange={updateInput}
                                        type="text"
                                        className="form-control"
                                        placeholder="Photo URL"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                        type="number"
                                        className="form-control"
                                        placeholder="Mobile"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="email"
                                        value={contact.email}
                                        onChange={updateInput}
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="company"
                                        value={contact.company}
                                        onChange={updateInput}
                                        type="text"
                                        className="form-control"
                                        placeholder="Company"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="title"
                                        value={contact.title}
                                        onChange={updateInput}
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                                <div className="mb-2">
                                    <select
                                        required
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
                                    <input type="submit" className="btn btn-success" value="Create" />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddContact;
