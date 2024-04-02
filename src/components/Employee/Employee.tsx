import React from "react";
const AddEmployee = () => {

    return (
        <>
  <div className="content ">
    <h2 className="mb-2 lh-sm ">Add New Employee form</h2>
    <p className="text-body-tertiary lead mb-2">
      A form UI to enable users to achieve a goal through a series of steps.
    </p>
    <div className="row mb-9  d-flex justify-content-center align-items-center">
      <div className="col-18 col-xxl-6" >
        <div
          className="card shadow-none border my-4"
          data-component-card="data-component-card"
        >
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor="data-anchor">
                  Progress Tab
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav
                  className="nav justify-content-end doc-tab-nav align-items-center"
                  role="tablist"
                >
                 
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="progress-tab-code">
              <pre className="scrollbar" style={{ maxHeight: 420 }}>
                <code className="language-html">
                  &lt;div class="card theme-wizard mb-5"
                  data-theme-wizard="data-theme-wizard"&gt;{"\n"}
                  {"  "}&lt;div class="card-header bg-body-highlight pt-3 pb-2
                  border-bottom-0"&gt;{"\n"}
                  {"    "}&lt;ul class="nav justify-content-between
                  nav-wizard"&gt;{"\n"}
                  {"      "}&lt;li class="nav-item"&gt;&lt;a class="nav-link
                  active fw-semibold" href="#bootstrap-wizard-tab1"
                  data-bs-toggle="tab" data-wizard-step="1"&gt;{"\n"}
                  {"          "}&lt;div class="text-center
                  d-inline-block"&gt;&lt;span
                  class="nav-item-circle-parent"&gt;&lt;span
                  class="nav-item-circle"&gt;&lt;span class="fas
                  fa-lock"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span
                  class="d-none d-md-block mt-1
                  fs-9"&gt;Account&lt;/span&gt;&lt;/div&gt;{"\n"}
                  {"        "}&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"      "}&lt;li class="nav-item"&gt;&lt;a class="nav-link
                  fw-semibold" href="#bootstrap-wizard-tab2"
                  data-bs-toggle="tab" data-wizard-step="2"&gt;{"\n"}
                  {"          "}&lt;div class="text-center
                  d-inline-block"&gt;&lt;span
                  class="nav-item-circle-parent"&gt;&lt;span
                  class="nav-item-circle"&gt;&lt;span class="fas
                  fa-user"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span
                  class="d-none d-md-block mt-1
                  fs-9"&gt;Personal&lt;/span&gt;&lt;/div&gt;{"\n"}
                  {"        "}&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"      "}&lt;li class="nav-item"&gt;&lt;a class="nav-link
                  fw-semibold" href="#bootstrap-wizard-tab3"
                  data-bs-toggle="tab" data-wizard-step="3"&gt;{"\n"}
                  {"          "}&lt;div class="text-center
                  d-inline-block"&gt;&lt;span
                  class="nav-item-circle-parent"&gt;&lt;span
                  class="nav-item-circle"&gt;&lt;span class="fas
                  fa-file-alt"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span
                  class="d-none d-md-block mt-1
                  fs-9"&gt;Billing&lt;/span&gt;&lt;/div&gt;{"\n"}
                  {"        "}&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"      "}&lt;li class="nav-item"&gt;&lt;a class="nav-link
                  fw-semibold" href="#bootstrap-wizard-tab4"
                  data-bs-toggle="tab" data-wizard-step="4"&gt;{"\n"}
                  {"          "}&lt;div class="text-center
                  d-inline-block"&gt;&lt;span
                  class="nav-item-circle-parent"&gt;&lt;span
                  class="nav-item-circle"&gt;&lt;span class="fas
                  fa-check"&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;span
                  class="d-none d-md-block mt-1
                  fs-9"&gt;Done&lt;/span&gt;&lt;/div&gt;{"\n"}
                  {"        "}&lt;/a&gt;&lt;/li&gt;{"\n"}
                  {"    "}&lt;/ul&gt;{"\n"}
                  {"  "}&lt;/div&gt;{"\n"}
                  {"  "}&lt;div class="card-body pt-4 pb-0"&gt;{"\n"}
                  {"    "}&lt;div class="tab-content"&gt;{"\n"}
                  {"      "}&lt;div class="tab-pane active" role="tabpanel"
                  aria-labelledby="bootstrap-wizard-tab1"
                  id="bootstrap-wizard-tab1"&gt;{"\n"}
                  {"        "}&lt;form id="wizardForm1" novalidate="novalidate"
                  data-wizard-form="1"&gt;{"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label text-body"
                  for="bootstrap-wizard-wizard-name"&gt;Name&lt;/label&gt;&lt;input
                  class="form-control" type="text" name="name" placeholder="John
                  Smith" id="bootstrap-wizard-wizard-name" /&gt;&lt;/div&gt;
                  {"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-wizard-email"&gt;Email*&lt;/label&gt;&lt;input
                  class="form-control" type="email" name="email"
                  placeholder="Email address"
                  pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]
                  {"{"}2,4{"}"})+$" id="bootstrap-wizard-wizard-email"
                  /&gt;&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="row g-3 mb-3"&gt;{"\n"}
                  {"            "}&lt;div class="col-sm-6"&gt;{"\n"}
                  {"              "}&lt;div class="mb-2 mb-sm-0"&gt;&lt;label
                  class="form-label text-body"
                  for="bootstrap-wizard-wizard-password"&gt;Password*&lt;/label&gt;&lt;input
                  class="form-control" type="password" name="password"
                  placeholder="Password" id="bootstrap-wizard-wizard-password"
                  data-wizard-password="true" /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-sm-6"&gt;{"\n"}
                  {"              "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label text-body"
                  for="bootstrap-wizard-wizard-confirm-password"&gt;Confirm
                  Password*&lt;/label&gt;&lt;input class="form-control"
                  type="password" name="confirmPassword" placeholder="Confirm
                  Password" id="bootstrap-wizard-wizard-confirm-password"
                  data-wizard-confirm-password="true" /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="form-check"&gt;&lt;input
                  class="form-check-input" type="checkbox" name="terms"
                  checked="checked" id="bootstrap-wizard-wizard-checkbox"
                  /&gt;&lt;label class="form-check-label text-body"
                  for="bootstrap-wizard-wizard-checkbox"&gt;I accept the &lt;a
                  href="#!"&gt;terms &lt;/a&gt;and &lt;a href="#!"&gt;privacy
                  policy&lt;/a&gt;&lt;/label&gt;&lt;/div&gt;{"\n"}
                  {"        "}&lt;/form&gt;{"\n"}
                  {"      "}&lt;/div&gt;{"\n"}
                  {"      "}&lt;div class="tab-pane" role="tabpanel"
                  aria-labelledby="bootstrap-wizard-tab2"
                  id="bootstrap-wizard-tab2"&gt;{"\n"}
                  {"        "}&lt;form id="wizardForm2" novalidate="novalidate"
                  data-wizard-form="2"&gt;{"\n"}
                  {"          "}&lt;div class="row g-4 mb-4"
                  data-dropzone="data-dropzone" data-options='{"{"}
                  "maxFiles":1,"data":[{"{"}
                  "name":"avatar.webp","size":"54kb","url":"assets/img/team"
                  {"}"}]{"}"}'&gt;{"\n"}
                  {"            "}&lt;div class="fallback"&gt;&lt;input
                  type="file" name="file" /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-md-auto"&gt;{"\n"}
                  {"              "}&lt;div class="dz-preview
                  dz-preview-single"&gt;{"\n"}
                  {"                "}&lt;div class="dz-preview-cover d-flex
                  align-items-center justify-content-center mb-2 mb-md-0"&gt;
                  {"\n"}
                  {"                  "}&lt;div class="avatar
                  avatar-4xl"&gt;&lt;img class="rounded-circle
                  avatar-placeholder" src="assets/img/team/avatar.webp"
                  alt="..." data-dz-thumbnail="data-dz-thumbnail"
                  /&gt;&lt;/div&gt;{"\n"}
                  {"                  "}&lt;div class="dz-progress"&gt;&lt;span
                  class="dz-upload"
                  data-dz-uploadprogress=""&gt;&lt;/span&gt;&lt;/div&gt;{"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"              "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-md"&gt;{"\n"}
                  {"              "}&lt;div class="dz-message dropzone-area px-2
                  py-3" data-dz-message="data-dz-message"&gt;{"\n"}
                  {"                "}&lt;div class="text-center
                  text-body-emphasis"&gt;{"\n"}
                  {"                  "}&lt;h5 class="mb-2"&gt;&lt;span
                  class="fa-solid fa-upload me-2"&gt;&lt;/span&gt;Upload Profile
                  Picture&lt;/h5&gt;{"\n"}
                  {"                  "}&lt;p class="mb-0 fs-9
                  text-body-tertiary text-opacity-85 lh-sm"&gt;Upload a 300x300
                  jpg image with &lt;br /&gt;a maximum size of 400KB&lt;/p&gt;
                  {"\n"}
                  {"                "}&lt;/div&gt;{"\n"}
                  {"              "}&lt;/div&gt;{"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-gender"&gt;Gender&lt;/label&gt;&lt;select
                  class="form-select" name="gender"
                  id="bootstrap-wizard-gender"&gt;{"\n"}
                  {"              "}&lt;option value=""&gt;Select your gender
                  ...&lt;/option&gt;{"\n"}
                  {"              "}&lt;option
                  value="Male"&gt;Male&lt;/option&gt;{"\n"}
                  {"              "}&lt;option
                  value="Female"&gt;Female&lt;/option&gt;{"\n"}
                  {"              "}&lt;option
                  value="Other"&gt;Other&lt;/option&gt;{"\n"}
                  {"            "}&lt;/select&gt;&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-wizard-phone"&gt;Phone&lt;/label&gt;&lt;input
                  class="form-control" type="text" name="phone"
                  placeholder="Phone" id="bootstrap-wizard-wizard-phone"
                  /&gt;&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-wizard-datepicker"&gt;Date of
                  Birth&lt;/label&gt;&lt;input class="form-control
                  datetimepicker" type="text" placeholder="d/m/y" data-options='
                  {"{"}"dateFormat":"d/m/y","disableMobile":true{"}"}'
                  id="bootstrap-wizard-wizard-datepicker" /&gt;&lt;/div&gt;
                  {"\n"}
                  {"          "}&lt;div class="mb-2"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-wizard-address"&gt;Address&lt;/label&gt;&lt;textarea
                  class="form-control" rows="4"
                  id="bootstrap-wizard-wizard-address"&gt;&lt;/textarea&gt;&lt;/div&gt;
                  {"\n"}
                  {"        "}&lt;/form&gt;{"\n"}
                  {"      "}&lt;/div&gt;{"\n"}
                  {"      "}&lt;div class="tab-pane" role="tabpanel"
                  aria-labelledby="bootstrap-wizard-tab3"
                  id="bootstrap-wizard-tab3"&gt;{"\n"}
                  {"        "}&lt;form class="mb-2" id="wizardForm3"
                  novalidate="novalidate" data-wizard-form="3"&gt;{"\n"}
                  {"          "}&lt;div class="row gx-3 gy-2"&gt;{"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label" for="bootstrap-wizard-card-number"&gt;Card
                  Number&lt;/label&gt;&lt;input class="form-control"
                  placeholder="XXXX XXXX XXXX XXXX" type="text"
                  id="bootstrap-wizard-card-number" /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-card-name"&gt;Name&lt;/label&gt;&lt;input
                  class="form-control" placeholder="John Doe" name="cardName"
                  type="text" id="bootstrap-wizard-card-name" /&gt;&lt;/div&gt;
                  {"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-card-holder-country"&gt;Country&lt;/label&gt;&lt;select
                  class="form-select" name="customSelectCountry"
                  id="bootstrap-wizard-card-holder-country"&gt;{"\n"}
                  {"                "}&lt;option value=""&gt;Select your country
                  ...&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Afghanistan"&gt;Afghanistan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Albania"&gt;Albania&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Algeria"&gt;Algeria&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="American
                  Samoa"&gt;American Samoa&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Andorra"&gt;Andorra&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Angola"&gt;Angola&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Anguilla"&gt;Anguilla&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Antarctica"&gt;Antarctica&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Antigua and
                  Barbuda"&gt;Antigua and Barbuda&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Argentina"&gt;Argentina&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Armenia"&gt;Armenia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Aruba"&gt;Aruba&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Australia"&gt;Australia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Austria"&gt;Austria&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Azerbaijan"&gt;Azerbaijan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bahamas"&gt;Bahamas&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bahrain"&gt;Bahrain&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bangladesh"&gt;Bangladesh&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Barbados"&gt;Barbados&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Belarus"&gt;Belarus&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Belgium"&gt;Belgium&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Belize"&gt;Belize&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Benin"&gt;Benin&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bermuda"&gt;Bermuda&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bhutan"&gt;Bhutan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bolivia"&gt;Bolivia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Bosnia and
                  Herzegowina"&gt;Bosnia and Herzegowina&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Botswana"&gt;Botswana&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Bouvet Island"&gt;Bouvet
                  Island&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Brazil"&gt;Brazil&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="British Indian Ocean
                  Territory"&gt;British Indian Ocean Territory&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option value="Brunei
                  Darussalam"&gt;Brunei Darussalam&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Bulgaria"&gt;Bulgaria&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Burkina Faso"&gt;Burkina
                  Faso&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Burundi"&gt;Burundi&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Cambodia"&gt;Cambodia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Cameroon"&gt;Cameroon&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Canada"&gt;Canada&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Cape Verde"&gt;Cape
                  Verde&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Cayman
                  Islands"&gt;Cayman Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Central African
                  Republic"&gt;Central African Republic&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Chad"&gt;Chad&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Chile"&gt;Chile&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="China"&gt;China&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Christmas
                  Island"&gt;Christmas Island&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Cocos (Keeling)
                  Islands"&gt;Cocos (Keeling) Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Colombia"&gt;Colombia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Comoros"&gt;Comoros&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Congo"&gt;Congo&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Congo, the Democratic
                  Republic of the"&gt;Congo, the Democratic Republic of
                  the&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Cook Islands"&gt;Cook
                  Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Costa Rica"&gt;Costa
                  Rica&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Cote d'Ivoire"&gt;Cote
                  d'Ivoire&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Croatia
                  (Hrvatska)"&gt;Croatia (Hrvatska)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Cuba"&gt;Cuba&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Cyprus"&gt;Cyprus&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Czech Republic"&gt;Czech
                  Republic&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Denmark"&gt;Denmark&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Djibouti"&gt;Djibouti&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Dominica"&gt;Dominica&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Dominican
                  Republic"&gt;Dominican Republic&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="East Timor"&gt;East
                  Timor&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Ecuador"&gt;Ecuador&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Egypt"&gt;Egypt&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="El Salvador"&gt;El
                  Salvador&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Equatorial
                  Guinea"&gt;Equatorial Guinea&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Eritrea"&gt;Eritrea&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Estonia"&gt;Estonia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Ethiopia"&gt;Ethiopia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Falkland Islands
                  (Malvinas)"&gt;Falkland Islands (Malvinas)&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option value="Faroe Islands"&gt;Faroe
                  Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Fiji"&gt;Fiji&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Finland"&gt;Finland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="France"&gt;France&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="France
                  Metropolitan"&gt;France Metropolitan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="French Guiana"&gt;French
                  Guiana&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="French
                  Polynesia"&gt;French Polynesia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="French Southern
                  Territories"&gt;French Southern Territories&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option
                  value="Gabon"&gt;Gabon&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Gambia"&gt;Gambia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Georgia"&gt;Georgia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Germany"&gt;Germany&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Ghana"&gt;Ghana&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Gibraltar"&gt;Gibraltar&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Greece"&gt;Greece&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Greenland"&gt;Greenland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Grenada"&gt;Grenada&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guadeloupe"&gt;Guadeloupe&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guam"&gt;Guam&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guatemala"&gt;Guatemala&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guinea"&gt;Guinea&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guinea-Bissau"&gt;Guinea-Bissau&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Guyana"&gt;Guyana&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Haiti"&gt;Haiti&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Heard and Mc Donald
                  Islands"&gt;Heard and Mc Donald Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Holy See (Vatican City
                  State)"&gt;Holy See (Vatican City State)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Honduras"&gt;Honduras&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Hong Kong"&gt;Hong
                  Kong&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Hungary"&gt;Hungary&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Iceland"&gt;Iceland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="India"&gt;India&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Indonesia"&gt;Indonesia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Iran (Islamic Republic
                  of)"&gt;Iran (Islamic Republic of)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Iraq"&gt;Iraq&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Ireland"&gt;Ireland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Israel"&gt;Israel&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Italy"&gt;Italy&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Jamaica"&gt;Jamaica&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Japan"&gt;Japan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Jordan"&gt;Jordan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Kazakhstan"&gt;Kazakhstan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Kenya"&gt;Kenya&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Kiribati"&gt;Kiribati&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Korea, Democratic
                  People's Republic of"&gt;Korea, Democratic People's Republic
                  of&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Korea, Republic
                  of"&gt;Korea, Republic of&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Kuwait"&gt;Kuwait&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Kyrgyzstan"&gt;Kyrgyzstan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Lao, People's Democratic
                  Republic"&gt;Lao, People's Democratic Republic&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option
                  value="Latvia"&gt;Latvia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Lebanon"&gt;Lebanon&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Lesotho"&gt;Lesotho&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Liberia"&gt;Liberia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Libyan Arab
                  Jamahiriya"&gt;Libyan Arab Jamahiriya&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Liechtenstein"&gt;Liechtenstein&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Lithuania"&gt;Lithuania&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Luxembourg"&gt;Luxembourg&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Macau"&gt;Macau&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Macedonia, The Former
                  Yugoslav Republic of"&gt;Macedonia, The Former Yugoslav
                  Republic of&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Madagascar"&gt;Madagascar&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Malawi"&gt;Malawi&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Malaysia"&gt;Malaysia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Maldives"&gt;Maldives&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mali"&gt;Mali&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Malta"&gt;Malta&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Marshall
                  Islands"&gt;Marshall Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Martinique"&gt;Martinique&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mauritania"&gt;Mauritania&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mauritius"&gt;Mauritius&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mayotte"&gt;Mayotte&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mexico"&gt;Mexico&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Micronesia, Federated
                  States of"&gt;Micronesia, Federated States of&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option value="Moldova, Republic
                  of"&gt;Moldova, Republic of&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Monaco"&gt;Monaco&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mongolia"&gt;Mongolia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Montserrat"&gt;Montserrat&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Morocco"&gt;Morocco&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Mozambique"&gt;Mozambique&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Myanmar"&gt;Myanmar&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Namibia"&gt;Namibia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Nauru"&gt;Nauru&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Nepal"&gt;Nepal&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Netherlands"&gt;Netherlands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Netherlands
                  Antilles"&gt;Netherlands Antilles&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="New Caledonia"&gt;New
                  Caledonia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="New Zealand"&gt;New
                  Zealand&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Nicaragua"&gt;Nicaragua&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Niger"&gt;Niger&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Nigeria"&gt;Nigeria&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Niue"&gt;Niue&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Norfolk
                  Island"&gt;Norfolk Island&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Northern Mariana
                  Islands"&gt;Northern Mariana Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Norway"&gt;Norway&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Oman"&gt;Oman&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Pakistan"&gt;Pakistan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Palau"&gt;Palau&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Panama"&gt;Panama&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Papua New
                  Guinea"&gt;Papua New Guinea&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Paraguay"&gt;Paraguay&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Peru"&gt;Peru&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Philippines"&gt;Philippines&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Pitcairn"&gt;Pitcairn&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Poland"&gt;Poland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Portugal"&gt;Portugal&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Puerto Rico"&gt;Puerto
                  Rico&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Qatar"&gt;Qatar&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Reunion"&gt;Reunion&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Romania"&gt;Romania&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Russian
                  Federation"&gt;Russian Federation&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Rwanda"&gt;Rwanda&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Saint Kitts and
                  Nevis"&gt;Saint Kitts and Nevis&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Saint Lucia"&gt;Saint
                  Lucia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Saint Vincent and the
                  Grenadines"&gt;Saint Vincent and the Grenadines&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option
                  value="Samoa"&gt;Samoa&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="San Marino"&gt;San
                  Marino&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Sao Tome and
                  Principe"&gt;Sao Tome and Principe&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Saudi Arabia"&gt;Saudi
                  Arabia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Senegal"&gt;Senegal&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Seychelles"&gt;Seychelles&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Sierra Leone"&gt;Sierra
                  Leone&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Singapore"&gt;Singapore&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Slovakia (Slovak
                  Republic)"&gt;Slovakia (Slovak Republic)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Slovenia"&gt;Slovenia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Solomon
                  Islands"&gt;Solomon Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Somalia"&gt;Somalia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="South Africa"&gt;South
                  Africa&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="South Georgia and the
                  South Sandwich Islands"&gt;South Georgia and the South
                  Sandwich Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Spain"&gt;Spain&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Sri Lanka"&gt;Sri
                  Lanka&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="St. Helena"&gt;St.
                  Helena&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="St. Pierre and
                  Miquelon"&gt;St. Pierre and Miquelon&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Sudan"&gt;Sudan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Suriname"&gt;Suriname&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Svalbard and Jan Mayen
                  Islands"&gt;Svalbard and Jan Mayen Islands&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option
                  value="Swaziland"&gt;Swaziland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Sweden"&gt;Sweden&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Switzerland"&gt;Switzerland&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Syrian Arab
                  Republic"&gt;Syrian Arab Republic&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Taiwan, Province of
                  China"&gt;Taiwan, Province of China&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Tajikistan"&gt;Tajikistan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Tanzania, United
                  Republic of"&gt;Tanzania, United Republic of&lt;/option&gt;
                  {"\n"}
                  {"                "}&lt;option
                  value="Thailand"&gt;Thailand&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Togo"&gt;Togo&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Tokelau"&gt;Tokelau&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Tonga"&gt;Tonga&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Trinidad and
                  Tobago"&gt;Trinidad and Tobago&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Tunisia"&gt;Tunisia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Turkey"&gt;Turkey&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Turkmenistan"&gt;Turkmenistan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Turks and Caicos
                  Islands"&gt;Turks and Caicos Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Tuvalu"&gt;Tuvalu&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Uganda"&gt;Uganda&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Ukraine"&gt;Ukraine&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="United Arab
                  Emirates"&gt;United Arab Emirates&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="United
                  Kingdom"&gt;United Kingdom&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="United States"&gt;United
                  States&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="United States Minor
                  Outlying Islands"&gt;United States Minor Outlying
                  Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Uruguay"&gt;Uruguay&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Uzbekistan"&gt;Uzbekistan&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Vanuatu"&gt;Vanuatu&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Venezuela"&gt;Venezuela&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Vietnam"&gt;Vietnam&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Virgin Islands
                  (British)"&gt;Virgin Islands (British)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Virgin Islands
                  (U.S.)"&gt;Virgin Islands (U.S.)&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Wallis and Futuna
                  Islands"&gt;Wallis and Futuna Islands&lt;/option&gt;{"\n"}
                  {"                "}&lt;option value="Western
                  Sahara"&gt;Western Sahara&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Yemen"&gt;Yemen&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Yugoslavia"&gt;Yugoslavia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Zambia"&gt;Zambia&lt;/option&gt;{"\n"}
                  {"                "}&lt;option
                  value="Zimbabwe"&gt;Zimbabwe&lt;/option&gt;{"\n"}
                  {"              "}&lt;/select&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-card-holder-zip-code"&gt;Zip&lt;/label&gt;&lt;input
                  class="form-control" placeholder="1234" name="zipCode"
                  type="text" id="bootstrap-wizard-card-holder-zip-code"
                  /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-card-exp-date"&gt;Date of
                  Expire&lt;/label&gt;&lt;input class="form-control"
                  placeholder="15/2024" name="expDate" type="text"
                  id="bootstrap-wizard-card-exp-date" /&gt;&lt;/div&gt;{"\n"}
                  {"            "}&lt;div class="col-6"&gt;&lt;label
                  class="form-label"
                  for="bootstrap-wizard-card-cvv"&gt;CVV&lt;/label&gt;&lt;input
                  class="form-control" placeholder="123" name="cvv"
                  maxlength="3" pattern="[0-9]{"{"}3{"}"}" type="number"
                  id="bootstrap-wizard-card-cvv" /&gt;&lt;/div&gt;{"\n"}
                  {"          "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/form&gt;{"\n"}
                  {"      "}&lt;/div&gt;{"\n"}
                  {"      "}&lt;div class="tab-pane" role="tabpanel"
                  aria-labelledby="bootstrap-wizard-tab4"
                  id="bootstrap-wizard-tab4"&gt;{"\n"}
                  {"        "}&lt;div class="row flex-center pb-8 pt-4 gx-3
                  gy-4"&gt;{"\n"}
                  {"          "}&lt;div class="col-12 col-sm-auto"&gt;{"\n"}
                  {"            "}&lt;div class="text-center
                  text-sm-start"&gt;&lt;img class="d-dark-none"
                  src="assets/img/spot-illustrations/38.webp" alt=""
                  width="220" /&gt;&lt;img class="d-light-none"
                  src="assets/img/spot-illustrations/dark_38.webp" alt=""
                  width="220" /&gt;&lt;/div&gt;{"\n"}
                  {"          "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;div class="col-12 col-sm-auto"&gt;{"\n"}
                  {"            "}&lt;div class="text-center text-sm-start"&gt;
                  {"\n"}
                  {"              "}&lt;h5 class="mb-3"&gt;You are all
                  set!&lt;/h5&gt;{"\n"}
                  {"              "}&lt;p class="text-body-emphasis fs-9"&gt;Now
                  you can access your account&lt;br /&gt;anytime
                  anywhere&lt;/p&gt;&lt;a class="btn btn-primary px-6"
                  href="modules/forms/wizard.html"&gt;Start Over&lt;/a&gt;
                  {"\n"}
                  {"            "}&lt;/div&gt;{"\n"}
                  {"          "}&lt;/div&gt;{"\n"}
                  {"        "}&lt;/div&gt;{"\n"}
                  {"      "}&lt;/div&gt;{"\n"}
                  {"    "}&lt;/div&gt;{"\n"}
                  {"  "}&lt;/div&gt;{"\n"}
                  {"  "}&lt;div class="card-footer border-top-0"
                  data-wizard-footer="data-wizard-footer"&gt;{"\n"}
                  {"    "}&lt;div class="d-flex pager wizard list-inline
                  mb-0"&gt;&lt;button class="d-none btn btn-link ps-0"
                  type="button"
                  data-wizard-prev-btn="data-wizard-prev-btn"&gt;&lt;span
                  class="fas fa-chevron-left me-1"
                  data-fa-transform="shrink-3"&gt;&lt;/span&gt;Previous&lt;/button&gt;
                  {"\n"}
                  {"      "}&lt;div class="flex-1 text-end"&gt;&lt;button
                  class="btn btn-primary px-6 px-sm-6" type="submit"
                  data-wizard-next-btn="data-wizard-next-btn"&gt;Next&lt;span
                  class="fas fa-chevron-right ms-1"
                  data-fa-transform="shrink-3"&gt;
                  &lt;/span&gt;&lt;/button&gt;&lt;/div&gt;{"\n"}
                  {"    "}&lt;/div&gt;{"\n"}
                  {"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;
                </code>
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div
                className="card theme-wizard mb-5"
                data-theme-wizard="data-theme-wizard"
              >
                <div className="card-header bg-body-highlight pt-3 pb-2 border-bottom-0">
                  <ul className="nav justify-content-between nav-wizard">
                    <li className="nav-item">
                      <a
                        className="nav-link active fw-semibold"
                        href="#bootstrap-wizard-tab1"
                        data-bs-toggle="tab"
                        data-wizard-step={1}
                      >
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-lock" />
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
                            Account
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold"
                        href="#bootstrap-wizard-tab2"
                        data-bs-toggle="tab"
                        data-wizard-step={2}
                      >
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-user" />
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
                            Personal
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold"
                        href="#bootstrap-wizard-tab3"
                        data-bs-toggle="tab"
                        data-wizard-step={3}
                      >
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-file-alt" />
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
                            Billing
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold"
                        href="#bootstrap-wizard-tab4"
                        data-bs-toggle="tab"
                        data-wizard-step={4}
                      >
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-check" />
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
                            Done
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-4 pb-0">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      aria-labelledby="bootstrap-wizard-tab1"
                      id="bootstrap-wizard-tab1"
                    >
                      <form
                        id="wizardForm1"
                        data-wizard-form={1}
                      >
                        <div className="mb-2">
                          <label
                            className="form-label text-body"
                            htmlFor="bootstrap-wizard-wizard-name"
                          >
                            Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            id="bootstrap-wizard-wizard-name"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            className="form-label"
                            htmlFor="bootstrap-wizard-wizard-email"
                          >
                            Email*
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            pattern="^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                            id="bootstrap-wizard-wizard-email"
                          />
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-sm-6">
                            <div className="mb-2 mb-sm-0">
                              <label
                                className="form-label text-body"
                                htmlFor="bootstrap-wizard-wizard-password"
                              >
                                Password*
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="bootstrap-wizard-wizard-password"
                                data-wizard-password="true"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-2">
                              <label
                                className="form-label text-body"
                                htmlFor="bootstrap-wizard-wizard-confirm-password"
                              >
                                Confirm Password*
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                id="bootstrap-wizard-wizard-confirm-password"
                                data-wizard-confirm-password="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms"
                            id="bootstrap-wizard-wizard-checkbox"
                          />
                          <label
                            className="form-check-label text-body"
                            htmlFor="bootstrap-wizard-wizard-checkbox"
                          >
                            I accept the <a href="#!">terms </a>and{" "}
                            <a href="#!">privacy policy</a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="bootstrap-wizard-tab2"
                      id="bootstrap-wizard-tab2"
                    >
                      <form
                        id="wizardForm2"
                        data-wizard-form={2}
                      >
                        <div
                          className="row g-4 mb-4"
                          data-dropzone="data-dropzone"
                          data-options='{"maxFiles":1,"data":[{"name":"avatar.webp","size":"54kb","url":"assets/img/team"}]}'
                        >
                          <div className="fallback">
                            <input type="file" name="file" />
                          </div>
                          <div className="col-md-auto">
                            <div className="dz-preview dz-preview-single">
                              <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                <div className="avatar avatar-4xl">
                                  <img
                                    className="rounded-circle avatar-placeholder"
                                    src="assets/img/team/avatar.webp"
                                    alt="..."
                                    data-dz-thumbnail="data-dz-thumbnail"
                                  />
                                </div>
                                <div className="dz-progress">
                                  <span
                                    className="dz-upload"
                                    data-dz-uploadprogress=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div
                              className="dz-message dropzone-area px-2 py-3"
                              data-dz-message="data-dz-message"
                            >
                              <div className="text-center text-body-emphasis">
                                <h5 className="mb-2">
                                  <span className="fa-solid fa-upload me-2" />
                                  Upload Profile Picture
                                </h5>
                                <p className="mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm">
                                  Upload a 300x300 jpg image with <br />a
                                  maximum size of 400KB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label
                            className="form-label"
                            htmlFor="bootstrap-wizard-gender"
                          >
                            Gender
                          </label>
                          <select
                            className="form-select"
                            name="gender"
                            id="bootstrap-wizard-gender"
                          >
                            <option value="">Select your gender ...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label
                            className="form-label"
                            htmlFor="bootstrap-wizard-wizard-phone"
                          >
                            Phone
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            id="bootstrap-wizard-wizard-phone"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            className="form-label"
                            htmlFor="bootstrap-wizard-wizard-datepicker"
                          >
                            Date of Birth
                          </label>
                          <input
                            className="form-control datetimepicker"
                            type="text"
                            placeholder="d/m/y"
                            data-options='{"dateFormat":"d/m/y","disableMobile":true}'
                            id="bootstrap-wizard-wizard-datepicker"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            className="form-label"
                            htmlFor="bootstrap-wizard-wizard-address"
                          >
                            Address
                          </label>
                          <textarea
                            className="form-control"
                            rows={4}
                            id="bootstrap-wizard-wizard-address"
                            defaultValue={""}
                          />
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="bootstrap-wizard-tab3"
                      id="bootstrap-wizard-tab3"
                    >
                      <form
                        className="mb-2"
                        id="wizardForm3"
                        data-wizard-form={3}
                      >
                        <div className="row gx-3 gy-2">
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-number"
                            >
                              Card Number
                            </label>
                            <input
                              className="form-control"
                              placeholder="XXXX XXXX XXXX XXXX"
                              type="text"
                              id="bootstrap-wizard-card-number"
                            />
                          </div>
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-name"
                            >
                              Name
                            </label>
                            <input
                              className="form-control"
                              placeholder="John Doe"
                              name="cardName"
                              type="text"
                              id="bootstrap-wizard-card-name"
                            />
                          </div>
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-holder-country"
                            >
                              Country
                            </label>
                            <select
                              className="form-select"
                              name="customSelectCountry"
                              id="bootstrap-wizard-card-holder-country"
                            >
                              <option value="">Select your country ...</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegowina">
                                Bosnia and Herzegowina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">
                                Christmas Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option value="Congo, the Democratic Republic of the">
                                Congo, the Democratic Republic of the
                              </option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote d'Ivoire">
                                Cote d'Ivoire
                              </option>
                              <option value="Croatia (Hrvatska)">
                                Croatia (Hrvatska)
                              </option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="East Timor">East Timor</option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands (Malvinas)">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="France Metropolitan">
                                France Metropolitan
                              </option>
                              <option value="French Guiana">
                                French Guiana
                              </option>
                              <option value="French Polynesia">
                                French Polynesia
                              </option>
                              <option value="French Southern Territories">
                                French Southern Territories
                              </option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard and Mc Donald Islands">
                                Heard and Mc Donald Islands
                              </option>
                              <option value="Holy See (Vatican City State)">
                                Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran (Islamic Republic of)">
                                Iran (Islamic Republic of)
                              </option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Korea, Democratic People's Republic of">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Lao, People's Democratic Republic">
                                Lao, People's Democratic Republic
                              </option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macau">Macau</option>
                              <option value="Macedonia, The Former Yugoslav Republic of">
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia, Federated States of">
                                Micronesia, Federated States of
                              </option>
                              <option value="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn">Pitcairn</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russian Federation">
                                Russian Federation
                              </option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Saint Vincent and the Grenadines">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia (Slovak Republic)">
                                Slovakia (Slovak Republic)
                              </option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Georgia and the South Sandwich Islands">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="St. Helena">St. Helena</option>
                              <option value="St. Pierre and Miquelon">
                                St. Pierre and Miquelon
                              </option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard and Jan Mayen Islands">
                                Svalbard and Jan Mayen Islands
                              </option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option value="Taiwan, Province of China">
                                Taiwan, Province of China
                              </option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania, United Republic of">
                                Tanzania, United Republic of
                              </option>
                              <option value="Thailand">Thailand</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos Islands">
                                Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Virgin Islands (British)">
                                Virgin Islands (British)
                              </option>
                              <option value="Virgin Islands (U.S.)">
                                Virgin Islands (U.S.)
                              </option>
                              <option value="Wallis and Futuna Islands">
                                Wallis and Futuna Islands
                              </option>
                              <option value="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="Yemen">Yemen</option>
                              <option value="Yugoslavia">Yugoslavia</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-holder-zip-code"
                            >
                              Zip
                            </label>
                            <input
                              className="form-control"
                              name="zipCode"
                              type="text"
                              id="bootstrap-wizard-card-holder-zip-code"
                            />
                          </div>
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-exp-date"
                            >
                              Date of Expire
                            </label>
                            <input
                              className="form-control"
                              placeholder="15/2024"
                              name="expDate"
                              type="text"
                              id="bootstrap-wizard-card-exp-date"
                            />
                          </div>
                          <div className="col-6">
                            <label
                              className="form-label"
                              htmlFor="bootstrap-wizard-card-cvv"
                            >
                              CVV
                            </label>
                            <input
                              className="form-control"
                              name="cvv"
                              maxLength={3}
                              pattern="[0-9]{3}"
                              type="number"
                              id="bootstrap-wizard-card-cvv"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      aria-labelledby="bootstrap-wizard-tab4"
                      id="bootstrap-wizard-tab4"
                    >
                      <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <img
                              className="d-dark-none"
                              src="assets/img/spot-illustrations/38.webp"
                              alt=""
                              width={220}
                            />
                            <img
                              className="d-light-none"
                              src="assets/img/spot-illustrations/dark_38.webp"
                              alt=""
                              width={220}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <h5 className="mb-3">You are all set!</h5>
                            <p className="text-body-emphasis fs-9">
                              Now you can access your account
                              <br />
                              anytime anywhere
                            </p>
                            <a
                              className="btn btn-primary px-6"
                              href="wizard.html"
                            >
                              Start Over
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card-footer border-top-0"
                  data-wizard-footer="data-wizard-footer"
                >
                  <div className="d-flex pager wizard list-inline mb-0">
                    <button
                      className="d-none btn btn-link ps-0"
                      type="button"
                      data-wizard-prev-btn="data-wizard-prev-btn"
                    >
                      <span
                        className="fas fa-chevron-left me-1"
                        data-fa-transform="shrink-3"
                      />
                      Previous
                    </button>
                    <div className="flex-1 text-end">
                      <button
                        className="btn btn-primary px-6 px-sm-6"
                        type="submit"
                        data-wizard-next-btn="data-wizard-next-btn"
                      >
                        Next
                        <span
                          className="fas fa-chevron-right ms-1"
                          data-fa-transform="shrink-3"
                        >
                          {" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div
        className="modal fade"
        id="error-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ maxWidth: 500 }}
        >
          <div className="modal-content position-relative">
            <div className="modal-header border-gray-100 p-3">
              <div className="h4 text-body-secondary mb-0">Access Denied!</div>
              <button
                className="btn btn-link text-danger position-absolute top-0 end-0 mt-2 me-2"
                data-bs-dismiss="modal"
              >
                <span className="fas fa-times" />
              </button>
            </div>
            <div className="modal-body px-4 py-6">
              <div className="d-flex align-items-center">
                <img
                  className="me-4"
                  src="assets/img/icons/stop.png"
                  alt=""
                />
                <div className="flex-1">
                  <p className="mb-0 fw-semibold text-body-tertiary">
                    You do not have the link to access. Please start <br />
                    over to get access for the next session.
                    <br />
                    Thank You!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
      <div
        className="toast align-items-center text-white bg-dark border-0"
        id="icon-copied-toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex" data-bs-theme="dark">
          <div className="toast-body p-3" />
          <button
            className="btn-close me-2 m-auto"
            type="button"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </div>
    <footer className="footer position-absolute">
      <div className="row g-0 justify-content-between align-items-center h-100">
        <div className="col-12 col-sm-auto text-center">
          <p className="mb-0 mt-2 mt-sm-0 text-body">
            Thank you for creating with Phoenix
            <span className="d-none d-sm-inline-block" />
            <span className="d-none d-sm-inline-block mx-1">|</span>
            <br className="d-sm-none" />
            2023 ©
            <a className="mx-1" href="https://themewagon.com/">
              Themewagon
            </a>
          </p>
        </div>
        <div className="col-12 col-sm-auto text-center">
          <p className="mb-0 text-body-tertiary text-opacity-85">v1.14.0</p>
        </div>
      </div>
    </footer>
  </div>
  <div className="support-chat-container">
    <div className="container-fluid support-chat">
      <div className="card bg-body-emphasis">
        <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
          <h5 className="mb-0 d-flex align-items-center gap-2">
            Demo widget
            <span className="fa-solid fa-circle text-success fs-11" />
          </h5>
          <div className="btn-reveal-trigger">
            <button
              className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
              type="button"
              id="support-chat-dropdown"
              data-bs-toggle="dropdown"
              data-boundary="window"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-reference="parent"
            >
              <span className="fas fa-ellipsis-h text-body" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-end py-2"
              aria-labelledby="support-chat-dropdown"
            >
              <a className="dropdown-item" href="#!">
                Request a callback
              </a>
              <a className="dropdown-item" href="#!">
                Search in chat
              </a>
              <a className="dropdown-item" href="#!">
                Show history
              </a>
              <a className="dropdown-item" href="#!">
                Report to Admin
              </a>
              <a className="dropdown-item btn-support-chat" href="#!">
                Close Support
              </a>
            </div>
          </div>
        </div>
        <div className="card-body chat p-0">
          <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
            <div className="text-end mt-6">
              <a
                className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                href="#!"
              >
                <p className="mb-0 fw-semibold fs-9">
                  I need help with something
                </p>
                <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
              </a>
              <a
                className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                href="#!"
              >
                <p className="mb-0 fw-semibold fs-9">
                  I can’t reorder a product I previously ordered
                </p>
                <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
              </a>
              <a
                className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                href="#!"
              >
                <p className="mb-0 fw-semibold fs-9">
                  How do I place an order?
                </p>
                <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
              </a>
              <a
                className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3"
                href="#!"
              >
                <p className="mb-0 fw-semibold fs-9">
                  My payment method not working
                </p>
                <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3" />
              </a>
            </div>
            <div className="text-center mt-auto">
              <div className="avatar avatar-3xl status-online">
                <img
                  className="rounded-circle border border-3 border-light-subtle"
                  src="assets/img/team/30.webp"
                  alt=""
                />
              </div>
              <h5 className="mt-2 mb-3">Eric</h5>
              <p className="text-center text-body-emphasis mb-0">
                Ask us anything – we’ll get back to you here or by email within
                24 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
          <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
            <input
              className="form-control outline-none border-0 flex-1 fs-9 px-0"
              type="text"
              placeholder="Write message"
            />
            <label
              className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
              htmlFor="supportChatPhotos"
            >
              <span className="fa-solid fa-image" />
            </label>
            <input
              className="d-none"
              type="file"
              accept="image/*"
              id="supportChatPhotos"
            />
            <label
              className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
              htmlFor="supportChatAttachment"
            >
              {" "}
              <span className="fa-solid fa-paperclip" />
            </label>
            <input className="d-none" type="file" id="supportChatAttachment" />
          </div>
          <button className="btn p-0 border-0 send-btn">
            <span className="fa-solid fa-paper-plane fs-9" />
          </button>
        </div>
      </div>
    </div>
    <button className="btn p-0 border border-translucent btn-support-chat">
      <span className="fs-8 btn-text text-primary text-nowrap">Chat demo</span>
      <span className="fa-solid fa-circle text-success fs-9 ms-2" />
      <span className="fa-solid fa-chevron-down text-primary fs-7" />
    </button>
  </div>

 

</>

    )

}

export default AddEmployee;