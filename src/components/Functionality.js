import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";

const Functionality = (props) => {
  return (
    <div className='Functionality'>
      <MDBBtn onClick={() => props.generateLottery()}>Generate lottery</MDBBtn>
      <MDBBtn onClick={() => props.sendEmails()} color='warning'>
        Send Emails
      </MDBBtn>

      <div className='box'>
        <MDBInput
          label='Add new Interest...'
          onChange={({ target }) => props.setInterest(target.value)}
        />
        <MDBBtn onClick={() => props.handleAddNewInterest()} color='pink'>
          Add new Interest
        </MDBBtn>
      </div>
      <div className='box'>
        <MDBInput
          label='Search by email...'
          onChange={({ target }) => props.setSearchName(target.value)}
        />
        <MDBBtn onClick={() => props.handleSearchByName()} color='info'>
          Search user
        </MDBBtn>
      </div>
    </div>
  );
};

export default Functionality;
