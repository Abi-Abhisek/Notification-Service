<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE abiword PUBLIC "-//ABISOURCE//DTD AWML 1.0 Strict//EN" "http://www.abisource.com/awml.dtd">
<abiword template="false" xmlns:ct="http://www.abisource.com/changetracking.dtd" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:math="http://www.w3.org/1998/Math/MathML" xid-max="32" xmlns:dc="http://purl.org/dc/elements/1.1/" styles="unlocked" fileformat="1.0" xmlns:svg="http://www.w3.org/2000/svg" xmlns:awml="http://www.abisource.com/awml.dtd" xmlns="http://www.abisource.com/awml.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" version="0.99.2" xml:space="preserve" props="dom-dir:ltr; document-footnote-restart-section:0; document-endnote-type:numeric; document-endnote-place-enddoc:1; document-endnote-initial:1; lang:en-US; document-endnote-restart-section:0; document-footnote-restart-page:0; document-footnote-type:numeric; document-footnote-initial:1; document-endnote-place-endsection:0">
<!-- ======================================================================== -->
<!-- This file is an AbiWord document.                                        -->
<!-- AbiWord is a free, Open Source word processor.                           -->
<!-- More information about AbiWord is available at http://www.abisource.com/ -->
<!-- You should not edit this file by hand.                                   -->
<!-- ======================================================================== -->

<metadata>
<m key="abiword.date_last_changed">Sat Feb 27 13:52:24 2016
</m>
<m key="abiword.generator">AbiWord</m>
<m key="dc.creator">Abhisek Panda</m>
<m key="dc.date">Sat Feb 27 13:52:03 2016
</m>
<m key="dc.format">application/x-abiword</m>
</metadata>
<rdf>
</rdf>
<history version="2" edit-time="1250" last-saved="1456561344" uid="51ef6c1a-dd28-11e5-9fc5-8905b7b8531e">
<version id="2" started="1456561323" uid="3a8d8252-dd2b-11e5-9fc5-8905b7b8531e" auto="0" top-xid="32"/>
</history>
<styles>
<s type="P" name="Normal" followedby="Current Settings" props="font-family:Times New Roman; margin-top:0pt; color:000000; margin-left:0pt; text-position:normal; widows:2; font-style:normal; text-indent:0in; font-variant:normal; font-weight:normal; margin-right:0pt; font-size:12pt; text-decoration:none; margin-bottom:0pt; line-height:1.0; bgcolor:transparent; text-align:left; font-stretch:normal"/>
</styles>
<pagesize pagetype="Letter" orientation="portrait" width="8.500000" height="11.000000" units="in" page-scale="1.000000"/>
<section xid="3" props="page-margin-footer:0.5in; page-margin-header:0.5in">
<p style="Normal" xid="4"><c>#Notification Service:</c></p>
<p style="Normal" xid="1"><c></c></p>
<p style="Normal" xid="2"><c>The web app allows the users to upload a file into “/upload/” directory  and can decide to restrict at max 3 number of sessions from getting the notification .</c></p>
<p style="Normal" xid="5"><c></c></p>
<p style="Normal" xid="6"><c>#Dependencies:</c></p>
<p style="Normal" xid="7" props="text-align:left; dom-dir:ltr"><c>Express &gt;=4.*.*</c></p>
<p style="Normal" xid="9" props="text-align:left; dom-dir:ltr"><c>ejs&gt;=0.0.0</c></p>
<p style="Normal" xid="10" props="text-align:left; dom-dir:ltr"><c>fs&gt;=5.*.*</c></p>
<p style="Normal" xid="11" props="text-align:left; dom-dir:ltr"><c>ejs&gt;=0.0.0</c></p>
<p style="Normal" xid="12" props="text-align:left; dom-dir:ltr"><c>path&gt;=5.*.*</c></p>
<p style="Normal" xid="13" props="text-align:left; dom-dir:ltr"><c>body-parser&gt;=1.*.*</c></p>
<p style="Normal" xid="14" props="text-align:left; dom-dir:ltr"><c>multer&gt;=</c></p>
<p style="Normal" xid="15" props="text-align:left; dom-dir:ltr"><c>socket.io&gt;=</c></p>
<p style="Normal" xid="16" props="text-align:left; dom-dir:ltr"><c>http&gt;=</c></p>
<p style="Normal" xid="19" props="text-align:left; dom-dir:ltr"><c></c></p>
<p style="Normal" xid="20" props="text-align:left; dom-dir:ltr"><c>#Install dependencies:</c></p>
<p style="Normal" xid="21" props="text-align:left; dom-dir:ltr"><c>$npm install</c></p>
<p style="Normal" xid="22" props="text-align:left; dom-dir:ltr"><c></c></p>
<p style="Normal" xid="23" props="text-align:left; dom-dir:ltr"><c>#How to use:</c></p>
<p style="Normal" xid="26" props="text-align:left; dom-dir:ltr"><c></c></p>
<p style="Normal" xid="24" props="text-align:left; dom-dir:ltr"><c>1. Clone the git repo into desired location. </c></p>
<p style="Normal" xid="27" props="text-align:left; dom-dir:ltr"><c>2. Install dependencies using [$npm install]</c></p>
<p style="Normal" xid="28" props="text-align:left; dom-dir:ltr"><c>3. Start the server [$nodejs notify.js]</c></p>
<p style="Normal" xid="29" props="text-align:left; dom-dir:ltr"><c>4. Open the url="localhost:9000/” . {all the files uploaded by the sessions can be viewed.                     at bottom there is upload form and restriction form. and at right-hand-side there is a notification panel }.</c></p>
<p style="Normal" xid="30" props="text-align:left; dom-dir:ltr"><c>5. Upload a file and set restrictions provided the restriction is managed by the connection no. not by user id.</c></p>
<p style="Normal" xid="32" props="text-align:left; dom-dir:ltr"><c>6. The notification about the upload will be shown to rest users except the restricted one’s.  </c></p>
<p style="Normal" xid="17" props="text-align:left; dom-dir:ltr"><c></c></p>
<p style="Normal" xid="18" props="text-align:left; dom-dir:ltr"><c></c><c>    </c></p>
</section>
</abiword>
