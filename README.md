
<h1>PCF Google Maps Street View</h1>
<p>A PCF control to render Google Maps Street View, using the location information for an account (lat/long)</p>
<p>Control is displayed in a Dynamics365 Account card as a seperate tab shown in the picture below.</p>
  
 
<ul>
  <li>The street view maps request for the current accounts lat/long when loaded.</li>
</ul>

<p>NOTE: You will need to provide a Google Maps API Key.</p>
<a href="https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/streetview-simple">Street View Side-By-Side</a>
<br>
<br>
<img src="https://lh3.googleusercontent.com/GEsFcslj-WH4_svisnWUOXj5RH-QL06V4T1_BL96Z4ZnATT-cGR612-7fzaK53RV3qtRrFNnJEORaj2KYHe7TUA3DXX63O4HxyKFGFhZsmu1i9Rgaa1SzN1kr0hqi_5gBB539x6DpoGv3-qb3vs6BfJygmscIRfB31tTd2ieEFZzd6sm3IA7kNTXCXKmrU75aIPFagn530dmgCWLEntnGkj7oInMHnbCgcGxUBedW9t-43aOp4qhbsk4snkXz3lPKJf9MoNid0h294Nwn1eaaOovy4ZgQUOqk57fXXNPzPMdSgYqjdFEYLQLIPO_dj7gYUgawPaNOROC1hzxrA4Hhd8PQ92B6xJwM6q8H_vNCn-S8C2Uq_Kgwt7NTLWUYf4HSdJkqZ7E3t8mnVQJwgDRK77UTnBkwRjPYM_-jMsJggkykn7aPcH39MvLYNtS9QzcmHf7AkG-L-w9f_f3iUvEeDNhniiu_tdnbX_OBvP-b9j_dFIR7lbiNOFthu3_6hoC8arfkOXwyLTq0BGGIPhSNFZe3g-p5VVcGYkOTzpZZiXdUAwGWydf5HBzgxM1LxdAI4xmy_HLyaH6PbMlrfDZPmQ3K35zLCwCEt0BTXKryMV7GNxOTNM1G6klOHuhL3BKcF-Mr2gs69D6GSZJV81UXawZ1ZBjKXq9bK4kiKH8Tb-mWAxLKhiLxz8=w1680-h880-no">

