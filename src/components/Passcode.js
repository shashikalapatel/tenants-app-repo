import React, { useState, useEffect } from "react";

function Passcode({tenantObj}) {
  useEffect(() => {
    const root = document.documentElement;
    //header
    root?.style.setProperty("--headerBackgroundColor", tenantObj.header.headerBackgroundColor);
    root?.style.setProperty("--headerHeight", tenantObj.header.headerHeight);
    root?.style.setProperty("--headerLogoWidth", tenantObj.header.headerLogoWidth);
    root?.style.setProperty("--headerBorderColor", tenantObj.header.headerBorderColor);
    root?.style.setProperty("--headerBorderHeight", tenantObj.header.headerBorderHeight);
    if(tenantObj.header.headerLogoAlignmentCenter == "center") {
    root?.style.setProperty("--headerLogoAlignmentCenter", "flex");
    } else {
    root?.style.setProperty("--headerLogoAlignmentCenter", "");
    root?.style.setProperty("--headerLogoAlignmentLeftRight", tenantObj.header.headerLogoAlignmentCenter);
    }

    //background
    root?.style.setProperty("--backgroundImage", tenantObj.background.backgroundImage);
    root?.style.setProperty("--bgBoxWidth", tenantObj.background.bgBoxWidth);
    root?.style.setProperty("--bgBoxWidthMob", tenantObj.background.bgBoxWidthMob);
    root?.style.setProperty("--bgBoxTopMargin", tenantObj.background.bgBoxTopMargin);
    root?.style.setProperty("--bgBoxPadding", tenantObj.background.bgBoxPadding);
    root?.style.setProperty("--bgBoxColor", tenantObj.background.bgBoxColor);

    //prospectname
    root?.style.setProperty("--prospectnamemargin", tenantObj.background.prospectName.prospectnamemargin);
    root?.style.setProperty("--prospectnamecolor", tenantObj.background.prospectName.prospectnamecolor);
    root?.style.setProperty("--prospectnamefontfamily", tenantObj.background.prospectName.prospectnamefontfamily);
    root?.style.setProperty("--prospectnamefontweight", tenantObj.background.prospectName.prospectnamefontweight);
    root?.style.setProperty("--prospectnamefontsize", tenantObj.background.prospectName.prospectnamefontsize);
    root?.style.setProperty("--prospectnamelineheight", tenantObj.background.prospectName.prospectnamelineheight);
    root?.style.setProperty("--prospectnamefontstyle", tenantObj.background.prospectName.prospectnamefontstyle);
    root?.style.setProperty("--prospectnametextalign", tenantObj.background.prospectName.prospectnametextalign);

    //input
    root?.style.setProperty("--inputwrapperwidth", tenantObj.background.input.inputwrapperwidth);
    root?.style.setProperty("--inputmargin", tenantObj.background.input.inputmargin);
    root?.style.setProperty("--inputheight", tenantObj.background.input.inputheight);
    root?.style.setProperty("--inputfontsize", tenantObj.background.input.inputfontsize);
    root?.style.setProperty("--inputborder", tenantObj.background.input.inputborder);
    root?.style.setProperty("--inputboxshadow", tenantObj.background.input.inputboxshadow);
    root?.style.setProperty("--inputborderradius", tenantObj.background.input.inputborderradius);
    root?.style.setProperty("--inputbackgroundcolor", tenantObj.background.input.inputbackgroundcolor);
    root?.style.setProperty("--inputtextalign", tenantObj.background.input.inputtextalign);

    //label
    root?.style.setProperty("--labelmargin", tenantObj.background.label.labelmargin);
    root?.style.setProperty("--labelcolor", tenantObj.background.label.labelcolor);
    root?.style.setProperty("--labelfontfamily", tenantObj.background.label.labelfontfamily);
    root?.style.setProperty("--labelfontweight", tenantObj.background.label.labelfontweight);
    root?.style.setProperty("--labelfontsize", tenantObj.background.label.labelfontsize);
    root?.style.setProperty("--labelletterspacing", tenantObj.background.label.labelletterspacing);
    root?.style.setProperty("--labellineheight", tenantObj.background.label.labellineheight);


    //btn
    root?.style.setProperty("--btnmargin", tenantObj.background.btn.btnmargin);
    root?.style.setProperty("--btnfontfamily", tenantObj.background.btn.btnfontfamily);
    root?.style.setProperty("--btnfontweight", tenantObj.background.btn.btnfontweight);
    root?.style.setProperty("--btnfontsize", tenantObj.background.btn.btnfontsize);
    root?.style.setProperty("--btnletterspacing", tenantObj.background.btn.btnletterspacing);
    root?.style.setProperty("--btnlineheight", tenantObj.background.btn.btnlineheight);
    root?.style.setProperty("--btnwidth", tenantObj.background.btn.btnwidth);
    root?.style.setProperty("--btnheight", tenantObj.background.btn.btnheight);
    root?.style.setProperty("--btnborderradius", tenantObj.background.btn.btnborderradius);
    root?.style.setProperty("--btnpadding", tenantObj.background.btn.btnpadding);
    root?.style.setProperty("--btntexttransform", tenantObj.background.btn.btntexttransform);
    root?.style.setProperty("--btnborder", tenantObj.background.btn.btnborder);
    root?.style.setProperty("--btncolor", tenantObj.background.btn.btncolor);
    root?.style.setProperty("--btnbackgroundcolor", tenantObj.background.btn.btnbackgroundcolor);
    root?.style.setProperty("--btnhovercolor", tenantObj.background.btn.btnhovercolor);
    root?.style.setProperty("--btnhoverbackgroundcolor", tenantObj.background.btn.btnhoverbackgroundcolor);

    console.log(tenantObj);
  }, []);

  return (
    <div id="common_login_body" className="common_login_body main_body">
      <div className="container-fluid">
        <div id="common_login_container" className="row common_login_container">
          <div className="col-xs-12 no-padding image-logo">
            <img tabIndex="0" alt="Rice University Logo" src={tenantObj.header.headerLogo} className="img-responsive" />
          </div>
          <div className="login_wrapper col-xs-12">
            <div className="col-xs-12 login-body-wrapper no-padding">            
              <form className="col-xs-12 login_form" id="loginForm" name="loginForm" method="POST">	
                <div tabIndex="0"
                  className="col-xs-12 no-padding common_login_prospect_name prospect_name">
                  Access your <span className="report_site_text">Site</span>
                </div>
                <div className="col-xs-12 no-padding user_passcode_wrapper input-field-wrapper">
                  <div className="col-xs-12 no-padding  username_wrapper">
                    <label htmlFor="urlslug" className="username_label">Username:</label> 
                    <input aria-label="Please enter the username"
                      alt="Please enter the username"
                      type="" className="form-control username_input_feild "
                      name="urlslug" id="urlslug" maxLength="20"
                      required={true} placeholder=" " minLength="1" />
                  </div>
                  
                  <div className="col-xs-12 no-padding passcode_wrapper">
                    <label htmlFor="commonloginpasscode" className="passcode_label ">Passcode:</label> 
                    <input aria-label="enter five digit passcode"
                      alt="enter five digit passcode"
                      id="loginPasscode" maxLength="5" autoComplete="off"
                      pattern="[0-9.]+" type="password" name="commonloginpasscode"
                      className="passcode_input_feild  form-control" />
                  </div>
                </div>
                <div className=" col-xs-12 common_login_btn_wrapper button_wrapper">
                  <button aria-label="press enter to Login" type="button"
                    id="login-btn" data-url="/ovrture/genericSiteReportLogin"
                    data-type="3" className="common_login_btn login_btn form-control">
                    <span className="login_text">
                    Log In
                    </span> 
                  </button>
                </div>						
              </form>
              <form className="form-sign-in" noValidate="" action="/ovrture/sites"
                id="showForm" name="showForm" method="POST">
                <input id="siteId" name="uid" type="hidden"/> <input id="reportId" name="reportId" type="hidden"/>
                <input id="siteurl" name="url" type="hidden" />
              </form>
            </div>
            <div tabIndex="0" className="col-md-12 col-xs-12 no-padding footer_wrapper d-none">
              <div className="col-xs-12  footer_info">
                Having trouble logging in? Please <span className="remove_details">call
                  <a href="tel:(999) 999-9999"
                  className="phone_info phone_info_mobonly">(999) 999-9999</a> <br className="mob-only"/>
                  or</span> email <br className="web-only"/><a href="mailto:priya.mathew+rice@techment.com"
                  type="button" className="mail_info">priya.mathew+rice@techment.com</a>.
              </div>            
            <div className="col-xs-12 no-padding policy-wrapper">
            <div className="col-xs-12 policy-wrapper-button">
                          <a href="#" data-toggle="modal" data-target="#policyModal" data-controls-modal="policyModal"
                              data-backdrop="static" data-keyboard="false"><span className="icon-image"><img
                                    className="img-responsive"
                                    src="https://common-assets-relay.s3.us-west-2.amazonaws.com/Rice+University/CORE/lock-icon.svg"
                                    alt="" /></span><p className="privacy_info_text">Privacy & Security</p></a>
                  </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passcode;