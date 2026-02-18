import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Select } from "antd";

const UserForm = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState("");
  const formRef = useRef(null);
  const { Option } = Select;

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (selected === "") {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_rlibtqp", // btjalphatechnology@gmil.com
        "template_dzspsea",
        formRef.current,
        "nMuJZV909QgK5PX0J",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setSelected("");
        setPhone("");
        setErrors({});
        // Navigate to thank you page after a short delay
        setTimeout(() => {
          navigate("/thank-you");
        }, 500);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4 text-black">
        <input
          type="text"
          name="user_name"
          placeholder="Name*"
          className="
    w-1/2 p-3 border border-gray-400 rounded-lg
    focus:border-gray-600 focus-visible:border-gray-600
    focus:outline-none focus-visible:outline-none focus:ring-0
    transition-colors duration-150
  "
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email Address*"
          className="
    w-1/2 p-3 border border-gray-400 rounded-lg
    focus:border-gray-600 focus-visible:border-gray-600
    focus:outline-none focus-visible:outline-none focus:ring-0
    transition-colors duration-150
  "
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter 10-digit number"
              className="w-full p-3  border border-gray-400 rounded-lg
    focus:border-gray-600 focus-visible:border-gray-600
    focus:outline-none focus-visible:outline-none focus:ring-0
    transition-colors duration-150 text-black"
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="w-1/2">
            <Select
              value={selected || undefined}
              onChange={(value) => setSelected(value)}
              placeholder="Select Service"
              className="w-full custom-select"
              size="large"
            >
              <Option value="Web Designing">Web Designing</Option>
              <Option value="Web Development">Web Development</Option>
              <Option value="App Development">App Development</Option>
              <Option value="Digital Marketing">Digital Marketing</Option>
              <Option value="Bulk SMS">Bulk SMS</Option>
              <Option value="Bulk Database">Bulk Database</Option>
            </Select>

            {errors.service && (
              <p className="text-red-600 text-sm mt-1">{errors.service}</p>
            )}
          </div>
          <input type="hidden" name="service" value={selected} />
        </div>
      </div>

      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-3 border border-gray-400 rounded-lg
    focus:border-gray-600 focus-visible:border-gray-600
    focus:outline-none focus-visible:outline-none focus:ring-0
    transition-colors duration-150  h-32 text-black"
        required
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-[#fb9c24] text-xl  text-white p-3 rounded-lg font-semibold flex items-center h-12 justify-center ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <span className="animate-spin border-2 border-t-transparent border-gray-500 rounded-full h-5 w-5"></span>
        ) : (
          <>
            Submit <i className="fas fa-arrow-right ml-2"></i>
          </>
        )}
      </button>
    </form>
  );
};

export default UserForm;
