const divisions = [
    { id: 1, name: 'Dhaka' },
    { id: 2, name: 'Chattogram' },
    { id: 3, name: 'Rajshahi' },
    // ... Other divisions
  ];
  
  const districts = [
    // Dhaka Division
    { id: 101, divisionId: 1, name: 'Dhaka' },
    { id: 102, divisionId: 1, name: 'Gazipur' },
    // ... Other districts of Dhaka Division
  
    // Chattogram Division
    { id: 201, divisionId: 2, name: 'Chattogram' },
    { id: 202, divisionId: 2, name: 'Cox\'s Bazar' },
    // ... Other districts of Chattogram Division
  
    // Rajshahi Division
    { id: 301, divisionId: 3, name: 'Rajshahi' },
    { id: 302, divisionId: 3, name: 'Bogra' },
    // ... Other districts of Rajshahi Division
    // ... Other districts of other divisions
  ];
  
  const subDistricts = [
    // Dhaka District
    { id: 1001, districtId: 101, name: 'Uttara' },
    { id: 1002, districtId: 101, name: 'Mirpur' },
    // ... Other sub-districts of Dhaka District
  
    // Chattogram District
    { id: 2001, districtId: 201, name: 'Chattogram Sadar' },
    { id: 2002, districtId: 201, name: 'Pahartali' },
    // ... Other sub-districts of Chattogram District
  
    // Bogra District
    { id: 3001, districtId: 302, name: 'Bogra Sadar' },
    { id: 3002, districtId: 302, name: 'Shajahanpur' },
    // ... Other sub-districts of Bogra District
    // ... Other sub-districts of other districts
  ];
  
  const unions = [
    // Uttara Sub-District
    { id: 10001, subDistrictId: 1001, name: 'Uttara Union' },
    { id: 10002, subDistrictId: 1001, name: 'Dakkhinkhan Union' },
    // ... Other unions of Uttara Sub-District
  
    // Chattogram Sadar Sub-District
    { id: 20001, subDistrictId: 2001, name: 'Chattogram City Corporation' },
    { id: 20002, subDistrictId: 2001, name: 'Al-ankar Union' },
    // ... Other unions of Chattogram Sadar Sub-District
  
    // Bogra Sadar Sub-District
    { id: 30001, subDistrictId: 3001, name: 'Shibganj Union' },
    { id: 30002, subDistrictId: 3001, name: 'Nashratpur Union' },
    // ... Other unions of Bogra Sadar Sub-District
    // ... Other unions of other sub-districts
  ];
  
  export { divisions, districts, subDistricts, unions };
  