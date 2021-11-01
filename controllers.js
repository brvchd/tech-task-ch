const findPath = (req, res) => {
  const path = [];
  const countryCode = req.params.countryCode;
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
    return res.status(404).send("Country code not found");
  }
  const desiredPosition = countries
    .map((e) => {
      return e.destination;
    })
    .indexOf(countryCode);
    if(desiredPosition < 1){
        for(let i = 1; i>= desiredPosition; i--){
            let currentCountry = countries[i].destination;
            path.push(currentCountry);
        }
    }
  for (let i = 1; i <= desiredPosition; i++) {
    let currentCountry = countries[i].destination;
    if (
      countries[i].priority === 2 &&
      countries[i].destination !== countryCode
    ) {
      continue;
    }
    path.push(currentCountry);
  }
  return res.status(200).json({ destination: countryCode, path: path });
};

module.exports = {
  findPath
};
