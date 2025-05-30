function loadTemplate(id, localPath, hostingPath) {
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const filePath = isLocalhost ? localPath : hostingPath;

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      // Re-initialize chat bubble after template loads
      if (id === 'chattbot') {
        initChatBubble();
      }
    })
    .catch(error => {
      console.error(`Fetch Error (${filePath}):`, error);
      // You might want to create default content here if the fetch fails
    });
}

// Load Footer & WhatsApp Button
loadTemplate('footer-placeholder', '/Kianoland-Group/template/footer.html', '../template/footer.html');
loadTemplate('whatsapp-button', '/Kianoland-Group/template/whatsapp-button.html', '../template/whatsapp-button.html');
loadTemplate('chattbot', '/Kianoland-Group/template/chattbot.html', '../template/chattbot.html');
