class NeoMultipleFileUpload {

  constructor(areaId, fileLimit, sizeLimit, accept) {
    this.redHot = `
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill:#f44336;fill-rule:evenodd;}</style></defs><title>close-red</title><path class="cls-1" d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0ZM74.58,36.8c1.74-1.77,2.83-3.18,5-1l7,7.13c2.29,2.26,2.17,3.58,0,5.69L73.33,61.83,86.08,74.58c1.77,1.74,3.18,2.83,1,5l-7.13,7c-2.26,2.29-3.58,2.17-5.68,0L61.44,73.72,48.63,86.53c-2.1,2.15-3.42,2.27-5.68,0l-7.13-7c-2.2-2.15-.79-3.24,1-5l12.73-12.7L36.35,48.64c-2.15-2.11-2.27-3.43,0-5.69l7-7.13c2.15-2.2,3.24-.79,5,1L61.44,49.94,74.58,36.8Z"/></svg>`;
    this.blackCold = `
<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="#848484" d="M256 0c141.387 0 256 114.614 256 256 0 141.387-114.613 256-256 256C114.614 512 0 397.387 0 256 0 114.614 114.614 0 256 0zm122.257 255.999v.004c0 12.532-10.321 22.794-22.79 22.794h-76.671v79.628c0 12.531-10.266 22.79-22.794 22.79h-.004c-12.531 0-22.793-10.324-22.793-22.79v-79.628h-76.668c-12.469 0-22.794-10.316-22.794-22.794v-.004c0-12.478 10.257-22.793 22.794-22.793h76.668V153.58c0-12.466 10.319-22.793 22.793-22.793h.004c12.475 0 22.794 10.258 22.794 22.793v79.626h76.671c12.533 0 22.79 10.267 22.79 22.793z"/></svg>`;
    this.fileLimit = fileLimit;
    this.files = [];
    this.sizeLimit = sizeLimit;
    this.accept = accept;
    this.isRemove = false;
    this.area = document.getElementById(areaId);
    this.area.style.cursor = "default";
    this.addBtn = document.createElement("div");
    this.adjustDivBox(this.addBtn);
    this.addBtn.innerHTML = this.blackCold;
    this.addBtn.addEventListener("click", this.selectFile.bind(this));

    this.area.onclick = () => {
      this.selectFile();
    };
  }

  selectFile() {
    if (this.files.length >= this.fileLimit) {
      return;
    }
    if (this.isRemove) {
      this.isRemove = false;
      return;
    }
    this.fileNow = document.createElement("input");
    this.fileNow.type = "file";
    this.fileNow.accept = this.accept;
    this.fileNow.style.display = "none";
    document.body.appendChild(this.fileNow);
    this.fileNow.addEventListener("change", this.selectedFile.bind(this));
    this.fileNow.click();
  }

  selectedFile(e) {
    const fileNow = e.target.files[0];
    if (fileNow.size > this.sizeLimit) {
      alert("Invalid file size");
      return;
    }
    this.appendFile(fileNow);
  }

  adjustDivBox(div) {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.borderRadius = "5px";
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.display = "inline-block";
    div.style.marginRight = "10px";
  }

  getMinSize(width, height, minWidth, minHeight) {
    const ratio = width / height;
    const dstRatio = minWidth / minHeight;
    if (ratio > dstRatio) {
      const w = Math.round(width / height * minHeight);
      return [w, minHeight];
    }
    else if (ratio < dstRatio) {
      const h = Math.round(height / width * minWidth);
      return [minWidth, h];
    }
    return [minWidth, minHeight];
  }

  appendFile(file) {
    if (!this.files.length) {
      this.inner = this.area.innerHTML;
      this.area.innerHTML = "";
      this.area.onclick = null;
    }
    else {
      this.addBtn.remove();
    }

    const url = URL || webkitURL;
    const img = new Image();
    img.onload = () => {
      const cv = document.createElement("canvas");
      const rz = this.getMinSize(img.width, img.height, 100, 100);
      cv.width = rz[0];
      cv.height = rz[1];
      const ctx = cv.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, rz[0], rz[1]);
      const divBox = document.createElement("div");
      divBox.style.backgroundImage = `url("${cv.toDataURL("jpeg", 70)}")`; // data:image/jpg;base64,
      this.adjustDivBox(divBox);

      const redHot = document.createElement("div");
      redHot.style.width = redHot.style.height = "20px";
      redHot.innerHTML = this.redHot;
      redHot.style.position = "absolute";
      redHot.style.zIndex = "1";
      redHot.style.cursor = "pointer";
      redHot.addEventListener("click", () => {
        this.isRemove = true;
        this.area.removeChild(divBox);
        this.removeFile(file);
      });

      divBox.appendChild(redHot);
      this.area.appendChild(divBox);
      this.fileNow.remove();
      if (this.files.length < this.fileLimit) this.area.appendChild(this.addBtn);
    };
    img.src = url.createObjectURL(file);

    this.files.push(file);

  }

  removeFile(file) {
    const n = this.files.indexOf(file);
    if (n < 0) return;
    this.files.splice(n, 1);
    console.log("File left", this.files.length);
    if (!this.files.length) {
      this.area.innerHTML = this.inner;
      this.area.onclick = () => {
        this.selectFile();
      };
    }
    else if (this.files.length === (this.fileLimit - 1)) {
      this.area.appendChild(this.addBtn);
    }
  }

  getFiles() {
    return this.files;
  }

}
// It's good
