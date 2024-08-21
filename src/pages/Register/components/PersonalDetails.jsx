import { useContext, useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import { MultiStepContext } from "../StepContext";
export default function PersonalDetails() {
  const { setCurrStep, userData, setUserData } = useContext(MultiStepContext);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <PageLayout title={"Register"} imgUrl={"/events/visual-cover.jpg"}>
      <div className="bg-background ShadowLarge pb-8">
        <div className="font-playfair text-center px-8 pt-8 ">
          <p className="text-primary font-extrabold font-neotriad text-5xl leading-normal">
            Personal Details
          </p>
        </div>
        <form>
          {/* First name and last name */}
          <div className="px-8 py-4">
            <div className="flex justify-center">
              <div className="flex flex-col w-1/2 px-4">
                <label
                  htmlFor="first-name"
                  className="text-primary font-neotriad font-bold text-2xl mb-2"
                >
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="firstname"
                  id="first-name"
                  placeholder="First Name"
                  className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2 px-4">
                <label
                  htmlFor="last-name"
                  className="text-primary font-neotriad font-bold text-2xl mb-2"
                >
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="lastname"
                  id="last-name"
                  placeholder="Last Name"
                  className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="px-8 py-4">
            <div className="flex flex-col w-full px-4">
              <label
                htmlFor="email"
                className="text-primary font-neotriad font-bold text-2xl mb-2"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="you@email.com"
                className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
          {/* Contact number */}
          <div className="px-8 py-4">
            <div className="flex flex-col w-full px-4">
              <label
                htmlFor="contact"
                className="text-primary font-neotriad font-bold text-2xl mb-2"
              >
                Contact Number
              </label>
              <input
                onChange={handleChange}
                type="tel"
                name="contact"
                id="contact"
                placeholder="123-456-7890"
                className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
          {/* College */}
          <div className="px-8 py-4">
            <div className="flex flex-col w-full px-4">
              <label
                htmlFor="college"
                className="text-primary font-neotriad font-bold text-2xl mb-2"
              >
                College
              </label>
              <select
                id="college"
                name="college"
                value={userData.college}
                onChange={handleChange}
                className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
              >
                <option value="NITS">NIT Srinagar Students</option>
                <option value="Other Institute Students">Other</option>
              </select>
            </div>
          </div>
          {/* Enrollment Number (only for NIT Srinagar Students) */}
          {userData.college === "NITS" ? (
            <div className="px-8 py-4">
              <div className="flex flex-col w-full px-4">
                <label
                  htmlFor="enrollmentNumber"
                  className="text-primary font-neotriad font-bold text-2xl mb-2"
                >
                  Enrollment Number
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="enrollmentNumber"
                  id="enrollmentNumber"
                  placeholder="Enrollment Number"
                  className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="px-8 py-4">
              <div className="flex flex-col w-full px-4">
                <label
                  htmlFor="collegename"
                  className="text-primary font-neotriad font-bold text-2xl mb-2"
                >
                  Institution Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="collegename"
                  id="collegename"
                  placeholder="Institution Name"
                  className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
                />
              </div>
            </div>
          )}
          {/* Address */}
          <div className="px-8 py-4">
            <div className="flex flex-col w-full px-4">
              <label
                htmlFor="address"
                className="text-primary font-neotriad font-bold text-2xl mb-2"
              >
                Address
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="address"
                id="address"
                placeholder="123, Street Name, City, State, Country"
                className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
          {/* Submit button */}
          <div className="px-8 py-4 flex justify-center">
            <button
              onClick={() => setCurrStep((prev) => prev + 1)}
              className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
