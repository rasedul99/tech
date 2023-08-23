
import './App.css'
import img1 from '../src/assets/images/img-1.png';
import { useState } from 'react';
import Pagination from './components/Pagination/Pagination';
function App() {
  const [tabContent, setTabContent] = useState(1);

  return (
    <>
      <section id='tab'>
        <div className="tab-heading">
        SAFEGUARD YOUR BUSINESS WITH ALL-IN-ONE CYBERSECURITY
        </div>
        <div className="tabs-container">
        <button
          className={`tab ${tabContent == 1 && "tab1"}`}
          onClick={() => setTabContent(1)}
        >
          Risk Assessment
        </button>
        <button
          className={`tab ${tabContent == 2 && "tab2"}`}
          onClick={() => setTabContent(2)}
        >
           Risk Assessment
        </button>

        <button
          className={`tab ${tabContent == 3 && "tab3"}`}
          onClick={() => setTabContent(3)}
        >
          Risk Assessment
        </button>

        <button
          className={`tab ${tabContent == 4 && "tab4"}`}
          onClick={() => setTabContent(4)}
        >
          Risk Assessment
        </button>
         
        </div>
        <div className="tab-content "  style={{ display: tabContent == 1 ? "flex" : "none" }}>
        <div className="left">
          <h2>Against Evolving Threats 1 </h2>
          <p>
          Get a clear picture of your organization’s security posture and how prepared you are against evolving cyber threats before malicious entities, and apply customized recommendations to improve your security program.

          </p>
          <button className='button'>Identify Cybar Risks Today</button>
         
        </div>
        <div className="right">
          <div className="img-box">
            <img src={img1} alt="img" />
            <div className="afterdot-tag-wrapper   afterdot-tag-wrapper1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="tab-content "  style={{ display: tabContent == 2 ? "flex" : "none" }}>
        <div className="left">
          <h2>Against Evolving Threats 2 </h2>
          <p>
          Get a clear picture of your organization’s security posture and how prepared you are against evolving cyber threats before malicious entities, and apply customized recommendations to improve your security program.

          </p>
          <button className='button'>Identify Cybar Risks Today</button>
         
        </div>
        <div className="right">
          <div className="img-box">
            <img src={img1} alt="img" />
            <div className="afterdot-tag-wrapper   afterdot-tag-wrapper1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="tab-content "  style={{ display: tabContent == 3 ? "flex" : "none" }}>
        <div className="left">
          <h2>Against Evolving Threats 3 </h2>
          <p>
          Get a clear picture of your organization’s security posture and how prepared you are against evolving cyber threats before malicious entities, and apply customized recommendations to improve your security program.

          </p>
          <button className='button'>Identify Cybar Risks Today</button>
         
        </div>
        <div className="right">
          <div className="img-box">
            <img src={img1} alt="img" />
            <div className="afterdot-tag-wrapper   afterdot-tag-wrapper1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="tab-content "  style={{ display: tabContent == 4 ? "flex" : "none" }}>
        <div className="left">
          <h2>Against Evolving Threats 4 </h2>
          <p>
          Get a clear picture of your organization’s security posture and how prepared you are against evolving cyber threats before malicious entities, and apply customized recommendations to improve your security program.

          </p>
          <button className='button'>Identify Cybar Risks Today</button>
         
        </div>
        <div className="right">
          <div className="img-box">
            <img src={img1} alt="img" />
            <div className="afterdot-tag-wrapper   afterdot-tag-wrapper1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#2C235A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M5.75 7.75L8.25 10.25L14.25 3.75" stroke="#FF7222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <Pagination setTabContent={setTabContent} tabContent={tabContent} />
      </section>
    </>
  )
}

export default App
