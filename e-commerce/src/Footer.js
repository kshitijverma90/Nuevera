import React from 'react';
import './Footer.css'

function Footer() {
  return (
      <div className='footer'>
    <div className='footer_main'>
        <div className='footer_content'>
            <h3>Get to know us</h3>
            <h5>About Us</h5>
            <h5>Careers</h5>
            <h5>Press Release</h5>
            <h5>Amazon Cares</h5>
            <h5>Gift a Smile</h5>
            <h5>Amazon Science</h5>
        </div>
        <div className='footer_content'>
            <h3>Connect with Us</h3>
            <h5>Facebook</h5>
            <h5>Twitter</h5>
            <h5>Instagram</h5>
            
        </div>
        <div className='footer_content'>
            <h3>Make Money with Us</h3>
            <h5>Sell on Amazon</h5>
            <h5>Sell under Amazon Accelerator</h5>
            <h5>Become an Affiliate</h5>
            <h5>Fulfilment by Amazon</h5>
            <h5>Advertise Your Product</h5>
            <h5>Amazon Pay on Merchants</h5>
        </div>
        <div className='footer_content'>
            <h3>Let Us Help You</h3>
            <h5>COVID-19 and Amazon</h5>
            <h5>Return Centre</h5>
            <h5>100% Purchase Protection</h5>
            <h5>Amazon App Download</h5>
            <h5>Amazon Assitant Download</h5>
            <h5>Help</h5>
        </div>

    </div>
    <hr />
    <div className='footer_contentdown'>
      <div><img  className='footer_img' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></div> 
      <div> <button className='footer_button'>@c english</button></div>
    </div>
    
    
    </div>
  )
}

export default Footer