import React from "react";
import { InlineWidget } from "react-calendly";
import "./Booking.css"; 

export default function Booking() {
  return (
    <div className="main-content">
      <h2 className="text-3xl font-bold mb-6">📅 Free 15-Min Training Consult</h2>
      <p className="mb-4">
        Want to chat about training goals or see if we’re a good fit? Schedule a free 15-minute consult using the calendar below.
      </p>
      <InlineWidget
        url="https://calendly.com/paisleygearandtraining/free-15-min-training-consult"
        styles={{ height: "700px" }}
      />
    </div>
  );
}
