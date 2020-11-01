import React from "react";
import { MDBBtn,MDBInput } from "mdbreact";

const Functionality = (props) => {
 
  return (
    <div className="Functionality">
      <MDBBtn onClick={() => props.generateLottery()}>Generate lottery</MDBBtn>
      <MDBBtn onClick={() => props.sendEmails()} color="warning">
        Send Emails
      </MDBBtn>
      
      <MDBBtn onClick={() => props.handleSearchByName()} color="info">
        Search user
      </MDBBtn>
      <MDBInput label="Add new Interest..." onChange={({target})=>props.setInterest(target.value)} />
      <MDBBtn onClick={() => props.handleAddNewInterest()} color="pink">
        Add new Interest
      </MDBBtn>
      <MDBInput label="Search by name..." onChange={({target})=>props.setSearchName(target.value)} />
    </div>
  );
};

export default Functionality;
