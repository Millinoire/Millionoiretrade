import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { FaRegCreditCard } from "react-icons/fa6";
import { FaQrcode } from "react-icons/fa";
const PaymentGatewayQR = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    amount: '',
  });
  const [qrCodeData, setQrCodeData] = useState('');
  const [transactionCompleted, setTransactionCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayNow = () => {
    if (formData.name && formData.mobile && formData.amount) {
      const dataToEncode = JSON.stringify(formData);
      setQrCodeData(dataToEncode);
      setTransactionCompleted(false);
    } else {
      alert('Please fill all the fields!');
    }
  };

  const handleTransactionComplete = () => {
    setTransactionCompleted(true);
    setQrCodeData('');
    alert('Transaction completed successfully!');
  };

  return (
    <div className='border lg:w-[500px] mx-auto h-[600px] px-6 py-6 rounded-xl border-gray-700'>
      <h2 className='font-bold text-2xl text-white'>Payment Method</h2>
      <p className='font-medium my-1'>Add a new payment method to your account.</p>
      
    <div className='flex justify-around my-8 '>
        <div className='border px-10 py-4 rounded-md'>
            <FaRegCreditCard  className="text-white text-4xl text-center cursor-pointer hover:bg-slate-900"/>
            <p className='text-center'>Card</p>
        </div>

        <div className='border px-10 py-4 rounded-md '>
            <FaQrcode  className="text-white text-4xl text-center cursor-pointer hover:bg-slate-900"/>
            <p className='text-center'>QR</p>
        </div>

        
    </div>
        <div className='grid grid-cols-1 space-y-5'>
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
            />
            <input
                type="number"
                name="amount"
                placeholder="Enter Amount"
                value={formData.amount}
                onChange={handleChange}
            />
        </div>
      <button
        onClick={handlePayNow}
        style={{
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Pay Now
      </button>

      {qrCodeData && (
        <div>
          <h3>Scan to Pay</h3>
          <QRCode value={qrCodeData} />
          <button
            onClick={handleTransactionComplete}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Transaction Complete
          </button>
        </div>
      )}

    </div>
  );
};

export default PaymentGatewayQR;