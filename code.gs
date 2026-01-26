// Handle GET requests (recommended for avoiding CORS issues)
function doGet(e) {
  return saveToSheet(e);
}

// Handle POST requests (fallback)
function doPost(e) {
  return saveToSheet(e);
}

// Main function to save data to Google Sheets
function saveToSheet(e) {
  try {
    // Open the Google Spreadsheet
    const sheetUrl = "https://docs.google.com/spreadsheets/d/1VT7rPHyA2Ke2k6UiMsV6uREueoZpKmbtGYPy2bY1EMw/edit?gid=0#gid=0";
    const ss = SpreadsheetApp.openByUrl(sheetUrl);
    const sheet = ss.getSheetByName('Sheet1');
    
    // Get form data from the request (works for both GET and POST)
    let data = e.parameter;
    
    // Append data to spreadsheet
    // Columns: Name, Email, Brand, Website, Ad Spend, Message, Timestamp
    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.brand || "",
      data.website || "",
      data.ad_spend || "",
      data.message || "",
      new Date()
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput("SUCCESS")
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    // Log error for debugging
    Logger.log("Error: " + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput("ERROR: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
