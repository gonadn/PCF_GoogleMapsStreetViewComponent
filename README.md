
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
<img src="https://lh3.googleusercontent.com/wLNiqIw0KCVW_sD7z2q-3LnmFRCtqmXegEhOW5oAB5u1j_r0b_njlAYBivvpz7QSkwJCl3JbSFeWow5zNGzZOp5IL_rG8Zu1LV9HO2sPWu81e9Wy1UfXFR2soqvU-Melvz4VLVvmMavfBXlcUHeYriJur457uUxz8jnNv1u2SyITU_dWsluWwLUYKcovMh0rHDULCDZJpfkb2XXi0VxWFByyX3QpalxvbgUa5bwJeF5HYhpBmTOkq88SCD9329VJXJSk8ueH1NI_ja1ATiDogf-bQbuCv5ylZI2-3eW6OcYU27C0oIOwOHa_a1YsCrzKLkCFi4Q59xt1vKSzN5ldm5exNdFRZCCPPyNHWTnXe9BDHOTwnNN_fk1zfy3ItDcbmsfafO0fUS025_RdfCNKtL7DLaUsnCvbxSILErpv_zcVHxClcPwbVPpFwp5ODwjz3rrFyHigYVl_rnYXr-T9a4SOBAAG-wZUPmD281mOt1fD3dafnasYZ7LUXrL4mWPU7QL4u29kdE7KSka3jIPw8rGfpGTGlQeGZAWpuDJkvSLRI-KRXpM-CES7rJQ0UXR9NDBhakvPeDB_-KHNQ741aXRwCFnQlwkUELCi9X0-z3B0PFS0tisu_JLi5-B1dtqRBYonhIJwhzqC357iCTwkHK6HPvkBFIxnCtKjp2xe8zAXGpzZNba7Fu_DgPPdu1HuvOrC7lmMtxj-ix20R3KQhVQAttxrj2AyIqeyhI8uVMG1roJQ=w1680-h880-no">

