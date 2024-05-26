import React from "react"
import PhoneInput from "../components/phone-input-component/PhoneInput";

const SignUp = () => {
    return (
        <div className="d-flex align-items-center min-vh-100 bg-tertiary">
            <div className="m-auto px-3 px-sm-0 py-5">
                <div className="w-100 sign-up-form border border-primary rounded">
                    <div className="d-flex justify-content-center row gx-0">
                        <img className="mb-4 sign-up-image" src="https://hipokampus.com.tr/images/logo-228x48.webp" />
                        <p className="h3 mb-3 fw-normal text-center">Sign up</p>
                        <div className="form-floating my-2">
                            <input type="text" className="form-control" id="signUpNameSurname" placeholder="Name surname" required/>
                            <label for="signUpNameSurname">Name surname</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="email" className="form-control" id="signUpEmail" placeholder="Email" required/>
                            <label for="signUpEmail">Email</label>
                        </div>
                        <div className="form-floating mb-2 mt-3">
                            <input type="password" className="form-control sign-up-password" id="signUpUsername" placeholder="Choose password" required/>
                            <label for="signUpUsername">Choose password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control sign-up-password-check" id="signUpPasswordCheck" placeholder="Confirm password" required/>
                            <label for="signUpPasswordCheck">Confirm password</label>
                        </div>
                        <div className="mb-2">
                            <PhoneInput />
                        </div>
                        <div className="form-check text-start my-4">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="rememberMe" required/>
                            <label type="button" className="form-check-label sign-up-pdpa" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                I have read and accept the PDPA
                            </label>
                            <div className="modal" tabindex="-1" id="signUpModal">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-center fw-bold h4">PDPA INFORMATION TEXT</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body p-4">
                                            <strong>1. PRIVACY POLICY</strong><br /><br />

                                            Dear user, this disclosure and explicit consent text has been prepared and presented to your information by HIPOKAMPÜS Inc. ("Company") or a third-party company designated by our Company, in accordance with the Law No. 6698 on the Protection of Personal Data ("PDPL") and related legislation, for the purpose of fulfilling our Company's obligation to inform and obtain your explicit consent during the provision of internet public access.<br /><br />

                                            By agreeing to the terms and conditions of this disclosure, the Data Subject will have accepted that their personal data will be processed by the Company within the framework of the PDPL by ticking the box that says "I consent to the use of my personal data as stated in the disclosure and explicit consent text." Moreover, the Company hereby declares, accepts, and commits to act in compliance with the PDPL and any other legal regulations that are or will be enacted based on the PDPL, and to fulfill all legal obligations.<br /><br />

                                            <strong>2. YOUR PROCESSED PERSONAL DATA</strong><br /><br />

                                            The following personal data obtained with your explicit consent are processed by our Company:<br />
                                            • Identity Information: First name, last name, date of birth,<br />
                                            • Contact Information: Phone number, email address,<br />
                                            • Data Traffic Information: Records of activities carried out on the internet, temporary or permanent IP address, target IP address, connection date-time information, requested page address, transaction information, result information, and all other internet access records,<br />
                                            • Other Information: Areas of interest, occupational information.<br /><br />

                                            <strong>3. METHOD AND LEGAL BASIS FOR COLLECTING PERSONAL DATA</strong><br /><br />

                                            Your personal data is obtained by our Company through the box that users may choose to fill out or are obliged to fill out before internet access, indicating their explicit consent to the processing of their data for the purposes stated in this disclosure and explicit consent text, as well as for fulfilling legal obligations as prescribed by Law No. 5651 on the Regulation of Publications Made on the Internet and Combating Crimes Committed Through These Publications, the Regulation on Internet Mass Use Providers published in the Official Gazette dated April 11, 2017, and related legislation.<br />
                                            Your obtained Identity, Contact, Data Traffic, and Other Information are processed in electronic and physical environments, with necessary administrative and technical measures taken, in accordance with Article 5(1) of the PDPL, based on your explicit consent.<br /><br />

                                            <strong>4. PURPOSES OF PROCESSING YOUR PERSONAL DATA</strong><br /><br />

                                            Your personal data is processed within the scope of the following purposes:<br />
                                            1. Providing or improving the service to the Data Subject<br />
                                            2. Customizing the products and services offered by our Company according to the Data Subject's preferences and needs<br />
                                            3. Planning and/or executing activities for the sale and marketing of products and services<br />
                                            4. Planning processes to maximize the benefits from the offered products or services<br />
                                            5. Managing customer services and relations<br />
                                            6. Fulfilling legal and operational requirements within the scope of commercial relations conducted by our Company and collaborations established with the Data Subject<br />
                                            7. Accessing statistical information for more efficient economic and administrative management of our Company, and for advertising purchases/proper technical analysis/reporting<br />
                                            Your personal data specified in this Disclosure Text will be processed within the scope of your explicit consent, which you provide by approving this Disclosure and Consent Text.<br /><br />

                                            <strong>5. DOMESTIC OR INTERNATIONAL TRANSFER OF YOUR PERSONAL DATA</strong><br /><br />

                                            In accordance with Article 5(2)(1) of the PDPL, based on your explicit consent, your personal data may be shared, processed, and transferred domestically and/or internationally for the purposes of planning and executing our Company's commercial and business strategies, conducting commercial activities by our Company, carrying out necessary studies by our relevant business units, and managing related business processes, ensuring the legal, technical, and commercial business security of our Company and those in business relations with our Company. This includes but is not limited to tax and IT companies, independent audit firms, our shareholders located domestically and internationally, advertising companies, business partners, group companies, telecommunications and electronic communication business partners, domestic/international storage, archiving service providers, database providers, server hosting service providers, data centers, cloud platforms, legally authorized official institutions, and public and private individuals within the framework of the personal data processing conditions and purposes specified in Articles 8 and 9 of the PDPL.<br /><br />

                                            <strong>6. DURATION OF PROCESSING YOUR PERSONAL DATA</strong><br /><br />

                                            Your personal data will be processed for the period prescribed by relevant legislation for storing such data, or if no such period is specified, for as long as necessary for the purposes for which they are processed. Upon the expiration of these periods, your personal data will be deleted, destroyed, or anonymized immediately, either ex officio or upon your request, in accordance with the provisions of the "Regulation on the Deletion, Destruction or Anonymization of Personal Data."<br /><br />

                                            <strong>7. YOUR RIGHTS AS A DATA SUBJECT</strong><br /><br />

                                            Within the framework of the PDPL and other applicable legislation, you have the following rights:<br />
                                            1. To learn whether your personal data is being processed,<br />
                                            2. To request information if your personal data has been processed,<br />
                                            3. To learn the purpose of the processing of your personal data and whether it is being used in accordance with this purpose,<br />
                                            4. To know the third parties to whom your personal data has been transferred, either domestically or internationally,<br />
                                            5. To request the correction of your personal data if it has been incompletely or incorrectly processed,<br />
                                            6. To request the deletion or destruction of your personal data within the framework of the conditions set forth in the PDPL,<br />
                                            7. To request that actions taken under items (5) and (6) be notified to third parties to whom your personal data has been transferred,<br />
                                            8. To object to any result against you that arises from the analysis of the processed data exclusively through automated systems,<br />
                                            9. To claim compensation for damages incurred due to the unlawful processing of your personal data.<br />
                                            To exercise these rights, you can deliver your request along with documents that identify you to our Company located at Akarca Mah. Mustafa Kemal Bulv. No:173/B, Fethiye, Muğla, either by hand with a wet signature or send it to <a href="mailto:info@hipokampus.com.tr">info@hipokampus.com.tr</a> with a registered electronic mail (KEP), secure electronic signature, or mobile signature.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary mx-auto" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/">
                            <button className="btn btn-primary w-100 py-2 my-2" type="submit">
                                Sign up
                            </button>
                        </a>
                    </div>
                </div>
                <span className="d-flex justify-content-center my-4">
                    © 2024 Hipokampus Web Service
                </span>
            </div>
        </div>
    );
};

export default SignUp;
