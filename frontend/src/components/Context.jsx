import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export const Context = createContext();

export default function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "male",
    avatar: "",
    domain: "sales",
    available: false,
  });
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [domainFilter, setDomainFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [availableFilter, setAvailableFilter] = useState(false);
  const limit = 20;
  const timer = useRef("");
  const TeamMembers = JSON.parse(localStorage.getItem("teamMember")) || [];

  // Add Team member in localStorage
  const handleAddTeam = (user) => {
    let flag = true;
    for (let i = 0; i < TeamMembers.length; i++) {
      if (TeamMembers[i]._id === user._id) {
        flag = false;
      }
    }
    if (flag) {
      TeamMembers.push(user);
      toast.success("Member Added");
    } else {
      toast.error("Already Exist In Your Team");
    }
    localStorage.setItem("teamMember", JSON.stringify(TeamMembers));
  };

  // for grab the user Details
  const handleSubmit = (e, userData) => {
    e.preventDefault();
    setLoading(true);
    setFormData(userData); // Set the formData state with the new user data
    return axios({
      method: "POST",
      url: "http://localhost:4500/users",
      headers: { "Content-Type": "application/json" },
      data: userData, // Use the userData object to send the data in the POST request
    })
      .then((res) => res)
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      });
  };

  // Function to fetch data based on the search value
  const fetchData = async (searchValue) => {
    setLoading(true);
    const url =
      searchValue.length > 1
        ? `http://localhost:4500/users?search=${searchValue}`
        : `http://localhost:4500/users?page=${page}&limit=${limit}`;
    await axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const debounce = useRef((fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }).current;

  // for Search input Value
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    debounce(() => fetchData(e.target.value), 500); // Adjust the debounce delay here (e.g., 500ms)
  };

  const handleSetPage = (number) => {
    setPage((prevPage) => prevPage + number);
  };

  const getData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:4500/users?page=${page}&limit=${limit}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  // Handle Delete
  const handleDelete = (id) => {
    return axios({
      method: "DELETE",
      url: `http://localhost:4500/users/${id}`,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res)
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        handleSetPage,
        page,
        loading,
        handleSearch,
        searchValue,
        setFormData,
        domainFilter,
        setDomainFilter,
        genderFilter,
        setGenderFilter,
        availableFilter,
        setAvailableFilter,
        handleSubmit,
        handleDelete,
        handleAddTeam,
      }}
    >
      {children}
    </Context.Provider>
  );
}
