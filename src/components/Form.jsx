import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    comments: true,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  let inputChangeHandler = (event) => {
    const { name, type, value, checked } = event.target;

    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
    data = data.join(" \n");
    alert(data);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md"
    >
      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="Enter Your First Name"
          onChange={inputChangeHandler}
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>

      <br />

      <div>
        <label htmlFor="lasttName" className="font-medium text-sm">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lasttName"
          value={formData.lastName}
          onChange={inputChangeHandler}
          placeholder="Enter Your Last Name"
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>

      <br />

      <div>
        <label htmlFor="firstName" className="font-medium text-sm">
          Enter Your Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={inputChangeHandler}
          placeholder="Email address"
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>

      <br />

      <div>
        <label htmlFor="country" className="font-medium text-sm">
          Enter Your Country
        </label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={inputChangeHandler}
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <br />
      <div>
        <label htmlFor="address" className="font-medium text-sm">
          Enter Your Address
        </label>
        <textarea
          name="address"
          id="address"
          placeholder="Address"
          onChange={inputChangeHandler}
          value={formData.address}
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        ></textarea>
      </div>

      <br />

      <div>
        <label htmlFor="city" className="font-medium text-sm">
          Enter City Name
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={inputChangeHandler}
          placeholder="City"
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>
      <br />
      <div>
        <label htmlFor="state" className="font-medium text-sm">
          Enter State/Province Name
        </label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={inputChangeHandler}
          placeholder="State/Province"
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>
      <br />

      <div>
        <label htmlFor="zip" className="font-medium text-sm">
          Enter Zip Code
        </label>
        <input
          type="number"
          name="zipCode"
          id="zip"
          min={0}
          value={formData.zipCode}
          onChange={inputChangeHandler}
          placeholder="XXXXXX"
          required
          className="w-full border border-blue-400 rounded-md p-2 mt-2"
        />
      </div>

      <br />

      <fieldset>
        <legend className="font-medium text-sm">By Email</legend>
        <div className="flex items-start gap-4 mt-2">
          <input
            type="checkbox"
            name="comments"
            id="comments"
            onChange={inputChangeHandler}
            checked={formData.comments}
          />
          <div>
            <label htmlFor="comments" className="font-medium text-sm">
              Comments
            </label>
            <p className="text-sm text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>{" "}
        </div>

        <div className="flex items-start gap-4 mt-2">
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            onChange={inputChangeHandler}
            checked={formData.candidates}
          />
          <div>
            <label htmlFor="candidates" className="font-medium text-sm">
              Candidates
            </label>
            <p className="text-sm text-gray-500">
              Get notified when a candidate applies for a job.
            </p>
          </div>{" "}
        </div>

        <div className="flex items-start gap-4 mt-2">
          <input
            type="checkbox"
            name="offers"
            id="offers"
            onChange={inputChangeHandler}
            checked={formData.offers}
          />
          <div>
            <label htmlFor="offers" className="font-medium text-sm">
              Offers
            </label>
            <p className="text-sm text-gray-500">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>{" "}
        </div>
      </fieldset>

      <br />

      <fieldset className="mb-4">
        <legend className="font-medium text-sm">Push Notifications</legend>
        <p className="text-sm text-gray-500">
          These are delivered via SMS to your mobile phone.
        </p>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio1"
            name="pushNotifications"
            value="everything"
            onChange={inputChangeHandler}
            className="w-4 h-4"
          />
          <label htmlFor="radio1" className="font-medium text-sm">
            Everything
          </label>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio2"
            name="pushNotifications"
            value="Same as email"
            onChange={inputChangeHandler}
            className="w-4 h-4"
          />
          <label htmlFor="radio2" className="font-medium text-sm">
            Same as email
          </label>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <input
            type="radio"
            id="radio3"
            name="pushNotifications"
            value="No push notifications"
            onChange={inputChangeHandler}
            className="w-4 h-4"
          />
          <label htmlFor="radio3" className="font-medium text-sm">
            No push notifications
          </label>
        </div>
      </fieldset>

      <button
        className="bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}

export default Form;
