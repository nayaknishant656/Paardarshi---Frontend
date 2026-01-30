import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MyCanvas.css';

function MyCanvas() {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const modeRef = useRef(null);
  const numberRef = useRef(null);
  const downloadBtnRef = useRef(null);

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://backend-paardarshi.vercel.app/shoes/${id}`
        );

        setShoe(response.data);
      } catch (err) {
        console.error("Failed to fetch Donors:", err);
        setError(
          err.response?.data?.message || 
          "Failed to load Donors details. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchShoe();
    }
  }, [id]);

  useEffect(() => {
    if (!canvasRef.current || !nameRef.current || !emailRef.current || !addressRef.current || !modeRef.current || !numberRef.current || !downloadBtnRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = 'https://i.postimg.cc/3NPSVVRb/background4.jpg';

    const logo = new Image();
    logo.crossOrigin = 'anonymous';
    logo.src = 'https://i.postimg.cc/1RTpGDbX/logo.png';

    let imagesLoaded = 0;

    function checkImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded === 2) {
        drawImage();
        staticText();
        drawText();
        drawBorder();
      }
    }

    image.onload = checkImagesLoaded;
    logo.onload = checkImagesLoaded;

    function drawImage() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 20, 20, canvas.width - 40, canvas.height - 40);
      ctx.drawImage(logo, 325, 10, 120, 120);
    }

    function staticText() {
      ctx.font = '550 15px Noto Sans sans-serif';
      ctx.fillStyle = '#e8ff07';
      ctx.fillText('Receipt No:', 30, 65);
      ctx.fillStyle = 'white';
      const r = Math.floor(Math.random() * 10000) + 1;
      ctx.fillText(r, 115, 65);
      ctx.fillStyle = '#e8ff07';
      ctx.fillText('Date:', 30, 90);
      ctx.fillStyle = 'white';
      const d = new Date().toJSON().slice(0, 10);
      ctx.fillText(d, 70, 90);
      ctx.fillStyle = '#e8ff07';
      ctx.fillText('Ram Mandir, Ranchi-835214, JK', 520, 65);
      ctx.fillText('Website: https://nishatnkumar.com', 520, 90);
      ctx.font = '900 18px Noto Sans sans-serif';
      ctx.fillText('SHRI RAM JANMBHOOMI TEERTH KSHETRA', 210, 155);
      ctx.font = '1000 20px Noto Sans sans-serif';
      ctx.fillText('Receipt', 380, 185);
      ctx.font = '400 18px Arial sans-serif';
      ctx.fillText('Received with thanks from:', 30, 210);

      const yt = 230;
      ctx.font = '400 18px Arial sans-serif';
      ctx.fillText('Name:', 30, yt);
      ctx.fillText('Email:', 30, yt + 25);
      ctx.fillText('Address:', 30, yt + 50);
      ctx.fillText('Mode of Donation:', 30, yt + 75);
      ctx.fillText('Mobile number:', 30, yt + 100);
      ctx.fillText('Sign:..................................', 550, 385);
      ctx.font = '400 13px Arial';
      ctx.fillText('*Pan of Shri Ram Janmbhoomi Teerth Kshetra is AXYPN5481.', 22, 410);
      ctx.fillText(
        '*Donation made in cash exceeding Rs 2000/- are not eligible for deduction under the aforementioned section.',
        22,
        425
      );
      ctx.font = '900 15px Arial';
      ctx.fillText('*Contact: +91 9263282297, Email: contact@srjbuj.org.', 190, 465);
    }

    function drawText() {
      const yt = 230;
      ctx.font = '16px Merriweather serif';
      ctx.fillStyle = 'white';
      ctx.fillText(nameRef.current.value, 85, yt);
      ctx.fillText(emailRef.current.value, 85, yt + 25);
      ctx.fillText(addressRef.current.value, 100, yt + 50);
      ctx.fillText(modeRef.current.value, 175, yt + 75);
      ctx.fillText(numberRef.current.value, 155, yt + 100);
    }

    function drawBorder() {
      const gradient = ctx.createLinearGradient(0, 0, 470, 0);
      gradient.addColorStop('0.5', 'red');
      gradient.addColorStop('1.0', 'red');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.strokeRect(15, 15, 770, 470);
    }

    const updateCanvas = () => {
      drawImage();
      drawText();
      drawBorder();
      staticText();
    };

    nameRef.current.addEventListener('input', updateCanvas);
    emailRef.current.addEventListener('input', updateCanvas);
    addressRef.current.addEventListener('input', updateCanvas);
    modeRef.current.addEventListener('input', updateCanvas);
    numberRef.current.addEventListener('input', updateCanvas);

    downloadBtnRef.current.addEventListener('click', function () {
      const dataUrl = canvas.toDataURL('image/jpg');
      downloadBtnRef.current.href = dataUrl;
      downloadBtnRef.current.download = 'Certificate - ' + nameRef.current.value;
    });

    return () => {
      if (nameRef.current) nameRef.current.removeEventListener('input', updateCanvas);
      if (emailRef.current) emailRef.current.removeEventListener('input', updateCanvas);
      if (addressRef.current) addressRef.current.removeEventListener('input', updateCanvas);
      if (modeRef.current) modeRef.current.removeEventListener('input', updateCanvas);
      if (numberRef.current) numberRef.current.removeEventListener('input', updateCanvas);
    };
  }, [shoe]);

  if (loading) {
    return (
      <div className="shoe-detail-loading">
        <div className="spinner"></div>
        <p>Loading shoe details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shoe-detail-error">
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  if (!shoe) {
    return <div className="not-found">Shoe not found</div>;
  }

  const {
    name,
    adress,
  } = shoe;

  return (
    <div className="certificate-page">
      <h1 className="page-title">Certificate Page</h1>
      
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} width={800} height={500} />
      </div>

      <div className="form-container">
        <div className="input-group">
          <label>Name:</label>
          <input ref={nameRef} type="text" defaultValue={name || "Nishant Kumar Nayak"} />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input ref={emailRef} type="text" defaultValue="mobideas2@gmail.com" />
        </div>

        <div className="input-group">
          <label>Address:</label>
          <input ref={addressRef} type="text" defaultValue={adress || "umedanda burmu ranchi jharkhand"} />
        </div>

        <div className="input-group">
          <label>Mode:</label>
          <select ref={modeRef}>
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="input-group">
          <label>Mobile Number:</label>
          <input ref={numberRef} type="number" defaultValue="6204616951" />
        </div>

        <a href="#" ref={downloadBtnRef} className="download-btn">
          <span className="download-icon">⬇</span>
          Download Certificate
        </a>
      </div>
    </div>
  );
}

export default MyCanvas;