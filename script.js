const uploadBox = document.getElementById("uploadBox");
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");
    const aiBtn = document.getElementById("aiBtn");
    const loader = document.getElementById("loader");
    const editor = document.getElementById("editor");

    // Drag & drop file handling
    uploadBox.addEventListener("click", () => fileInput.click());

    uploadBox.addEventListener("dragover", (e) => {
      e.preventDefault();
      uploadBox.classList.add("dragover");
    });

    uploadBox.addEventListener("dragleave", () => {
      uploadBox.classList.remove("dragover");
    });

    uploadBox.addEventListener("drop", (e) => {
      e.preventDefault();
      uploadBox.classList.remove("dragover");
      handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener("change", (e) => {
      handleFiles(e.target.files);
    });

    function handleFiles(files) {
      fileList.innerHTML = "";
      for (let file of files) {
        const item = document.createElement("div");
        item.classList.add("file-item");
        item.textContent = "📎 " + file.name;
        fileList.appendChild(item);
      }
    }

    // AI Suggest simulation
    aiBtn.addEventListener("click", () => {
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
        editor.innerHTML += "<br><br><em>🤖 Suggested: Add a call-to-action at the end.</em>";
      }, 2000);
    });
