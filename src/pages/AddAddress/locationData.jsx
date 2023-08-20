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
  { id: 1003, districtId: 101, name: "Gulshan" },
  { id: 1004, districtId: 101, name: "Dhanmondi" },
  { id: 1005, districtId: 101, name: "Mohammadpur" },
  { id: 1006, districtId: 101, name: "Banani" },
  { id: 1007, districtId: 101, name: "Tejgaon" },
  { id: 1008, districtId: 101, name: "Pallabi" },
  { id: 1009, districtId: 101, name: "Demra" },
  { id: 1010, districtId: 101, name: "Keraniganj" },
  { id: 1011, districtId: 101, name: "Ramna" },
  { id: 1012, districtId: 101, name: "Lalbagh" },
  { id: 1013, districtId: 101, name: "Savar" },
  { id: 1014, districtId: 101, name: "Cantonment" },
  { id: 1015, districtId: 101, name: "Kotwali" },
  { id: 1016, districtId: 101, name: "Kamrangirchar" },
  { id: 1017, districtId: 101, name: "Kadamtali" },
  { id: 1018, districtId: 101, name: "Shah Ali" },
  { id: 1019, districtId: 101, name: "Sutrapur" },
  { id: 1020, districtId: 101, name: "Sher-e-Bangla Nagar" },
  // ... Other sub-districts of Dhaka District

  // Faridpur District
  { id: 2001, districtId: 102, name: "Faridpur Sadar" },
  { id: 2002, districtId: 102, name: "Boalmari" },
  { id: 2003, districtId: 102, name: "Alfadanga" },
  { id: 2004, districtId: 102, name: "Madhukhali" },
  { id: 2005, districtId: 102, name: "Nagarkanda" },
  { id: 2006, districtId: 102, name: "Sadarpur" },
  { id: 2007, districtId: 102, name: "Bhanga" },
  { id: 2008, districtId: 102, name: "Charbhadrasan" },
  { id: 2009, districtId: 102, name: "Shaltha" },
  // ... More sub-districts of Faridpur District
  

  // Gazipur District
  { id: 3001, districtId: 103, name: "Gazipur Sadar" },
  { id: 3002, districtId: 103, name: "Kaliakair" },
  { id: 3003, districtId: 103, name: "Kapasia" },
  { id: 3004, districtId: 103, name: "Sreepur" },
  { id: 3005, districtId: 103, name: "Kaliganj" },
  { id: 3006, districtId: 103, name: "Tongi" },
  { id: 3007, districtId: 103, name: "Gazipur City Corporation" },
  { id: 3008, districtId: 103, name: "Gazipur District" },
  { id: 3009, districtId: 103, name: "Kaliakair Upazila" },
  { id: 3010, districtId: 103, name: "Kapasia Upazila" },
  { id: 3011, districtId: 103, name: "Sreepur Upazila" },
  { id: 3012, districtId: 103, name: "Kaliganj Upazila" },
  { id: 3013, districtId: 103, name: "Gazipur Sadar Upazila" },
  { id: 3014, districtId: 103, name: "Gazipur City Upazila" },
  { id: 3015, districtId: 103, name: "Gazipur Upazila" },
  { id: 3016, districtId: 103, name: "Gazipur Municipality" },
  { id: 3017, districtId: 103, name: "Gazipur City" },
  { id: 3021, districtId: 103, name: "Gazipur Sadar Upazila" },
  { id: 3022, districtId: 103, name: "Gazipur City Upazila" },
  { id: 3023, districtId: 103, name: "Gazipur Upazila" },
  { id: 3024, districtId: 103, name: "Gazipur Municipality" },
  { id: 3025, districtId: 103, name: "Gazipur City" },

  // Rangpur District
  { id: 4001, districtId: 701, name: "Rangpur Sadar Upazila" },
  { id: 4002, districtId: 701, name: "Badarganj Upazila" },
  { id: 4003, districtId: 701, name: "Kaunia Upazila" },
  { id: 4004, districtId: 701, name: "Gangachara Upazila" },
  { id: 4005, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4006, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4007, districtId: 701, name: "Pirganj Upazila" },
  { id: 4008, districtId: 701, name: "Taraganj Upazila" },
  { id: 4009, districtId: 701, name: "Boda Upazila" },
  { id: 4010, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4011, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4012, districtId: 701, name: "Pirganj Upazila" },
  { id: 4013, districtId: 701, name: "Taraganj Upazila" },
  { id: 4014, districtId: 701, name: "Boda Upazila" },
  { id: 4015, districtId: 701, name: "Gangachara Upazila" },
  { id: 4016, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4017, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4018, districtId: 701, name: "Pirganj Upazila" },
  { id: 4019, districtId: 701, name: "Taraganj Upazila" },
  { id: 4020, districtId: 701, name: "Boda Upazila" },
  { id: 4021, districtId: 701, name: "Gangachara Upazila" },
  { id: 4022, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4023, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4024, districtId: 701, name: "Pirganj Upazila" },
  { id: 4025, districtId: 701, name: "Taraganj Upazila" },
  { id: 4026, districtId: 701, name: "Boda Upazila" },
  { id: 4027, districtId: 701, name: "Gangachara Upazila" },
  { id: 4028, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4029, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4030, districtId: 701, name: "Pirganj Upazila" },
  { id: 4031, districtId: 701, name: "Taraganj Upazila" },
  { id: 4032, districtId: 701, name: "Boda Upazila" },
  { id: 4033, districtId: 701, name: "Gangachara Upazila" },
  { id: 4034, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4035, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4036, districtId: 701, name: "Pirganj Upazila" },
  { id: 4037, districtId: 701, name: "Taraganj Upazila" },
  { id: 4038, districtId: 701, name: "Boda Upazila" },
  { id: 4039, districtId: 701, name: "Gangachara Upazila" },
  { id: 4040, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4041, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4042, districtId: 701, name: "Pirganj Upazila" },
  { id: 4043, districtId: 701, name: "Taraganj Upazila" },
  { id: 4044, districtId: 701, name: "Boda Upazila" },
  { id: 4045, districtId: 701, name: "Gangachara Upazila" },
  { id: 4046, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4047, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4048, districtId: 701, name: "Pirganj Upazila" },
  { id: 4049, districtId: 701, name: "Taraganj Upazila" },
  { id: 4050, districtId: 701, name: "Boda Upazila" },
  { id: 4051, districtId: 701, name: "Gangachara Upazila" },
  { id: 4052, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4053, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4054, districtId: 701, name: "Pirganj Upazila" },
  { id: 4055, districtId: 701, name: "Taraganj Upazila" },
  { id: 4056, districtId: 701, name: "Boda Upazila" },
  { id: 4057, districtId: 701, name: "Gangachara Upazila" },
  { id: 4058, districtId: 701, name: "Mithapukur Upazila" },
  { id: 4059, districtId: 701, name: "Pirgachha Upazila" },
  { id: 4060, districtId: 701, name: "Pirganj Upazila" },
  { id: 4061, districtId: 701, name: "Taraganj Upazila" },
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
