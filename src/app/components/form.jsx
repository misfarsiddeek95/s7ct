"use client";

import React, {useState, useMemo} from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {FiCalendar, FiUsers} from "../assets/icons/vander";
import {Modal} from "antd";
import emailjs from "@emailjs/browser";
import countryList from "react-select-country-list";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Form() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    to_name: "S7 Travels",
    startDate: new Date(),
    stayingFor: 7,
    noOfPersons: 1,
    contactNumber: "",
    countryCode: "",
    email: "",
    childrenCount: 0,
    notes: "",
    nationality: ""
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const options = useMemo(() => countryList().getData(), []);

  const handleModalSubmit = () => {
    emailjs
      .send(
        "service_a182q5u",
        "template_m3gbsga",
        {
          to_name: "S7 Travels",
          startDate: formData.startDate.toLocaleDateString(),
          stayingFor: formData.stayingFor,
          noOfPersons: formData.noOfPersons,
          contactNumber: `${formData.contactNumber}`,
          email: formData.email,
          childrenCount: formData.childrenCount,
          notes: formData.notes,
        },
        "axl2XXWSLIvzNfhsi"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Details submitted successfully!");
          setFormData({
            startDate: new Date(),
            stayingFor: 7,
            noOfPersons: 1,
            contactNumber: "",
            email: "",
            childrenCount: 0,
            notes: "",
          });
          setShowModal(false);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the details. Please try again.");
        }
      );
  };

  return (
    <div className="grid grid-cols-1">
      <form
        className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700"
        onSubmit={handleFormSubmit}
      >
        <div className="registration-form text-dark text-start">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Arrival Date :
              </label>
              <div className="relative mt-2">
                <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50"/>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={formData.startDate}
                  onChange={(date) =>
                    setFormData({...formData, startDate: date})
                  }
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Staying For (Days) :
              </label>
              <div className="relative mt-2">
                <select
                  className="form-select w-full py-2 px-3 ps-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  name="stayingFor"
                  value={formData.stayingFor}
                  onChange={onChange}
                >
                  {Array.from({length: 30}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                No of Persons :
              </label>
              <div className="relative mt-2">
                <FiUsers className="size-[18px] absolute top-[10px] start-3"/>
                <select
                  className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  name="noOfPersons"
                  value={formData.noOfPersons}
                  onChange={onChange}
                >
                  {Array.from({length: 10}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="lg:mt-[35px]">
              <input
                type="submit"
                id="search-buy"
                name="search"
                className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer"
                value="Proceed"
              />
            </div>
          </div>
        </div>
      </form>

      {showModal && (
        <Modal
          open={showModal}
          okButtonProps={{style: {display: "none"}}}
          cancelButtonProps={{style: {display: "none"}}}
          onCancel={() => setShowModal(false)}
        >
          <div className="registration-form text-dark text-start">
            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Arrival Date :
              </label>
              <div className="relative mt-2 w-full">
                <FiCalendar className="size-[18px] absolute top-[10px] start-3 z-50"/>
                <DatePicker
                  className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start"
                  selected={formData.startDate}
                  onChange={(date) =>
                    setFormData({...formData, startDate: date})
                  }
                  name="startDate"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Staying For (Days) :
              </label>
              <div className="relative mt-2">
                <select
                  className="form-select w-full py-2 px-3 ps-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  name="stayingFor"
                  value={formData.stayingFor}
                  onChange={onChange}
                >
                  {Array.from({length: 30}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                No of Persons :
              </label>
              <div className="relative mt-2">
                <FiUsers className="size-[18px] absolute top-[10px] start-3"/>
                <select
                  className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                  name="noOfPersons"
                  value={formData.noOfPersons}
                  onChange={onChange}
                >
                  {Array.from({length: 10}, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 mt-4">
            Additional Details
          </h3>
          <div className="grid gap-4">
            <div>
              <div className="mt-2 flex gap-3">
                <div
                  className="flex-1"
                >
                  <label className="form-label font-medium text-slate-900 dark:text-white">
                    Nationality:
                  </label>
                  <Select
                    name="nationality"
                    options={options}
                    value={formData.nationality}
                    onChange={(nationality) => {
                      setFormData({...formData, nationality })
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="form-label font-medium text-slate-900 dark:text-white">
                    Contact Number:
                  </label>
                  <PhoneInput
                    defaultCountry="LK"
                    value={formData.contactNumber}
                    onChange={(date) =>
                      setFormData({...formData, contactNumber: date})
                    }
                    className="flex-1 form-control rounded-md outline-none border border-gray-100 dark:border-gray-800 w-full py-2 px-3"
                    name="contactNumber"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Email (Optional):
              </label>
              <input
                type="email"
                className="w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800"
                name="email"
                value={formData.email}
                onChange={onChange}
              />
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Children Count:
              </label>
              <input
                type="number"
                min="0"
                className="w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={onChange}
              />
            </div>

            <div>
              <label className="form-label font-medium text-slate-900 dark:text-white">
                Notes (Optional):
              </label>
              <textarea
                className="w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800"
                value={formData.notes}
                name="notes"
                onChange={onChange}
              />
            </div>

            <button
              onClick={handleModalSubmit}
              className="py-2 px-4 bg-red-500 text-white rounded-md w-full mt-4"
            >
              Submit
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
