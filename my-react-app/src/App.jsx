import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/contacts/contactlist/ContactList';
import AddContact from './components/contacts/addcontacts/AddContact';
import ViewContact from './components/contacts/viewcontact/ViewContact';
import EditContact from './components/contacts/editcontact/EditContact';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
         <Route path="/" element={<Navigate to="/contacts/list" />} />
         <Route path="/contacts/list" element={<ContactList />} />
         <Route path="/contacts/add" element={<AddContact />} />
         <Route path="/contacts/view/:contactId" element={<ViewContact />} />
         <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      
      
      </Routes>
      
      
    </>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import ContactList from './components/contacts/contactlist/ContactList';

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/contacts/list" />} />
//         <Route path="/contacts/list" element={<ContactList />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
