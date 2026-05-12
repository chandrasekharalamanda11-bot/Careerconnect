const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Contact Us
        </h1>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            📧 Email:
            support@careerconnect.com
          </p>

          <p>
            📞 Phone:
            +91 9876543210
          </p>

          <p>
            📍 Address:
            Hyderabad, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;