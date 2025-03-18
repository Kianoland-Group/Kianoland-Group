/// =================================================================================================================================================================================================
/// ============ FLOATING WHATSAPP ==================================================================================================================================================================
/// ================================================================================================================================================================================================= 
const path = '/Kianoland-Group/template/whatsapp-button.html';
console.log('Fetching:', path);

fetch(path)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.text();
  })
  .then(data => {
    console.log('Fetched Data:', data);
    document.getElementById('whatsapp-button').innerHTML = data;
  })
  .catch(error => console.error('Fetch Error:', error));
