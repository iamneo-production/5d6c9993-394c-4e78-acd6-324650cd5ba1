import React, { useState } from 'react';
import './enroll.css';
import {useNavigate} from 'react-router-dom';
const EnrollmentForm = () => {
    const navigate=useNavigate('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [level, setLevel] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any other actions
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Level:', level);
    console.log('Course:',course);
    console.log('Payment Method:', paymentMethod);

    
    
    // switch (paymentMethod) {
    //     case 'creditCard':
    //         window.open('https://example.com/pay/credit-card', '_blank');
    //         break;
    //         case 'bankTransfer':
    //             window.open('https://example.com/pay/bank-transfer', '_blank');
    //             break;
    //             case 'paypal':
    //                 window.open('https://example.com/pay/paypal', '_blank');
    //                 break;
    //                 default:
    //                     break;
    //                 }
                    // Simulate payment success
                    setPaymentSuccess(true);
                    if ( setPaymentSuccess(false)) {
                        alert('payment is not successful');
                      } 
                       else {
                        alert('Registration successful!');
                          navigate('/work');
                        
                      }
                };

  return (
    <div className="ball">
    
    <div className="enrollment-form">
      <h2>Student Enrollment Form</h2>
      {paymentSuccess ? (
        <div className="payment-success">Payment successful!</div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select a course</option>
            <option value="Mathematics">Python</option>
            <option value="Physics">Java</option>
            <option value="Chemistry">React</option>
            <option value="ldkdfk">Mysql</option>
        
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="course">level</label>
          <select
            id="course"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select a level</option>
            <option value="Mathematics">Beginner</option>
            <option value="Physics">Intermediate</option>
            <option value="Chemistry">Advanced</option>
        
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="input-field"
          >
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Enroll
        </button>
      </form>
    </div>
    </div>
  );
};

export default EnrollmentForm;
