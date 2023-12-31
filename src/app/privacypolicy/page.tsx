'use client';

import { Container } from '../components/container/Container';

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const { id } = params;
	const data = {
		text: `	<p>
					(Last Updated: December 2023 with effective date 28 December 2023) Please read this
					Privacy Policy carefully to understand our policies and practices regarding your Personal
					Data (as defined below) and how we will treat it.
				</p>
				<p>
					This Privacy Policy applies to Funzai’s games, apps, websites and related services
					(together, the “Services” or “games”, “apps”, “websites” for individual categories). This
					Privacy Policy explains how we, and affiliated companies (collectively, "Funzai" or "we",
					"us", "our") collect, use, secure, and/or disclose end-users’ (“you” or “your”) or
					otherwise processes your personal information when you use our Services.
				</p>
				<p>
					The data controller is Funzai Ltd, with a registered address at N4, S.Khimshiashvili 1,
					Batumi, Ajara
				</p>

				<p>Georgia.</p>

				<h2>1. INFORMATION WE COLLECT AND HOW</h2>

				<p>
					While using our Services, we may ask you to provide us with certain personal data or
					personal information that can be used to identify you (“Personal Data”, or “data” or
					“information” or “Personal Information”). We may also collect Personal Data automatically,
					or from third-party partners or services. The Personal Data we collect includes:
				</p>

				<h3>Basic Identifiers and Contact Information</h3>
				<p>
					We collect some information from you when you provide it to us directly, such as via an
					email or online form, through the support feature embedded in our Services, or through
					another form of inquiry. This information may include your name, email, and phone number.
					If you apply for a job on our website, information you submit may also include a cover
					letter and any details included in your resume or curriculum vitae (CV).
				</p>

				<h3>Device Information</h3>
				<p>
					When you download and use our Services, we automatically collect information on the type
					of device you use, operating system, resolution, application version, mobile device
					identifiers (such as your device ID or advertising ID), language, time zone and IP
					address.
				</p>

				<h3>Usage Information</h3>
				<p>
					We collect information automatically about your activity through our Services (Usage
					Information), such as the date and time you used a service, features you have used, your
					in-app purchase history, subscriptions, your interaction with advertisements, and data
					generated when you use our Services (for example your game progress which may be stored
					with your Apple ID on iCloud for iOS Devices, with your Google Play Games profile for
					Android Devices and with Facebook, in some of our Services).
				</p>

				<h3>Location</h3>

				<p>
					When you download and use our Services, we automatically detect your general location,
					namely country and state through your IP address. We may collect, with your consent if
					applicable, other location information through your IP address, such as the city you are
					in.
				</p>

				<h3>Media and other files</h3>
				<p>
					We may ask for access to your camera in case you want to use certain features of our
					Services. In case you contact us through our in-app support feature and you need to upload
					any media or files as attachments, we shall ask for access to such files.
				</p>

				<h3>Information we obtain from third parties</h3>
				<p>
					We may receive information about you from our third party service providers, who collect
					this information through our Services in accordance with their own privacy policies. A
					list of the third parties that operate in our Services can be found in the APPENDIX B.
				</p>

				<h3>Information we obtain when you connect with third parties</h3>

				<p>
					In cases we provide the option, and you decide, to connect our Services to your account
					with third parties like Apple, Facebook or Google, we may receive certain publicly
					available information about you, as well as any information that you allow or your
					settings enable to be accessed, including your Apple ID, Facebook user ID, Android Gamer
					Name, name and email subject to your permission. If you would like to manage your use of
					“Sign in with Apple” please go to Apple’s website to find out more. If you would like to
					edit the privacy and settings on Facebook, please go to Facebook’s website to find out
					more. If you would like to manage your use of “Sign in with Google Play Games” please go
					to Google’s website to find out more.
				</p>

				<h3>Information we obtain from Facebook</h3>
				<p>
					If you use our Services on Facebook or connect our Services to a Facebook account, we may
					receive any of the information you provide or permit to be provided to us via Facebook.
					Such information may include your user ID and your use of our game, including with whom
					you share our game on Facebook and your email address in case you opt to provide the same
					or wish to contact us for support. The information we receive depends on the Services you
					are using, Facebook's terms of service and privacy policy, your privacy settings, and, if
					applicable, your friends’ privacy settings. If you are uncertain about what information
					Facebook is sharing with us, please go to Facebook’s website to find out more about
					Facebook’s privacy practices.
				</p>

				<p>
					The information we receive from Facebook and other third parties is stored and used by us
					in accordance with this Privacy Policy.
				</p>

				<h3>User generated content we obtain from you</h3>
				<p>
					We may collect content from posts or uploads on social networks or platforms or direct
					contact, subject to your consent if applicable. Such content may include, your name,
					social media username, image, likeness, voice, other identifiable information available in
					such user generated content.
				</p>

				<h3>Cookies and similar data collection technologies</h3>
				<p>
					We and our third party advertising networks and their partners may use cookies and similar
					technologies, such as mobile “SDK”, to provide and personalize our Services and to provide
					targeted advertisements. Some of these technologies can synchronize behavior across
					different mobile apps, devices and websites so that advertisements can be tailored to your
					interests. This process is called personalized advertising. In addition, we and certain
					advertising networks may access your inventory of installed apps to avoid advertising
					already installed apps. If you'd like to opt-out from having advertisements personalized
					in this way on your mobile device, please see the ‘Opt-out of targeted advertising’
					section.
				</p>

				<p>
					Please note that, while your browser settings may allow you to transmit a “Do Not Track”
					signal when you visit the Services, our Services (including apps and websites) are not
					configured to respond to “Do Not Track” signals received from browsers.
				</p>

				<p>
					For more information on how third parties may use tracking technologies in our apps, go to
					APPENDIX A and APPENDIX B.
				</p>

				<h2>2. PURPOSES FOR WHICH WE WILL USE YOUR PERSONAL DATA</h2>
				<p>
					We have set out below a description of the ways in which we use your Personal Data, the
					legal bases we rely upon to do so and to provide you with an option to opt-out of certain
					practices, where applicable. We may use your Personal Data:
				</p>

				<p>
					To provide and maintain our Services, recognize you when you return to our apps, to sync
					your progress across devices when you log in to your account with third parties and
					perform essential business operation, our legal basis for processing is performance of a
					contract with you which you entered into with us when you download our Services and accept
					our End User License Agreement.
				</p>

				<p>
					To allow you to back-up and sync your progress using third party social networks to our
					Services, such as Google Play Games, Apple Game Center or Facebook. Some of our Services
					provide the option to sync and back-up your progress across different devices when you
					log-in through third party social networks. These services are not activated
					automatically, but require explicit authorization by you. Please note that the third party
					social networks mentioned in this section are governed by their own privacy policies,
					terms and end-user agreements and we are not responsible for and have no control over the
					sharing practices or policies of the third parties that operate those sites. Further, when
					you disable the back-up feature, certain information might remain on your device(s) or the
					third party social network. To delete these remaining data, please visit your device’s or
					third party social network settings.
				</p>
				<p>
					To administer and protect our Services (including troubleshooting, data analysis, testing,
					support, fraud, reporting and hosting of data). Our legal basis for processing is
					legitimate interests for running our business, provision of administration and services.
				</p>

				<p>
					To communicate with you about any career requests, contact forms, helpdesk support and to
					understand how you use our Services so that we can continuously improve our offerings. Our
					legal basis is performance of a contract, legitimate interests or consent depending on the
					particular case to keep our users updated about our Services and our new features in
					accordance with your preference, and to continue to improve the Services we offer.
				</p>

				<p>
					To opt-out of communication with us for our Services, send us your request through the
					online contact us support feature.
				</p>

				<p>
					To perform analytics in order to gain insights into how our users interact with our
					products and services. We use first and third party analytical tools to understand how our
					users interact with our games. It helps us understand how users navigate in our games,
					what features they use, what actions they take, how long they play the game and how often
					they return. This helps us get insights into which parts of our games are popular and
					which parts need improvement. It also helps us understand what brought our users to our
					games and what keeps users engaged. With this information, we can give users a better
					experience (like making changes to our gameplay experience, changing annoying features, or
					troubleshooting bugs and problems).
				</p>

				<p>
					Depending on your local privacy laws, to opt-out or withdraw your consent from processing
					of your information for Analytic Purposes, see the “EXERCISE YOUR PRIVACY RIGHTS” section
					below.
				</p>

				<p>
					To cross-advertise our Services and products and to send push notifications for changes to
					our Services, to allow you to participate in new features of our Services when you choose
					to do so. Our legal basis is legitimate interests to be able to advertise our Services and
					products to our users and keep our users updated about our Services and our new features
					in accordance with your preference.
				</p>

				<p>
					To opt-out of receiving advertisements for our Services and products, send us a request
					through the in-app support feature, by going to our app Settings (in certain apps you tap
					on the three dots (or more)) -&gt; click help (or support) -&gt; and then click Contact us
					(or +) and send us your request or by going to the app Setting -&gt; About -&gt; and then
					Privacy Preferences.
				</p>

				<p>
					You can opt-out of receiving push notifications by turning them off at the device level
					through the settings of the device.
				</p>

				<p>
					To serve personalized advertisements in our Services using third-party advertising
					networks. Our legal basis is legitimate interests to run our business. However, if you are
					in the European Economic Area, the United Kingdom (the "UK"), Norway, Switzerland or
					Brazil, some of our third-party advertising networks, will rely on your consent to process
					Personal Data in order to provide personalized advertising to you, therefore you will be
					asked whether you consent to the collection of your mobile device advertising identifier
					and IP address so that they can provide a personalized advertisement experience. To
					opt-out or withdraw your consent from receiving personalized advertisements, see the
					‘Opt-out of targeted advertising’ section below.
				</p>

				<p>
					To use user generated content which has been provided by you and such content includes
					Personal Data. Our legal basis is consent which is obtained directly by you from the
					medium (e.g. e-mail, social networks, social platforms) used to obtain such content.
				</p>

				<p>
					You may withdraw your consent by providing us with written notice by email at
					support@funzai.com.
				</p>

				<p>
					To respond to legal proceedings and other obligations or requirements under applicable
					law.
				</p>

				<h2>3. RETENTION OF PERSONAL DATA</h2>

				<p>
					We will retain your Personal Data only for as long as is necessary for the purposes set
					out in this Privacy Policy. We will retain and use your Personal Data to the extent
					necessary to comply with our legal obligations (for example, if we are required to retain
					your data to comply with applicable laws), resolve disputes, provide our Services and
					enforce our legal agreements and policies.
				</p>

				<p>
					We will also retain Personal Data and Usage Information for internal analysis purposes and
					legitimate business interest to the extent necessary to improve the functionality of our
					Services, for business purposes or when we are legally obligated to retain this data for
					longer time periods.
				</p>

				<p>
					Your Personal Data collected through our Services will be retained for as long as
					permitted by applicable law or necessary depending on the respective purpose of collection
					and shall be deleted when they no longer serve one of the above-mentioned purposes or
					shall be anonymized and therefore will no longer constitute Personal Data. It is clarified
					that in no case the retention period should exceed the 5 years from the date of
					collection. Once we have deleted or anonymized your Personal Data, you will not be able to
					exercise the right to access, the right to erasure, the right to rectification or the
					right to data portability.
				</p>

				<h2>4. PURPOSES FOR WHICH WE WILL SHARE YOUR PERSONAL DATA</h2>
				<p>
					We may share the above categories of Personal Data for certain business purposes,
					including:
				</p>

				<p>Storage</p>

				<p>
					Personal Data of our users are stored in our data centers of our third party service
					providers in the USA, Canada and Germany, who act as data processors.
				</p>

				<p>Sharing with our service providers and partners</p>

				<p>
					We use certain service providers and partners to help us operate and improve our Services.
					These service providers and partners assist us with various tasks, including hosting and
					maintenance, on-going development, analytics, customer care and marketing.
				</p>

				<p>
					For certain USA residents, we may also “sell” or “share” your Personal Information, as
					defined under their respective State’s privacy laws, for the purposes set out below. For
					more information about your rights as a US resident, please visit the “SUPPLEMENTAL
					PRIVACY NOTICE AND RIGHTS FOR USA RESIDENTS” section below.
				</p>

				<p>Advertising</p>

				<p>
					We may share your information with advertising partners who distribute advertising in our
					Services. For further information on the advertising networks which may receive this
					information, go to ‘APPENDIX A - Advertising networks and their partners’. If you'd like
					to withdraw consent, or opt-out from having advertisements personalized in this way,
					please see the ‘Opt-out of targeted advertising’ section.
				</p>

				<p>
					In addition to the above, we may share your Personal Data in the following circumstances
					or for the following purposes:
				</p>

				<p>For corporate transactions</p>

				<p>
					We may transfer your information if we are involved, whether in whole or in part, in a
					merger, sale, acquisition, divestiture, restructuring, reorganization, dissolution,
					bankruptcy or other change of ownership or control.
				</p>

				<p>When required by law</p>

				<p>
					We may also share information if we are under a duty to disclose or share your Personal
					Data in order to comply with any legal obligation, or to protect the rights, property, or
					safety of our business, our customers or others.
				</p>

				<p>To enforce legal rights</p>

				<p>
					We may also share information: (i) if disclosure would mitigate our liability in an actual
					or threatened lawsuit; (ii) as necessary to protect our legal rights and legal rights of
					our users, business partners or other interested parties; (iii) to enforce our agreements
					with you; and (iv) to investigate, prevent, or take other action regarding illegal
					activity, suspected fraud or other wrongdoing.
				</p>

				<p>With your consent or at your request</p>
				<p>
					We may ask for your consent to share your information with third parties. In any such
					case, we will make it clear why we want to share the information.
				</p>

				<p>Cross-border data transfers</p>

				<p>
					Sharing of information sometimes involves cross-border data transfers, including transfers
					outside of the EEA in accordance with the law. We only transfer Personal Data to entities
					in third countries that have provided appropriate safeguards to ensure that their level of
					data protection is in agreement with this privacy policy and applicable law, under
					standard contractual provisions which have been deemed by the European Commission to
					provide sufficient safeguards for Personal Data.
				</p>

				<p>Social sharing features</p>

				<p>
					Some of our Services offer social sharing features which let you share actions you take in
					our Services with other media. You must be over the minimum age limit that is prescribed
					by the legislation in the individual jurisdictions to use any social sharing features
					integrated in our Services. The use of such features enables the sharing of information
					with your friends or the public, depending on the settings you establish with the entity
					that provides the social sharing feature. Our Services have social features from the
					following providers:
				</p>

				<p>Facebook - https://www.facebook.com/about/privacy/</p>

				<p>Instagram - https://help.instagram.com/519522125107875?helpref=page_content</p>

				<h2>5. AGE LIMITS</h2>

				<p>
					We appreciate the need to provide extra privacy protections to users who are children. Our
					Services are intended for general audiences over the age of 16 years and therefore
					children under the age of 16 years old (or older pursuant to applicable jurisdiction)
					should not download or use our Services. We do not knowingly collect personal information
					from children. If you believe that we may have collected personal information from a
					device of a child under the age of 16 years old (or otherwise as applicable), or for any
					other relevant reason, please send us a request for deletion and restriction of processing
					of Personal Data and opt-out from targeted advertising using the in-app Privacy Settings (
					for our apps go to the app -&gt; Setting -&gt; Privacy Preferences.
				</p>

				<h2>6. LINKS TO OTHER SITES​</h2>

				<p>
					Our Privacy Policy may contain links to other sites that are not operated by us. If you
					click on a third-party link, you will be directed to that third party's site. We strongly
					advise you to review the privacy terms of every site you visit. We have no control over
					and assume no responsibility for the content, privacy terms or practices of any
					third-party sites or services.
				</p>

				<h2>7. YOUR RIGNTS AND OPTIONS</h2>
				<p>
					Under the General Data Protection Regulation (GDPR), you have certain rights regarding
					your personal data. These rights include:
				</p>

				<p>
					Right to access: You have the right to request access to the personal data we hold about
					you.
				</p>

				<p>
					Right to rectification: You have the right to request that we correct any inaccuracies in
					your personal data.
				</p>

				<p>
					Right to erasure: You have the right to request that we delete your personal data in
					certain situations.
				</p>

				<p>
					Right to restrict processing: The right to require us to restrict processing of your
					personal data in certain circumstances, eg if you contest the accuracy of the data
				</p>

				<p>
					Right to data portability: You have the right to receive your personal data in a
					structured, commonly used and machine-readable format, and to transmit that data to
					another data controller.
				</p>

				<p>
					Right to object: You have the right to object to the processing of your personal data in
					certain circumstances, including where we use your personal data for direct marketing
					purposes or in certain other situations to our continued processing of your personal data,
					e.g. processing carried out for the purpose of our legitimate interests.
				</p>

				<p>
					The right not to be subject to a decision based solely on automated processing (including
					profiling) that produces legal effects concerning you or similarly significantly affects
					you
				</p>

				<p>
					In addition to the above rights, you also have the option to withdraw consent if we are
					processing your personal data based on your consent, at any time.
				</p>

				<p>
					To exercise any of these rights, please follow the instructions under the “EXERCISE YOUR
					PRIVACY RIGHTS” section found below, and follow the necessary steps. Please note that
					exercising some of these rights may impact our ability to provide our services to you. We
					will inform you of any such impact when you make a request to exercise your rights.
				</p>

				<h2>8. SUPPLEMENTAL PRIVACY NOTICE AND RIGHTS FOR USA RESIDENTS</h2>
				<p>
					We are committed to protecting your privacy and ensuring that your personal information is
					handled in accordance with applicable privacy laws in the United States, including the
					California Consumer Privacy Act, Virginia Consumer Data Protection Act, the Colorado
					Privacy Act and the Connecticut Data Privacy Act (“US Privacy Laws”). For more information
					about specific states, please visit their relative section below.
				</p>

				<p>
					To exercise any other rights conferred under US Privacy Laws, please follow the
					instruction under the “EXERCISE YOUR PRIVACY RIGHTS” section found below, and follow the
					necessary steps.
				</p>

				<p>
					We aim to respond to your request for access or deletion within 45 days of receiving that
					request. If we require more time, we will inform you of the reason and extension period in
					writing. If we cannot satisfy your request, we will respond to you with our justification
					for declining to take action. If you wish to appeal this decision, you can contact us
					through the method provided in “Contact Us” below.
				</p>

				<h3>CALIFORNIA</h3>
				<p>
					This Supplemental California Privacy Notice only applies to our processing of personal
					information that is subject to the California Consumer Privacy Act (“CCPA”). The
					California Consumer Privacy Act (“CCPA”), as amended and expanded by the California
					Privacy Rights Act (“CPRA”) provides California residents with the additional rights
					listed here. To exercise these rights, see the “EXERCISE YOUR PRIVACY RIGHTS” subsection
					below.
				</p>

				<p>Right to know what personal information is collected (Right of Access)</p>

				<p>
					You have the right to know and see what information we have collected about you over the
					past 12 months, including:
				</p>
				<ul>
					<li>The categories of information we have collected about you;</li>
					<li>The categories of sources from which the information is collected;</li>
					<li>The business or commercial purpose for collecting your information;</li>
					<li>The categories of third parties with whom we have shared your information; and</li>
					<li>The specific pieces of information we have collected about you.</li>
				</ul>

				<p>
					For more information about specific pieces of information we collect, please visit the
					“INFORMATION WE COLLECT AND HOW” section above.
				</p>

				<p>Right to Delete</p>

				<p>
					You have the right to request that we delete the information we have collected from you
					(and direct our service providers and third parties where your information has been “sold”
					or “shared” to do the same), unless this proves impossible or involves disproportionate
					effort. There are a number of exceptions, however, that include, but are not limited to,
					when the information is necessary for us or a third party to do any of the following:
				</p>
				<ul>
					<li>Complete your transaction;</li>
					<li>Provide you a good or service;</li>
					<li>Perform a contract between us and you;</li>
					<li>Protect your security and prosecute those responsible for breaching it;</li>
					<li>Fix our system in the case of a bug;</li>
					<li>Protect the free speech rights of you or other users;</li>
					<li>
						Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546
						et seq.);
					</li>
					<li>
						Engage in public or peer-reviewed scientific, historical, or statistical research in the
						public interests that adheres to all other applicable ethics and privacy laws;
					</li>
					<li>Comply with a legal obligation; or</li>
					<li>
						Make other internal and lawful uses of the information that are compatible with the
						context in which you provided it.
					</li>
				</ul>

				<p>Right to Opt-out</p>

				<p>
					You have the right to “opt-out,” or direct us to stop “selling” or otherwise sharing your
					information with third parties in exchange for monetary or other valuable consideration.
					To submit an opt-out request, please follow the instructions under the ‘Opt-out of
					targeted advertising’ paragraph found below, to configure the Privacy Setting in any of
					our apps or by checking your device privacy settings.
				</p>

				<p>Other Rights</p>

				<p>
					You can request certain information about our disclosure of your information to third
					parties for their own direct marketing purposes during the preceding calendar year (to the
					extent we have shared information for such purposes within the given period). This request
					is free and may be made once a year. In certain cases, you may also have the right to
					correct inaccurate personal information we hold about you. You also have the right not to
					be discriminated against for exercising any of the rights listed above.
				</p>

				<h2>COLORADO, CONNECTICUT AND VIRGINIA</h2>

				<p>
					This Supplemental Privacy Notice only applies to our processing of personal information of
					personal data that is subject to the Virginia Consumer Data Protection Act (“VCDPA”), the
					Colorado Privacy Act (“CPA”) and the Connecticut Data Privacy Act (“CDPA”). These State
					Laws provide their respective state’s residents with certain rights listed here. To
					exercise these rights, see the “EXERCISE YOUR PRIVACY RIGHTS” subsection below.
				</p>

				<h3>Right of Access</h3>

				<p>
					You have the right to request from us to confirm whether or not we are processing their
					personal data and to obtain a copy of the personal data that you have previously provided
					to us in a portable and, to the extent technically feasible, readily usable format.
				</p>

				<h3>Right of Rectification</h3>

				<p>
					Depending on your area, you have the right to request that we correct inaccuracies in
					their personal data, taking into account the nature of the personal data and the purposes
					of the processing of your personal data
				</p>

				<h3>Right of Erasure</h3>

				<p>
					You have the right to request that we delete the information we have collected from you.
				</p>

				<h3>Right to object / Right to opt-out</h3>

				<p>
					You have the right to “opt-out,” from targeted advertising, to the sale of your personal
					data, or depending on your state, to profiling in furtherance in decisions that produce
					legal or similarly significant events. To submit an opt-out request, please follow the
					instructions under the ‘Opt-out of targeted advertising’ paragraph found above, to
					configure the Privacy Setting in any of our apps or by checking your device privacy
					settings.
				</p>

				<h3>Non Discrimination</h3>

				<p>
					In certain states, residents have the right not to receive discriminatory treatment by us
					for the exercise of their rights conferred by the US State Laws.
				</p>

				<h2>9. EXERCISE YOUR PRIVACY RIGHTS</h2>
				<p>
					To exercise your rights, please visit the Privacy Rights tab in any of our apps by
					navigating to your app’s homepage, clicking on the Gear Icon (three dots or more), then
					selecting Privacy Rights to choose the specific rights you wish to exercise.
					Alternatively, you can reach out to us through the support feature in our apps by going to
					your app’s homepage, clicking on the Gear Icon, selecting help or support, and then
					initiating a conversation by clicking the Start Conversation button.
				</p>
				<p>
					Additionally, you have the option to contact us via email at policy@funzai.com. However,
					please note that we might redirect you to use the in-app support feature where your
					identification is easier to achieve, or request additional information to facilitate your
					request. All requests are free of charge and will be promptly addressed, typically within
					one month.
				</p>

				<p>
					You may also contact your local data protection authority within the European Economic
					Area or the UK or a relevant national authority for unresolved complaints.
				</p>

				<p>Opt-out of targeted advertising</p>
				<p>
					To show you personalized advertisements in our apps we use third-party advertising
					networks and their partners, including those that need your consent and are listed in
					'APPENDIX A - Advertising networks and their partners’, to deliver advertisements that are
					tailored to you based on a determination of your characteristics or interests. To do so
					they use personal and non-personal information such as advertising identifiers i.e. the
					Android advertising ID and/or Apple's ID for advertising (IDFA), device data and/or other
					tracking technologies to enable and optimize this advertising procedure.
				</p>

				<p>
					You can opt-out from personalized advertisement experience, at any time by checking the
					Privacy Setting tab in any of our apps or under the privacy settings of your iOS or
					Android device.
				</p>

				<p>Method 1 (depending on your local privacy laws) - App Settings:</p>
				<ol>
					<li>Open app Settings</li>
					<li>Select Privacy Preferences (or “Do Not Sell or Share my Personal Information”)</li>
					<li>
						Click on “Withdraw Consent to All", and then click Confirm Choices (Android) or Save &
						Exit (iOS)
					</li>
				</ol>
				<p>Method 2 - Device Settings:</p>

				<ol>
					<li>For iOS 14 and later:</li>
					<li>Open device Settings</li>
					<li>Select Privacy (& Security)</li>
					<li>
						Select Tracking and disable "Allow Apps to Request to Track" or disable permissions for
						specific app
					</li>
				</ol>

				<p>For iOS 13 and older:</p>

				<ol>
					<li>Open device Settings</li>
					<li>Select Privacy</li>
					<li>Select Advertising and enable "Limit Ad Tracking"</li>
				</ol>

				<p>For Android:</p>
				<ol>
					<li>Open device Settings</li>
					<li>Select Google</li>
					<li>
						Select Ads and enable "Opt out of Ads Personalization" or "Delete advertising ID"
						accordingly.
					</li>
				</ol>

				<p>
					When you choose to opt-out, advertising networks will consider this choice as a withdrawal
					of consent to personalized advertisement experience and they will show contextual
					advertisements and not personalized advertisements based on your interests.
				</p>

				<p>
					Note: Irrespective of your choice and/or your device settings, you will continue to see
					non-customized advertising (e.g. “contextual” advertising) and you may continue to receive
					personalized ads from our third-party ad networks that obtain your consent on other apps
					and/or websites. For more information go to 'APPENDIX A - Advertising networks and their
					partners’.
				</p>

				<p>Opt-out of analytics (depending on your local privacy laws)</p>
				<p>
					To perform analytics in our apps we use first and third party analytic tools in order to
					gain insights into how our users interact with our products and services. To do so, we use
					personal and non-personal information such as device identifiers, device data and/or other
					tracking technologies to enable and optimize this procedure.
				</p>

				<p>
					For third-party analytics, in countries where the applicable laws and regulations require
					us to do so, your consent is the legal basis for processing. For more information about
					our third party partners, please visit “APPENDIX B - Analytics and other service
					providers”.
				</p>

				<p>
					On the other hand, we collect user data for our own internal analytics tools, which is
					based on our legitimate interest to create better games and provide a more enjoyable
					experience for our users. The data collected is solely used for the purpose of our own
					analytics tool and is not shared with any third parties.
				</p>

				<p>
					You can withdraw your consent or object to the processing based on legitimate interests
					for analytics purposes, at any time by checking the Privacy Setting tab in any of our
					apps.
				</p>

				<p>Method (depending on your local privacy laws) - App Settings:</p>
				<ol>
					<li>Open app Settings</li>
					<li>Select Privacy Preferences</li>
					<li>
						Select “View Partners” and scroll until you reach the analytics section where you can
						change your preferences
					</li>
				</ol>

				<h2>10. CHANGES TO THIS PRIVACY POLICY</h2>

				<p>
					This Privacy Policy may change from time to time, and we encourage you to review it
					periodically. Your continued use of our Services signifies your acceptance of changes to
					this Privacy Policy.
				</p>

				<p>
					In some cases, we may notify you of changes to this Privacy Policy with a prominent notice
					on our Services (for example by way of notification or pop-up), before the changes become
					effective and update the "effective date" at the top of this Privacy Policy.
				</p>

				<h2>11. CONTACT US</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact us using the in-app
					support feature in our Services, which is the preferred method to be able to quickly
					respond your requests or contact our data protection officer at the address provided
					below:
				</p>

				<p>
					Funzai LLC <br />
					N4, S.Khimshiashvili 1 <br />
					Batumi, Ajara <br />
					Georgia <br />
					policy@funzai.com <br />
					https://jamazing.band/privacy-appendixes <br />
				</p>

				<h3>APPENDIX A - Advertising networks and their partners</h3>
				<p>(Last Updated: December 2023 with effective date 28 December 2023)</p>

				<p>
					For personalized advertising, the advertising networks and their partners, that are listed
					below, and would like your consent, if you reside in EEA, the UK, Norway, Switzerland or
					Brazil, unless they have another legal basis for processing, may collect or receive device
					information from our apps and other apps that include personal and non-personal
					information, such as advertising (or ad) identifiers, IP address, or other information
					regarding the delivery of advertisements and your interaction with them, inventory of
					installed apps and/or other tracking technologies to provide measurement services,
					personalization, ad selection, content selection, delivery, reporting and optimize
					targeted ads. Ad identifiers are non-permanent device identifiers such as the Android
					advertising ID and/or Apple's ID for advertising (IDFA). For more information on how to
					opt-out go to Privacy Policy further above. In addition, the advertising networks listed
					below, with the exception of Fyber, Index Exchange and PubNative who act as data
					processors upon our instructions, are independent data controllers in respect of your
					Personal Data and you can learn more about how each handles your data by accessing their
					respective privacy notices using the hyperlinks below.
				</p>

				<h3>AdColony</h3>
				<p>AdColony is an advertising service provided by AdColony Inc. (US).</p>
				<p>Privacy Policy: https://www.adcolony.com/privacy-policy/</p>

				<h3>Amazon Developer</h3>
				<p>Amazon Developer is an advertising service provided by Amazon, Inc. (US).</p>
				<p>Privacy Policy: https://aws.amazon.com/privacy/</p>

				<p>
					You can manage your personalized ad preferences in relation to Amazon directly from your
					Amazon account here: https://www.amazon.com/adprefs
				</p>

				<h3>AppLovin and Applovin MAX</h3>
				<p>
					AppLovin is an advertising service and Applovin Max is an advertising mediation platform
					provided by AppLovin Corporation (US)
				</p>
				<p>Privacy Policy: https://www.applovin.com/privacy</p>

				<h3>BidMachine</h3>
				<p>BidMachine is an advertising service provided by BidMachine Inc. (US)</p>
				<p>Privacy Policy: https://bidmachine.io/privacy-policy/</p>

				<h3>Criteo</h3>
				<p>Criteo is an advertising service provided by Criteo GmbH.</p>
				<p>Privacy Policy: https://www.criteo.com/privacy/</p>

				<h3>Epsilon</h3>
				<p>
					Epsilon (formerly known as Conversant) is an advertising service provided by Epsilon
					International UK Ltd, which is part of the Publicis Groupe (France).
				</p>
				<p>Privacy Policy: https://www.epsilon.com/emea/privacy-policy-services</p>

				<h3>Facebook Audience Network</h3>

				<p>
					Facebook Audience Network is an advertising service provided by Facebook, Inc. (US) that
					may collect or receive information from our apps and other apps and use that information
					to provide measurement services and targeted ads. Facebook does not require opt-in or
					opt-out signals from users in our Services, relevant signals are collected directly from
					the user upon creating an account in such service, except for users who are based in
					California and exercise their right to opt-out.
				</p>
				<p>Privacy Policy: https://www.facebook.com/about/privacy/</p>

				<p>
					You can manage your personalized ad preferences in relation to Facebook directly from your
					Facebook account.
				</p>

				<h3>Fyber</h3>
				<p>Fyber is an advertising service provided by Digital Turbine</p>
				<p>Privacy Policy: https://www.digitalturbine.com/privacy-policy/</p>

				<h3>Google Advertising Products</h3>

				<p>
					The Google Advertising Products encompasses a range of advertising tools such as
					AdManager, AdMob, and AdSense, offered by Google, its affiliates, and partners. To learn
					about how Google Advertising Products handle collected information, please refer to
					Google's Privacy Policy at https://policies.google.com/privacy. Adjustments to your
					advertising preferences can be made by visiting the following link:
					https://myadcenter.google.com/home?hl=en&sasb=true&ref=ad-settings.
				</p>

				<h3>Index Exchange</h3>

				<p>Index Exchange is an advertising service provided by Index Exchange Inc.(Canada)</p>
				<p>Privacy Policy: https://www.indexexchange.com/privacy/</p>

				<h3>InMobi</h3>
				<p>InMobi is an advertising service provided by InMobi PTE Ltd (Singapore)</p>
				<p>Privacy Policy: https://www.inmobi.com/privacy-policy/</p>
				<p>Opt-out: https://www.inmobi.com/page/opt-out/</p>

				<p>ironSource</p>
				<p>ironSource is an advertising service provided by ironSource Mobile Ltd (Israel)</p>

				<p>
					Privacy Policy:
					https://developers.is.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/
				</p>
				<p>Liftoff</p>
				<p>Liftoff is an advertising service provided by Liftoff, Inc. (US) </p>
				<p>Privacy Policy: https://liftoff.io/privacy-policy/</p>
				<p>Opt-Out: https://vungle.com/opt-out/</p>
				<p>LoopMe and partners</p>
				<p>LoopMe is an advertising service provided by LoopMe Limited (UK). </p>
				<p>Privacy Policy: https://legal.loopme.com/privacy-center#contract-hyartvn1o</p>
				<p>Minute Media</p>
				<p>Minute Media is an advertising service provided by Pro Sportority (Israel) Ltd </p>
				<p>Privacy Policy: https://www.minutemedia.com/policies/privacy-policy </p>
				<p>Mintegral</p>
				<p>
					Mintegral is an advertising service provided by Adlogic Technology Pte. Ltd (Singapore){' '}
				</p>
				<p>Privacy Policy: https://www.mintegral.com/en/privacy/</p>
				<p>MobileFuse</p>
				<p>MobileFuse is an advertising service provided by MobileFuse LLC. (US) </p>
				<p>Privacy Policy: https://mobilefuse.com/privacy-policy/ </p>
				<p>Note: It is used only for users in the US.</p>
				<p>Moloco</p>
				<p>Moloco is an advertising service provided by Moloco, Inc. </p>
				<p>Privacy Policy: https://www.moloco.com/advertising-policy</p>
				<p>Ogury</p>
				<p>Ogury is an advertising service provided by Ogury Ltd (UK) </p>
				<p>Privacy Policy: https://ogury.com/privacy-policy/</p>
				<p>OpenX</p>
				<p>OpenX is an advertising service provided by OpenX Software Ltd (US) </p>
				<p>Privacy Policy: https://www.openx.com/legal/privacy-policy/</p>
				<p>Pangle</p>
				<p>Pangle is an advertising service provided by Bytedance Pte. Ltd. (Singapore) </p>
				<p>Privacy Policy: https://www.pangleglobal.com/privacy</p>
				<p>
					Data of users based in the Chinese Mainland is processed by Shanghai Jinri Toutiao
					Technology Co., Ltd/Chuanshanjia whose:{' '}
				</p>
				<p>Privacy Policy is available at https://www.pangle.cn/en/privacy/partner </p>
				<p>Compliance Guide is available at: https://www.pangle.cn/terms/compliance-guide</p>
				<p>PubMatic</p>
				<p>PubMatic is an advertising service provided by PubMatic,Inc. (US) </p>
				<p>Privacy Policy: https://pubmatic.com/legal/privacy-policy/ </p>
				<p>Opt-out: https://pubmatic.com/legal/opt-out/</p>
				<p>PubNative</p>
				<p>PubNative is an advertising service provided by Verve Group Europe GmbH (Germany) </p>
				<p>Privacy Policy: https://pubnative.net/privacy-notice/</p>
				<p>Rise Engage</p>
				<p>Rise Engage is an advertising service provided by TypeA Holdings Ltd (Israel).</p>
				<p>Privacy Policy: https://risecodes.com/video-advertisement-player-privacy-policy/</p>
				<p>Rubicon Project</p>
				<p>Rubicon Project is an advertising service provided by Magnite, Inc. (US) </p>
				<p>Privacy Policy: https://www.magnite.com/legal/advertising-technology-privacy-policy/</p>
				<p>Sharethrough</p>
				<p>Sharethrough is an advertising service provided by Sharethrough Inc (Canada). </p>
				<p>Privacy Policy: https://www.sharethrough.com/privacy-center/consumer-privacy-notice</p>
				<p>Smaato and their vendors</p>
				<p>Smaato is an advertising service provided by Smaato, Inc. (US) </p>
				<p>
					Privacy Policy: https://www.smaato.com/privacy/ For more information on the Smaato
					Vendors, please visit: https://www.smaato.com/partner-list/
				</p>
				<p>Smart</p>
				<p>Smart is an advertising service provided by Smart Adserver SAS (France) </p>
				<p>Privacy Policy: https://smartadserver.com/end-user-privacy-policy/</p>
				<p>Tappx</p>
				<p>Tappx s an advertising service provided by TAPPCELERATOR MEDIA, S.L (Spain) </p>
				<p>Privacy Policy: https://www.tappx.com/legal/privacy-policy</p>
				<p>TripleLift</p>
				<p>TripleLift is an advertising service provided by Triple Lift, Inc. </p>
				<p>Privacy Policy: https://triplelift.com/privacy/</p>
				<p>Unity Ads</p>
				<p>Unity Ads is an advertising service provided by Unity Ads Inc. (US) </p>
				<p>Privacy Policy: https://unity3d.com/legal/privacy-policy</p>
				<p>Verve</p>
				<p>Verve is an advertising service provided by Verve Group, Inc.(US) </p>
				<p>Privacy Policy: https://www.verve.com/privacy-policy/</p>
				<p>Vungle</p>
				<p>Vungle is an advertising service provided by Vungle, Inc. (US) </p>
				<p>
					You can opt-out from Vungle service by following the instructions as described by Vungle
					on their Privacy Policy page: https://vungle.com/privacy/
				</p>
				<p>Xandr</p>
				<p>Xandr is an advertising service provided by Xandr,Inc. (US) </p>
				<p>Privacy Policy: https://www.xandr.com/privacy/platform-privacy-policy/</p>
				<p>Yahoo! Japan</p>
				<p>Yahoo Japan is an advertising service provided by Yahoo Japan Corporation </p>
				<p>Privacy Policy: https://privacy.yahoo.co.jp/en_index.html </p>
				<p>You can opt out: https://btoptout.yahoo.co.jp/optout/index.html </p>
				<p>Note: It is used only for users in Japan.</p>
				<p>Yieldmo</p>
				<p>Yieldmo is an advertising service provided by Yieldmo, Inc. (US) </p>
				<p>Privacy Policy: https://www.yieldmo.com/privacy-policy/</p>
				<p>APPENDIX B - Analytics and other service providers</p>
				<p>
					We use your information to perform our own analytics and to enable analytics provided by
					third parties and other essential functions. We use analytical information for supporting
					business analysis and operations, business intelligence, product development, improving
					the Services, personalizing content, providing advertising, and making recommendations. In
					order to learn about how your information is used by our analytics service providers, you
					can follow the hyperlinks in the list below to each provider’s privacy notice.
				</p>
				<p>Adjust</p>
				<p>Adjust is analytics service provided by Adjust GmbH (Germany) </p>
				<p>Privacy Policy: https://www.adjust.com/privacy-policy/</p>
				<p>AppFigures</p>
				<p>AppFigures is an analytics service provided by AppFigures, Inc. (US). </p>
				<p>Privacy Policy: https://appfigures.com/privacy</p>

				<p>AppsFlyer</p>
				<p>AppsFlyer is analytics service provided by AppsFlyer, Inc (US).</p>
				<p>Privacy Policy: https://www.appsflyer.com/legal/services-privacy-policy/</p>

				<p>AWS</p>
				<p>AWS is cloud computing services provided by Amazon Web Services, Inc. (US).</p>
				<p>Privacy Policy: https://aws.amazon.com/privacy/</p>

				<p>Facebook Ads conversion</p>
				<p>
					Facebook Ads conversion tracking is an analytics service provided by Facebook, Inc. (US)
					that connects data from the Facebook advertising network with actions performed on the
					Services.
				</p>
				<p>Privacy Policy: https://www.facebook.com/about/privacy/</p>

				<p>Facebook Analytics</p>
				<p>
					Facebook Analytics is an analytics tool provided by Facebook, Inc. (US) that may collect
					or receive information from our apps and other apps and use that information to provide
					measurement services.
				</p>
				<p>Privacy Policy: https://www.facebook.com/about/privacy/</p>

				<p>Firebase</p>
				<p>Firebase is an analytics service provided by Google Inc. (US)</p>
				<p>
					You may opt-out of certain Firebase features through your mobile device settings, such as
					your device advertising settings or by following the instructions provided by Google in
					their Privacy Policy: https://www.google.com/intl/en/policies/privacy/
				</p>

				<p>Google Analytics</p>
				<p>Google Analytics is an analytics service provided by Google Inc.</p>
				<p>Privacy Policy: https://policies.google.com/privacy</p>

				<p>
					For more information visit the site “How Google uses data when you use our partners' sites
					or apps” available at https://policies.google.com/technologies/partner-sites
				</p>

				<p>Google reCAPTCHA</p>
				<p>Google reCAPTCHA is a spam protection service provided by Google LLC. (US)</p>
				<p>
					It is primarily used to distinguish whether an input is made by a natural person or
					abusive by automated processing. The service includes sending data required by Google for
					the reCAPTCHA service to Google. Additional information about Google reCAPTCHA and
					Google's privacy policy can be found at https://policies.google.com/privacy.
				</p>
				`,
	};

	return (
		<Container>
			<h1 className="title">PRIVACY POLICY</h1>

			<div
				className="prose max-w-full text-lightGray prose-headings:text-lightGray"
				dangerouslySetInnerHTML={{ __html: data.text }}
			></div>
		</Container>
	);
}
