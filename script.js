function copyText(noteId) {
  const text = document.getElementById(noteId).innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Note copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy text: ' + err);
    });
}
