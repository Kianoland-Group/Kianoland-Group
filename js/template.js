function loadTemplate(id, path) {
  fetch(path)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Re-initialize chat bubble setelah chattbot dimuat
      if (id === 'chattbot' && typeof initChatBubble === "function") {
        initChatBubble();
      }
    })
    .catch(error => {
      console.error(`Fetch Error (${path}):`, error);
    });
}

// ✅ Load semua partial dari root /template/
loadTemplate('footer-placeholder', '/template/footer.html');
loadTemplate('whatsapp-button', '/template/whatsapp-button.html');
loadTemplate('chattbot', '/template/chattbot.html');
