// Case data storage
const caseData = [];

// Function to add cases
function addCase(reference, caseNumber, partyName, jurisdiction, status, nextListingDate) {
  caseData.push({ reference, caseNumber, partyName, jurisdiction, status, nextListingDate });
}

// Adding cases manually
addCase("SJ12345", "2024/0001", "John Doe", "District Court - Civil", "Active");
addCase("SJ12375", "2024/0001", "John Doe", "District Court - Civil", "Active");

// Export the case data for use in other scripts
export { caseData };
