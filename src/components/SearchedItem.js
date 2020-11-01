import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";

const SearchedItem = (props) => {
  const handleDeleteUser = () => {
    let ans = window.confirm(
      `Are you sure, you want to remove ${props.searchName}?`
    );
    if (ans == true) {
      props.deleteByName();
    }
  };
  return (
    <div>
      <h3>Searched email </h3>
      {props.searchName &&
      <MDBBtn onClick={() => handleDeleteUser()} color="danger">
        Delete User
      </MDBBtn>}
    </div>
  );
};
export default SearchedItem;
