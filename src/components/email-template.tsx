import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  contactNo,
  message,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff", // Ensure the entire email background is white
      padding: "40px 20px",
    }}
  >
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff", // Inner card background is also white
        borderRadius: "10px",
        padding: "30px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        border: "1px solid #dbeafe",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "20px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0, color: "#0c4a6e" }}>✈️ New Travel Inquiry Received</h2>
        <p style={{ color: "#64748b", fontSize: "14px", margin: "6px 0 0" }}>
          A traveler just submitted a contact form from your website.
        </p>
      </div>

      {/* User Data Section */}
      <div style={{ fontSize: "16px", color: "#1e293b" }}>
        <p>
          <strong>👤 Full Name:</strong> {firstName} {lastName}
        </p>
        <p>
          <strong>📧 Email Address:</strong> {email}
        </p>
        <p>
          <strong>📞 Contact Number:</strong> {contactNo}
        </p>
        <p>
          <strong>🗺️ Inquiry Message:</strong>
        </p>
        <div
          style={{
            background: "#f1f5f9",
            padding: "12px",
            borderRadius: "6px",
            marginTop: "5px",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "30px",
          borderTop: "1px solid #e2e8f0",
          paddingTop: "15px",
          fontSize: "12px",
          color: "#94a3b8",
          textAlign: "center",
        }}
      >
        Sent via <strong>TravelVista Contact Form</strong> 🌍
      </footer>
    </div>
  </div>
);
