const divisions = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Chattogram" },
  { id: 3, name: "Rajshahi" },
  { id: 4, name: "Khulna" },
  { id: 5, name: "Barishal" },
  { id: 6, name: "Sylhet" },
  { id: 7, name: "Rangpur" },
  { id: 8, name: "Mymensingh" },
];

const districts = [
  // Dhaka Division
  { id: 101, divisionId: 1, name: "Dhaka" },
  { id: 102, divisionId: 1, name: "Faridpur" },
  { id: 103, divisionId: 1, name: "Gazipur" },
  { id: 104, divisionId: 1, name: "Gopalganj" },
  { id: 105, divisionId: 1, name: "Kishoreganj" },
  { id: 106, divisionId: 1, name: "Madaripur" },
  { id: 107, divisionId: 1, name: "Manikganj" },
  { id: 108, divisionId: 1, name: "Munshiganj" },
  { id: 109, divisionId: 1, name: "Narayanganj" },
  { id: 110, divisionId: 1, name: "Narsingdi" },
  { id: 111, divisionId: 1, name: "Rajbari" },
  { id: 112, divisionId: 1, name: "Shariatpur" },
  { id: 113, divisionId: 1, name: "Tangail" },

  // Chattogram Division
  { id: 201, divisionId: 2, name: "Chattogram" },
  { id: 202, divisionId: 2, name: "Bandarban" },
  { id: 203, divisionId: 2, name: "Brahmanbaria" },
  { id: 204, divisionId: 2, name: "Chandpur" },
  { id: 205, divisionId: 2, name: "Cox's Bazar" },
  { id: 206, divisionId: 2, name: "Comilla" },
  { id: 207, divisionId: 2, name: "Feni" },
  { id: 208, divisionId: 2, name: "Khagrachari" },
  { id: 209, divisionId: 2, name: "Lakshmipur" },
  { id: 210, divisionId: 2, name: "Noakhali" },
  { id: 211, divisionId: 2, name: "Rangamati" },

  // Rajshahi Division
  { id: 301, divisionId: 3, name: "Rajshahi" },
  { id: 302, divisionId: 3, name: "Bogra" },
  { id: 303, divisionId: 3, name: "Joypurhat" },
  { id: 304, divisionId: 3, name: "Naogaon" },
  { id: 305, divisionId: 3, name: "Natore" },
  { id: 306, divisionId: 3, name: "Chapainawabganj" },
  { id: 307, divisionId: 3, name: "Pabna" },
  { id: 308, divisionId: 3, name: "Sirajganj" },

  // Khulna Division
  { id: 401, divisionId: 4, name: "Khulna" },
  { id: 402, divisionId: 4, name: "Bagerhat" },
  { id: 403, divisionId: 4, name: "Chuadanga" },
  { id: 404, divisionId: 4, name: "Jessore" },
  { id: 405, divisionId: 4, name: "Jhenaidah" },
  { id: 406, divisionId: 4, name: "Kushtia" },
  { id: 407, divisionId: 4, name: "Magura" },
  { id: 408, divisionId: 4, name: "Meherpur" },
  { id: 409, divisionId: 4, name: "Narail" },
  { id: 410, divisionId: 4, name: "Satkhira" },

  // Barishal Division
  { id: 501, divisionId: 5, name: "Barishal" },
  { id: 502, divisionId: 5, name: "Barguna" },
  { id: 503, divisionId: 5, name: "Bhola" },
  { id: 504, divisionId: 5, name: "Jhalokathi" },
  { id: 505, divisionId: 5, name: "Patuakhali" },
  { id: 506, divisionId: 5, name: "Pirojpur" },

  // Sylhet Division
  { id: 601, divisionId: 6, name: "Sylhet" },
  { id: 602, divisionId: 6, name: "Habiganj" },
  { id: 603, divisionId: 6, name: "Moulvibazar" },
  { id: 604, divisionId: 6, name: "Sunamganj" },

  // Rangpur Division
  { id: 701, divisionId: 7, name: "Rangpur" },
  { id: 702, divisionId: 7, name: "Dinajpur" },
  { id: 703, divisionId: 7, name: "Gaibandha" },
  { id: 704, divisionId: 7, name: "Kurigram" },
  { id: 705, divisionId: 7, name: "Lalmonirhat" },
  { id: 706, divisionId: 7, name: "Nilphamari" },
  { id: 707, divisionId: 7, name: "Panchagarh" },
  { id: 708, divisionId: 7, name: "Thakurgaon" },

  // Mymensingh Division
  { id: 801, divisionId: 8, name: "Mymensingh" },
  { id: 802, divisionId: 8, name: "Jamalpur" },
  { id: 803, divisionId: 8, name: "Netrokona" },
  { id: 804, divisionId: 8, name: "Sherpur" },
];

const subDistricts = [
  // Dhaka District
  { id: 1001, districtId: 101, name: "Uttara" },
  { id: 1002, districtId: 101, name: "Mirpur" },
  // ... Other sub-districts of Dhaka District

  // Chattogram District
  { id: 2001, districtId: 201, name: "Chattogram Sadar" },
  { id: 2002, districtId: 201, name: "Pahartali" },
  // ... Other sub-districts of Chattogram District

  // Bogra District
  { id: 3001, districtId: 302, name: "Bogra Sadar" },
  { id: 3002, districtId: 302, name: "Shajahanpur" },
  // ... Other sub-districts of Bogra District
  // ... Other sub-districts of other districts
];

const unions = [
  // Uttara Sub-District
  { id: 10001, subDistrictId: 1001, name: "Uttara Union" },
  { id: 10002, subDistrictId: 1001, name: "Dakkhinkhan Union" },
  // ... Other unions of Uttara Sub-District

  // Chattogram Sadar Sub-District
  { id: 20001, subDistrictId: 2001, name: "Chattogram City Corporation" },
  { id: 20002, subDistrictId: 2001, name: "Al-ankar Union" },
  // ... Other unions of Chattogram Sadar Sub-District

  // Bogra Sadar Sub-District
  { id: 30001, subDistrictId: 3001, name: "Shibganj Union" },
  { id: 30002, subDistrictId: 3001, name: "Nashratpur Union" },
  // ... Other unions of Bogra Sadar Sub-District
  // ... Other unions of other sub-districts
];

export { divisions, districts, subDistricts, unions };
