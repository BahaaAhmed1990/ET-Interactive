const btn = document.querySelector("input[type='submit']");
const clientName = document.querySelector("#name");
const firmName = document.querySelector("#firm-name");
const phone = document.querySelector("#phone-number");
const email = document.querySelector("#email");

// const success = document.querySelector(".alert-success");
// const warn = document.querySelector(".alert-warning");

// success.style.display = "none";
// warn.style.display = "none";

btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let name = clientName.value;
  let entity = firmName.value;
  let mail = email.value;
  let phoneNum = phone.value;

  console.log(name, entity, mail, phoneNum);

  let msgBody = {};

  name ? (msgBody.name = name) : (msgBody.name = "No name");
  entity
    ? (msgBody.entityName = entity)
    : (msgBody.entityName = "No entity name");

  if (!mail || !phoneNum) {
    // warn.style.display = "block";
    // setTimeout(() => {
    //   warn.style.display = "none";
    // }, 3000);
    console.log("wrong input");
    return;
  } else {
    msgBody.email = mail;
    msgBody.phone = phoneNum;
  }

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
      // success.style.display = "block";
      // setTimeout(() => {
      //   success.style.display = "none";
      // }, 3000);
    } else {
      console.log("msg didnot send");
      // warn.style.display = "block";
      // setTimeout(() => {
      //   warn.style.display = "none";
      // }, 3000);
    }
  });
}
