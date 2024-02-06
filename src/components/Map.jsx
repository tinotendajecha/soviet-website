import React from 'react';

const Map = () => {
  const mapStyle = {
    border: '0',
    width: '90vw', // Adjust the width according to your requirements
    height: '450px', // Adjust the height according to your requirements
  };

  return (
    <div className='map'>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3193.629999648953!2d31.126204619674773!3d-17.84390710610133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDUwJzM4LjAiUyAzMcKwMDcnNDIuOCJF!5e0!3m2!1sen!2szw!4v1707145665323!5m2!1sen!2szw"
      style={mapStyle}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  );
};

export default Map;