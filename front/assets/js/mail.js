const btn = document.querySelector("input[type='submit']");
const clientName = document.querySelector("#name");
const firmName = document.querySelector("#firm-name");
const phone = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const customerType = document.querySelector("#customer-type");
const companyName = document.querySelector("#company-name");
const companyDiv = document.querySelector("#organization");

customerType.addEventListener("change", function (e) {
  console.log(typeof customerType.value);
  e.preventDefault();
  if (customerType.value) {
    companyName.removeAttribute("disabled");
    companyDiv.classList.remove("hide");
  }
  if (customerType.value === "" || customerType.value === "indivdual") {
    companyName.setAttribute("disabled", "true");
    companyDiv.classList.add("hide");
  }
});

btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let name = clientName.value;
  let entity = firmName.value;
  let mail = email.value;
  let phoneNum = phone.value;
  let type = customerType.value;
  let company = companyName.value;

  console.log(name, entity, mail, phoneNum, type, company);

  let msgBody = {};

  name ? (msgBody.name = name) : (msgBody.name = "No name");
  entity
    ? (msgBody.entityName = entity)
    : (msgBody.entityName = "No entity name");

  if (!mail || !phoneNum) {
    console.log("wrong input");
    return;
  } else {
    msgBody.email = mail;
    msgBody.phone = phoneNum;
  }

  type ? (msgBody.type = type) : (msgBody.type = "indvidual");

  company ? (msgBody.company = company) : (msgBody.company = "N/A");
  console.log(msgBody);

  axios({
    method: "post",
    url: "/api/mail",
    data: msgBody,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (res) {
    if (res.status === 201) {
      console.log("msg sent");
    } else {
      console.log("msg didnot send");
    }
  });
}
