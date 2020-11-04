import React, { useState } from "react";
import Header from "./components/header";
import Functionality from "./components/Functionality";
import Display from "./components/Display";
import axios from "axios";
import SearchedItem from "./components/SearchedItem";

//change base url to /api to use build file
const baseUrl = "http://localhost:4000/api";

const Main = () => {
  const [emails, setEmails] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [interest, setInterest] = useState("");
  const [searchfromDb, setSearchfromDb] = useState(false);

  const generateLottery = async () => {
    const response = await axios.get(`${baseUrl}/lunch-pairs`);

    setEmails(response.data);
  };

  const sendEmails = async () => {
    console.log("Emails are ", emails);

    const response = await axios.post(
      `${baseUrl}/users/insertIntoHistory`,
      emails
    );
    console.log("response from send email is ", response);
  };

  const handleSearchByName = async () => {
    console.log("search name is ", searchName);
    const response = await axios({
      method: "get",
      url: `${baseUrl}/users/:${searchName}`,
      header: {},
      params: {
        searchterm: `email`,
        value: `${searchName}`,
      },
    });
    if (response.data.rowCount > 0) {
      setSearchfromDb(true);
    }else{
      alert(`${searchName} does not exists in database`);
    }
  };

  const deleteByName = async () => {
    const response = await axios({
      method: "delete",
      url: `${baseUrl}/users/:${searchName}`,
      header: {},
      data: {
        email: `${searchName}`,
      },
    });

    if (response.data.rowCount > 0) {
      alert(`${searchName} removed from database!`);
    } else {
      alert(`${searchName} does not exist!`);
    }
    setSearchName("");
  };

  const handleAddNewInterest = async () => {
    if (interest.length > 0) {
      const data = {
        interest: `${interest}`,
      };
      const response = await axios.post(`${baseUrl}/interests/`, data);

      if (response.data.rowCount > 0) {
        alert(`${interest} added to database!`);
      } else {
        alert(`${interest} not added!`);
      }
    } else {
      alert(`Cannot insert null interest. Please insert proper interest.`);
    }
    setInterest("");
  };

  return (
    <div className='Main-page'>
      <Header />
      <Functionality
        generateLottery={generateLottery}
        sendEmails={sendEmails}
        setSearchName={setSearchName}
        handleSearchByName={handleSearchByName}
        setInterest={setInterest}
        handleAddNewInterest={handleAddNewInterest}
      />
      {emails.length > 0 && <Display emails={emails} />}
      {searchName && (
        <SearchedItem
          searchName={searchName}
          deleteByName={deleteByName}
          searchfromDb={searchfromDb}
        />
      )}
    </div>
  );
};

export default Main;