<h2>Configuration</h2>
<p>Use the following steps to configure a Google Maps Street View against a Account Card after installing the solution</p>
<ul>
  <li>
    <p>Create a new "Unmanaged" Account form in entity "Accounts", and insert/add a new tab name it "Google Maps Street View"</p>
      <img src="https://lh3.googleusercontent.com/Q8p9oUoPoEDM3qlqU7oNxJMilEPZZhKVcKfRKIpF2S9eF7rAkx1MlAwQRZ_6uktApPxHCL78A0Vkdx840y-cHVAqbN0atwcQy9QbY5cRGdJPUHHm-ZnAaAyU01mol6UhwyBB8FmYcfC4xCoOgYIi86aPTbqSK4Iwbg25LRHsW-awptUtTnn1B9KpFdIv8fNHy2KX5xj91bROUo-x01RSan80KR_8p1Vwe_VjvpfilbEAuw3jlyFtiPJOq101f4WtzHZ474M65Mw4M8149SCvIfe4pF0wVCxKoOGunN_afiLxrv41FDZKCc-VQT9IoxjqYKKJA9Irzzw9EstmLXgAPq4yZOnJ5anYg3508MdGeNrlzinyfai1OwTwbIJtkJ25UJ_28EyyxqKv4BGPMk80AC0cjBHINhxzPS0RLRSarSGEScUITmk0Y9fTFUhwJV92bN73W5aDVWahT27jW1ZNmWt2qm-vcnWsY8gkOuO1gH8BrKKzjBM-uE_3EOJzIvO7IHniOdGcgfbjepL7Qw_4MZDtGtW61LhVczJOcz0JvfLUgA1SR0XFYF6Thusd69In50bPL57h_zIvgmH3o6UWt4ndNVltPvZRoLrvq7-zw3V4ArsNfAgtRx2NwktqJiYdA0CScmTE3Mel1W5YH2jYkKqiATWSuoHolF4L33PEUp5iR8NdXBH3hJYcqYhPB7JSJ6uUyObT8MfZm8eA933QYAcrWiVe6mN2QQsmzPZbr3LeWy-p=w1673-h857-no">
  </li>
  <li>
    <p>Add a field "Adress 1 Street 1" in my case</p>
    <img src="https://lh3.googleusercontent.com/VIT4_uiZ8hGLZYOu_w-fvsH_cDq4PeK7zylDGP22LekqMMDennuOiLp2CmARK8dDgO3q7UQ4NhxEAApw_K0virgIr37ncDCa4FbXwuKZCnU1UmJDYzRbvs2iC1CQwmeOpuWS1Cpw3FUsYWAqIPRBzLRHoIAwVEGW6dgRTNiIraAolxh_M9HWzYyEKyXPibnmeYKY2lxFGy6KXR2yWGAXyrShHRCZFLXVQbVsal8bzT6-50-F0iQ_MFmuU8ZxwmYqYfkIeKD5isHqitDCVPoyXFtO1hZXo8hRtkuzs5QGlFtyRS6zR6aQ788vGsMLLsnwPE5pvXzb8agqlhAiy9Vo1VFN3WHAr2OMUyDMv4y6Gm_Tagr3BwLt68wTKSNZTVDzuzrcWH23CO__YYudoC5PXZw85c_2fhiaeLIuTjhjF7xO02qxc7jkMqR3zl8MotvMQ7Cu7J2eoC6uKso4kMpRCxqwelPiM07xHvBRllzQ_n0hGj3C_oyeelGRK2cK0pA6aYV-9bWjEe1dTdkG5HI8iWM7fqMg8NMDRyJfwUILXM7axOhlv0EOgC7SWHmb8jXPTK48UHHN2HI8TetdrxUa3WxVCZ5s9h7MsiNknI8gbRAoPKZd1nGyq3gbXJATScVEnvDmoTM910U0_zsmLeXEefEgMmn5ZwP7FRSSpH2NaJ6FXn7CUMjRle2M3p_-Z2PXbUVt5MYlVpGwDuV8ViW-AGCHT3ehv-vo4w52F4_FTA4SDwFR=w591-h729-no">
  </li>
  <li>
    <p>Then add it as a control on the same Field, and remeber to check for the option "Display label on the form" UNCHECK</p>
    <img src="https://lh3.googleusercontent.com/uSYsPEAF2WsopsG9IPcX2yxrV3Qd5OYY-4Su82P6mdWAgPyTpZTs6If-oR5jmGQ4fyOevfKTcMAxgOpsl9GVSOPgSnChZI3-eeuAqIusbp2Nz1Q0k9n7Te-Q9xpZ7eb-pp-dRZ3aMKTRToogH12wiJ7l3bWsgeCDGdyNpzqYSDHkhy6OD7qMVk7k0-N_1CM4bcJijSrTM9ASJXvZOz3bEs70YWWY93jIT8btIH2S6LWC6fZ6HJuPwi5VhBG_MWsfZ8Cw5PtLSe_CwWOjbQnkTsjdLCLjNATvcAxpkiTmF6bFK885MrGXlXvEbJzzxn1C1lisKKTFuH1QLc_gS52rrfrOVjxAXuLQYA6XCt3hRuEjZDuIIVHDfabYk3zPOdB0gaZ6GzF9kDlsOBxeLIVhTtDG-AzRaf81EJ3-a7z-OlMRlc9hzWK9cpgU5AKbSaqX4K43GsJthKvPt35E5WttqeVm3PyYRCURtiEfkGs7Jc8BoTVVXN8BhLmqo5GrTH5ry6gPgpDA-JqaL7Ef2qpT65NQvPAV5Y8Rk27sENSwwpjlYurtsPW87EofzPK8-iXlKnq-nFZMcHJDDe9ThbUyLDK1JKLlxj6UWZgpx-MxeZfyM4G0BL0i0LibQotuswYfSHkiRZ-2aLdbES3iT8bHncYBy6lQiNdaKM8f7Fdb-XwFwe4wfCzR7IJrKz4tBJaSNldWYtVw8M6D1NbI8WoM03gkPnhMYOwvAumrX1UtSpR_lCa0=w597-h725-no">
  </li>
  <li></li>
</ul>
