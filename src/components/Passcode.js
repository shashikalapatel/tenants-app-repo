import React from 'react';

function Passcode() {
  return (
    <div id="common_login_body" className="common_login_body main_body">
      <div className="container-fluid">
        <div id="common_login_container"
          className="row common_login_container login_container">
          <div className="login_wrapper col-12 float-start no-padding">
            <div className="col-12 float-start login-body-wrapper">
              <form className="login_form" id="loginForm" name="loginForm" method="POST" readOnly>
                <div className="col-12 float-start no-padding">
                  <div tabIndex="0"
                    className="col-12 float-start no-padding common_login_prospect_name prospect_name">
                    Access your <span className="report_site_text">Site</span>:
                  </div>
                </div>
                <div className="col-12 float-start no-padding user_passcode_wrapper input-field-wrapper">
                  <div className="col-12 float-start no-padding  username_wrapper">
                    <label htmlFor="urlslug" className="label">Username:</label> 
                    <input
                      type="" className="form-control username_input_feild "
                      name="urlslug" id="urlslug" maxLength="20"
                      required={true} placeholder=" " minLength="1" />
                  </div>
                  <div className="col-12 float-start no-padding passcode_wrapper">
                    <label htmlFor="commonloginpasscode" className="label">Passcode:</label> 
                    <input aria-label="enter five digit passcode"
                      id="loginPasscode" maxLength="5" autoComplete="off"
                      pattern="[0-9.]+" type="password" name="commonloginpasscode"
                      className="passcode_input_feild  form-control" />
                  </div>
                </div>
                <div className=" col-12 float-start common_login_btn_wrapper button_wrapper">
                  <button tabIndex="0" aria-label="press enter to authenticate" type="button"
                    id="login-btn" data-url="/ovrture/genericSiteReportLogin"
                    data-type="3" className="common_login_btn login_btn form-control">
                    <span className="login_text">LOG IN</span> <span
                      className="hover_login_text">AUTHENTICATE</span>
                  </button>
                </div>
                <div className="col-12 float-start no-padding image-logo">
                  <img tabIndex="0" alt="Lehigh University Logo"
                    src="https://s3-us-west-2.amazonaws.com/common-assets-relay/Lehigh/images/404-logo.png"
                    className=" img-fluid"/>
                </div>
              </form>
              <form className="form-sign-in" noValidate="" readOnly action="/ovrture/sites"
                id="showForm" name="showForm" method="POST">
                <input id="siteId" name="uid" type="hidden"
                  /> <input id="reportId"
                  name="reportId" type="hidden" />
                <input id="siteurl" name="url" type="hidden"/>
              </form>
            </div>
            <div className="col-md-12 col-12 float-start no-padding footer_wrapper">
              <div tabIndex="0"
                className="col-md-12 col-12 float-start no-padding footer_info">
                Having trouble logging in? Please <span className="remove_details d-none">call <a href="tel:(987) 654-3210" className="phone_info">(987) 654-3210</a>
                    or</span> contact the <br className="web-only"/><br className="mob-only"/> System Administrator at <a href="mailto:aftab.ahmad+ubc@techment.com" target="_blank"
                    className="mail_info">aftab.ahmad+ubc@techment.com</a>
              </div>
            </div>
            <div className="col-12 float-start no-padding policy-wrapper">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#policyModal" data-controls-modal="policyModal"
                              data-backdrop="static" data-keyboard="false"><span className="icon-image"><img
                                      className="img-fluid"
                                      src="https://common-assets-relay.s3-us-west-2.amazonaws.com/common/lock-icon-black.svg"
                                      alt="image" /></span><span className="privacy_info_text">Privacy & Security</span></a>
                  </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passcode;