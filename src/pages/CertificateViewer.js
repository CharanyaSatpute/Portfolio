import React from 'react';
import { useLocation } from 'react-router-dom';

function CertificateViewer() {
  const location = useLocation();
  
  // Check if location.state exists and has certificateImage
  if (!location.state || !location.state.certificateImage) {
    // Handle the case where location.state is null or missing certificateImage
    return (
      <div className="container">
        <h1 className="mt-4 mb-5 text-center">Certificate Not Found</h1>
        <p className="text-center">The certificate you are looking for could not be found.</p>
      </div>
    );
  }

  const { certificateImage } = location.state;

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center">Certificate Viewer</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Certificate Viewer" className="embed-responsive-item" src={`/pdf/${certificateImage}`}></iframe>
      </div>
    </div>
  );
}

export default CertificateViewer;
