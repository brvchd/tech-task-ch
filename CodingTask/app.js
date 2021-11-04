const btn = document.getElementById("button");
const country = document.getElementById("country");

btn.addEventListener("click", generateDestination);
country.addEventListener("focus", function () {
  const country = document.getElementById("country");
  country.value = "";
  const pathList = document.getElementById("path");
  pathList.innerHTML = "";
  btn.disabled = false;
});

function generateDestination() {
  const destination = document.getElementById("country").value;
  const list = document.getElementById("path");
  const path = getDestination(destination);
  if (path.length === 0) {
    alert("WRONG COUNTRY!");
    return;
  }
  for (let elem of path) {
    const listItem = document.createElement("li");
    listItem.innerHTML = elem;
    list.appendChild(listItem);
  }
  btn.disabled = true;
}

function getDestination(destination) {
  const path = [];
  const countryCode = destination;
  const countries = [
    {
      destination: "CAN",
      priority: 1,
    },
    {
      destination: "USA",
      priority: 1,
    },
    {
      destination: "MEX",
      priority: 1,
    },
    {
      destination: "BLZ",
      priority: 2,
    },
    {
      destination: "GTM",
      priority: 1,
    },
    {
      destination: "SLV",
      priority: 2,
    },
    {
      destination: "HND",
      priority: 1,
    },
    {
      destination: "NIC",
      priority: 1,
    },
    {
      destination: "CRI",
      priority: 1,
    },
    {
      destination: "PAN",
      priority: 1,
    },
  ];
  const countryCodes = countries.map((e) => {
    return e.destination;
  });
  if (!countryCodes.includes(countryCode)) {
    return path;
  }
  const desiredPosition = countries
    .map((e) => {
      return e.destination;
    })
    .indexOf(countryCode);
  console.log(`${destination}  ${typeof destination}`);
  console.log("desired position " + desiredPosition);
  console.log("position " + countries[5].destination);

  if (desiredPosition < 1 && desiredPosition > -1) {
    for (let i = 1; i >= desiredPosition; i--) {
      console.log(countries);
      let currentCountry = countries[i].destination;
      path.push(currentCountry);
    }
  }

  for (let i = 1; i <= desiredPosition; i++) {
    console.log(countries[i]);
    let currentCountry = countries[i].destination;
    if (
      countries[i].priority === 2 &&
      countries[i].destination !== countryCode
    ) {
      continue;
    }
    path.push(currentCountry);
  }
  return path;
}