<h2>Configuration</h2>
<p>Use the following steps to configure a Google Maps Street View against a Account Card after installing the solution</p>
<ul>
  <li>
    <p>Create a new "Unmanaged" Account form in entity "Accounts", and insert/add a new tab name it "Google Maps Street View"</p>
      <img src="https://lh3.googleusercontent.com/7fNskJkgq0zxypEsXTNlNSJ1_S63cRFbTKl9vTIqwU_AX9kbqigOooTPJosld-lExPxCj9ln3bWm_e2Qfbs1u__RICalyHHQ0M_mNtMNgyCiHgqFq6sxu3TJslaPjVLgV0rtVy-8_dm1phqajoAbxl83M6H8IhWpmz3xx1asmE2SL-ecXkLMCXaqVxjzlmbvOT7DxVVkZNL5K9843QZ_HE3Qz19t8JSGTkRrb2tYcD_02DTTGeaw_UstfpB6E9GeBhXoqOIWDFQ74FTjJbgvn9jxXKDbEMlHVaA_bHJ__TtiYbhIzSOkwWwKWhpydYoKqcoqqTDvYt7FYWJ3jt0U-lYjNo-zIKg3_LVnPRgPHUYkcUS3RKl9lP8oLWT9DlfatfFrPB337PmfXd7-u5y-5J6hKVJ7WPFf5jvNchIAyLPF-ztkbuXpkQtDS9Q48IOF3_tlSD2-TY0PfsNn67N3-un0sQiV0LU4z1-M2-NnYn_HsXev9JEycQCFHdjY17R5dDz5Vy3PHAIalm4LczvCbc7ociFZh9SGGsCjhn3-P27JgkdKWqxkAEhnAEFdmT7RpOT2v21QF_PhLUr5BZM9VTP5iBzLbTZ4lNWulOGBoJ2TIoIOPp9hjXdSn4dzZ8FNknwahbve6yq0Emt46gZvGTQq5wDC51no66NSQW5Z-4SytSBSwYKuips=w1673-h857-no">
  </li>
  <li>
    <p>Add a field "Adress 1 Street 1" in my case</p>
    <img src="https://lh3.googleusercontent.com/Ezp_rmj0ubdUE21hnRidhCC-3vsFvMCFv3rCie4Xx4qBhfiyw9DushPGQvo0xIKZVDGB-qpwRrFJXf1Kp717ZDyxG2bZ_g4Psc-TG4Cp3C8gQZn2q6-vVP1dBWHF3Xs0k-YqoSyBaXi3HNz754SB9C62aoDT1ctw41MjsffbIG0NbPby_0AwmC1gvMOGmPrC_YsLhOY40ZU9LP-FypXzuTefEkBfmso426hr46FwQbiNjn3uz5dzeMOEI5ELqFMFG8Gshit_IhCLZPJZUoWWvGdWf7eqtP0AXo8ozvoI0lCvT-1LUOfrjd0Ruzqnq5rHnOEOBJcth3Bek5_ZysjgwnwzFqQ4QFjbP9HH2voJJE6flepotD9kkAkGzmILxzUFvZXXvTUa7-XiYOloGqncOvv8w_gnxH3JEVg4Qh07q-LBq9--e0azmMPJ5OXEYlElpxg3lNXC2nrtWGuJKlD0PXf0rHZiHgHx3NFQS871FRMsrKKeql21JBFQJgcbCbcdtVbM7Twt05-SAQoh6kT5lQP8R8UdeP7KoFc-QOreLqDMDUvXZZN5SCO1K5X90-_XdNgfujopKNKis4IkXCS_G9Yy18iWiSVuc5r4rbnHilPKyX0vA0sGdAH0dQbcvLa-Tp2TXENPL9EIPpjAgMR8Iy2S5Yc_PNn6p-dgxYPg4ckXQ7CodsmopIM=w591-h729-no">
  </li>
  <li>
    <p>Then add it as a control on the same Field, and remeber to check for the option "Display label on the form" UNCHECK</p>
    <img src="https://lh3.googleusercontent.com/uSYsPEAF2WsopsG9IPcX2yxrV3Qd5OYY-4Su82P6mdWAgPyTpZTs6If-oR5jmGQ4fyOevfKTcMAxgOpsl9GVSOPgSnChZI3-eeuAqIusbp2Nz1Q0k9n7Te-Q9xpZ7eb-pp-dRZ3aMKTRToogH12wiJ7l3bWsgeCDGdyNpzqYSDHkhy6OD7qMVk7k0-N_1CM4bcJijSrTM9ASJXvZOz3bEs70YWWY93jIT8btIH2S6LWC6fZ6HJuPwi5VhBG_MWsfZ8Cw5PtLSe_CwWOjbQnkTsjdLCLjNATvcAxpkiTmF6bFK885MrGXlXvEbJzzxn1C1lisKKTFuH1QLc_gS52rrfrOVjxAXuLQYA6XCt3hRuEjZDuIIVHDfabYk3zPOdB0gaZ6GzF9kDlsOBxeLIVhTtDG-AzRaf81EJ3-a7z-OlMRlc9hzWK9cpgU5AKbSaqX4K43GsJthKvPt35E5WttqeVm3PyYRCURtiEfkGs7Jc8BoTVVXN8BhLmqo5GrTH5ry6gPgpDA-JqaL7Ef2qpT65NQvPAV5Y8Rk27sENSwwpjlYurtsPW87EofzPK8-iXlKnq-nFZMcHJDDe9ThbUyLDK1JKLlxj6UWZgpx-MxeZfyM4G0BL0i0LibQotuswYfSHkiRZ-2aLdbES3iT8bHncYBy6lQiNdaKM8f7Fdb-XwFwe4wfCzR7IJrKz4tBJaSNldWYtVw8M6D1NbI8WoM03gkPnhMYOwvAumrX1UtSpR_lCa0=w597-h725-no">
  </li>
  <li></li>
</ul>
