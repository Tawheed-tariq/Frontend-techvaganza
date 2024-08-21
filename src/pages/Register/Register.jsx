import { useState } from "react";
import PageLayout from "../../Components/PageLayout";

export default function Register() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    college: "",
    address: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidation = () => {
    let valid = true;
    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.contact === "" ||
      values.college === "" ||
      values.address === ""
    ) {
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log(values);
      // submit form logic here
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <PageLayout title={"Register"} imgUrl={"/events/visual-cover.jpg"}>
      <div className="bg-background ShadowLarge pb-8">
        <div className="font-playfair text-center px-8 pt-8 ">
          <p className="text-primary font-extrabold font-neotriad text-5xl leading-normal">
            Register for the event
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          {/* College dropdown */}
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
                value={values.college}
                onChange={handleChange}
                className="border border-primary bg-transparent text-black font-kodeMono font-medium text-md px-4 py-2 focus:outline-none"
              >
                <option value="">Select your college</option>
                <option value="NITS">NIT Srinagar</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
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
            <button className="bg-primary text-secondary font-semibold py-4 px-10 font-kodeMono custom-glow">
              Register
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
