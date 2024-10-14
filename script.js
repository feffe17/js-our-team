const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const team = document.getElementById("team");

let completeMarkup = ""

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  const markup = generateMemberTeam(member);
  completeMarkup += markup;
  
}

team.innerHTML = completeMarkup;












function generateMemberTeam(member) {

const {name, role, email, img} = member

  return `
  <div class="col-md-6 col-xl-4 d-flex text-start px-3 py-3">
    <div class="col-3">
      <img src="${img}" width="100%" height="100%" alt="" srcset="">
    </div>
    <div class="col-9 p-2 text-white bg-dark">
      <h4>${name}</h4>
      <p class="m-0">${role}</p>
      <a href="">${email}</a>
    </div>
  </div>
`
}