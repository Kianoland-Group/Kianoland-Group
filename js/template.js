function loadTemplate(id, localPath, hostingPath) {
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const filePath = isLocalhost ? localPath : hostingPath;

  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(`Fetch Error (${filePath}):`, error));
}

// Load Footer & WhatsApp Button
loadTemplate('footer-placeholder', '/Kianoland-Group/template/footer.html', '../template/footer.html');
loadTemplate('whatsapp-button', '/Kianoland-Group/template/whatsapp-button.html', '../template/whatsapp-button.html');

