import React, { useEffect, useState } from "react";
import NavImg from "./assets/navbarImage.png";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [logo, setLogo] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [worktype, setWorkType] = useState("Part Time");
  const [time, setTime] = useState("5h a day");
  const [location, setLocation] = useState("remote");
  const [state, setState] = useState([]);
  const [profession, setProfession] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(savedUsers);
  }, []);

  function handleSave(event) {
    event.preventDefault();

    if (!logo || !company || !status || !profession.length) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    const user = {
      id: Date.now(),
      logo,
      company,
      status,
      worktype,
      time,
      location,
      state,
      profession,
    };
    const copied = [...users, user];
    setUsers(copied);
    localStorage.setItem("users", JSON.stringify(copied));
    alert("Muvaffaqiyatli qo'shildi");

    setLogo("");
    setCompany("");
    setStatus("");
    setWorkType("Part Time");
    setTime("5h a day");
    setLocation("remote");
  }

  function handleSelectState(event) {
    let copied = [...state];
    if (event.target.checked) {
      copied.push(event.target.value);
    } else {
      copied = copied.filter((c) => c !== event.target.value);
    }
    setState(copied);
  }

  function handleSelectProfession(event) {
    let copied = [...profession];
    if (event.target.checked) {
      copied.push(event.target.value);
    } else {
      copied = copied.filter((c) => c !== event.target.value);
    }
    setProfession(copied);
  }

  function handleDelete(id) {
    if (confirm("Haqiqatdan ham o'chirmoqchimisiz?")) {
      const copied = users.filter((user) => user.id !== id);
      setUsers(copied);
      localStorage.setItem("users", JSON.stringify(copied));
    }
  }

  return (
    <div className="font-sans bg-blue-50 dark:bg-gray-800 pb-2">
      <nav className="max-w-[1440px] max-h-[156px]">
        <img src={NavImg} alt="navigation bar" />
      </nav>
      <ThemeSwitcher />
      {/* Form  */}
      <div className="gap-y-6 mt-2 bg-white dark:bg-gray-900 items-center mx-auto p-3 rounded-md max-w-[600px] shadow-2xl flex flex-col">
        <h1 className="font-bold text-2xl mb-3 text-gray-900 dark:text-white">
          Vakansiya ma'lumotlarini kiriting
        </h1>
        <form className="flex items-start gap-40 mx-auto max-w-[600px]">
          {/* left part*/}
          <div className="left-part flex flex-col mx-auto justify-between gap-2">
            <div className="flex flex-col">
              <label className="text-gray-900 dark:text-white">
                <strong>Logotip URL</strong>
              </label>
              <input
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                className="input border border-gray-300 dark:border-gray-600 rounded-sm placeholder:font-medium p-1 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                type="url"
                placeholder="Logotip URL manzilini kiriting"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-900 dark:text-white">
                <strong>Kompaniya nomi</strong>
              </label>
              <input
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                className="input border border-gray-300 dark:border-gray-600 rounded-sm placeholder:font-medium p-1 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                type="text"
                placeholder="Manage"
              />
            </div>
            <div className="flex">
              <input
                onChange={handleSelectState}
                name="state"
                value="new"
                className="input border border-gray-500 rounded-sm"
                type="checkbox"
                id="new"
              />
              <label htmlFor="new" className="text-gray-900 dark:text-white">
                <strong>New</strong>
              </label>
            </div>
            <div className="flex">
              <input
                onChange={handleSelectState}
                name="state"
                value="Featured"
                className="input border border-gray-500 rounded-sm"
                type="checkbox"
                id="featured"
              />
              <label
                htmlFor="featured"
                className="text-gray-900 dark:text-white"
              >
                <strong>Featured</strong>
              </label>
            </div>
            <div className="flex flex-col">
              <label htmlFor="point" className="text-gray-900 dark:text-white">
                <strong>Lavozim</strong>
              </label>
              <input
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="input border border-gray-300 dark:border-gray-600 rounded-sm placeholder:font-medium p-1 text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                type="text"
                id="point"
                placeholder="Fullstack Developer"
              />
            </div>
          </div>
          {/* right part */}
          <div className="right-part flex flex-col mx-auto">
            <div className="flex flex-col">
              <label className="text-gray-900 dark:text-white">
                <strong>Ish turi</strong>
              </label>
              <select
                value={worktype}
                onChange={(e) => setWorkType(e.target.value)}
                className="border-2 border-black dark:border-gray-600 rounded-md"
              >
                <option className="font-medium" value="Part Time">
                  Part time
                </option>
                <option className="font-medium" value="Full Time">
                  Full time
                </option>
                <option className="font-medium" value="Contract">
                  Contract
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-900 dark:text-white">
                <strong>Vaqt</strong>
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-2 border-black dark:border-gray-600 rounded-md"
              >
                <option className="font-medium" value="5h a day">
                  5h a day
                </option>
                <option className="font-medium" value="8h a day">
                  8h a day
                </option>
                <option className="font-medium" value="10h a day">
                  10h a day
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-900 dark:text-white">
                <strong>Joyashuv</strong>
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-2 border-black dark:border-gray-600 rounded-md"
              >
                <option className="font-medium" value="remote">
                  Remote
                </option>
                <option className="font-medium" value="worldwide">
                  WorldWide
                </option>
                <option className="font-medium" value="uzbekistan">
                  Uzbekistan only
                </option>
                <option className="font-medium" value="region">
                  Region only
                </option>
              </select>
            </div>
            <div>
              <label className="text-gray-900 dark:text-white">
                <strong>Ko'nikmalar</strong>
              </label>
              <div>
                <input
                  onChange={handleSelectProfession}
                  name="profession"
                  value="Fullstack"
                  className="input border border-gray-500 rounded-sm"
                  type="checkbox"
                  id="fullstack"
                />
                <label
                  htmlFor="fullstack"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Fullstack
                </label>
              </div>
              <div>
                <input
                  onChange={handleSelectProfession}
                  name="profession"
                  value="Midweight"
                  className="input border border-gray-500 rounded-sm"
                  type="checkbox"
                  id="midweight"
                />
                <label
                  htmlFor="midweight"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Midweight
                </label>
              </div>
              <div>
                <input
                  onChange={handleSelectProfession}
                  name="profession"
                  value="Python"
                  className="input border border-gray-500 rounded-sm"
                  type="checkbox"
                  id="python"
                />
                <label
                  htmlFor="python"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Python
                </label>
              </div>
              <div>
                <input
                  onChange={handleSelectProfession}
                  name="profession"
                  value="React"
                  className="input border border-gray-500 rounded-sm"
                  type="checkbox"
                  id="react"
                />
                <label
                  htmlFor="react"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  React
                </label>
              </div>
            </div>
          </div>
        </form>
        <button
          onClick={handleSave}
          className="bg-blue-800 w-full py-2 rounded-md text-white font-medium"
        >
          Saqlash
        </button>
      </div>
      {/* CARD LIST */}
      <div className="cardList">
        {users.length > 0 &&
          users.map((user, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-2xl my-5 bg-white dark:bg-gray-900 p-8 flex justify-between mx-auto w-[1110px] items-center"
            >
              <div className="flex gap-8">
                <img
                  src={user.logo}
                  alt={user.company}
                  className="rounded-full w-20 h-20"
                />
                <div className="justify-between flex flex-col">
                  <div className="flex gap-1">
                    <h3 className="font-bold mr-4 text-lg text-regal-blue">
                      {user.company}
                    </h3>
                    <div className="flex items-center gap-4">
                      {user.state.length > 0 &&
                        user.state.map((statenow, index) => (
                          <p
                            key={index}
                            className="mr-2 rounded-xl bg-regal-blue text-white font-bold text-sm p-2"
                          >
                            {statenow}
                          </p>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold mb-1 text-main-text text-2xl">
                      {user.status}
                    </h2>
                    <div className="flex gap-10">
                      <p className="text-gray-400">{user.time}</p>
                      <p className="text-gray-400">{user.worktype}</p>
                      <p className="text-gray-400">{user.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex gap-2 mb-1">
                  {user.profession.length > 0 &&
                    user.profession.map((prof, index) => (
                      <p
                        key={index}
                        className="text-regal-blue font-bold text-base bg-blue-100 p-1 rounded-md"
                      >
                        {prof}
                      </p>
                    ))}
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 text-white font-medium py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
