class DrawingCanvas {

	constructor(area) {

		this.area = area;
		this.rotation = 0;
		this.scale = 1.0;
		this.width = 500;
		this.height = Math.round(500 * 9 / 16);
		this.layers = [];
		this.activeLayer = null;

		this.initial();
	}

	centerCanvas() {
		if (this.rotation === 0) {
			const sz = this.area.getBoundingClientRect();
			this.canvasShow.style.marginLeft = `${Math.round((sz.width - this.canvasShow.width) / 2)}px`;
			this.canvasShow.style.marginTop = `${Math.round((sz.height - this.canvasShow.height) / 2)}px`;
		}
	}

	addImage(img) {
		if (this.layers.length === 1 && this.activeLayer.objects.length === 0) {
			// is first image
			this.activeLayer.canvas.width = this.canvas.width = this.width = img.width;
			this.activeLayer.canvas.height = this.canvas.height = this.height = img.height;
			// this.centerCanvas();
		}
		const cv = document.createElement("canvas");
		cv.width = img.width;
		cv.height = img.height;
		cv.getContext("2d").drawImage(img, 0, 0);
		this.activeLayer.objects.push({
			type: "image",
			canvas: cv,
			rotation: 0,
			left: 0,
			top: 0,
			scale: 1.0
		});
		this.renderLayer(this.activeLayer);
		this.autoScale();
		this.centerCanvas();
	}

	addText() {
		//
	}

	calcNewSize(width, height, containerWidth, containerHeight) {
		const ctRatio = containerWidth / containerHeight;
		const ratio = width / height;
		const result = [containerWidth, containerHeight];
		if (ratio > ctRatio) {
			result[1] = Math.round(containerWidth / ratio);
		}
		else if (ctRatio > ratio) {
			result[0] = Math.round(containerHeight * ratio);
		}

		return result;
	}

	autoScale() {
		const lastSz = [this.canvas.width, this.canvas.height];
		const ctSz = this.area.getBoundingClientRect();

		const newSize = this.calcNewSize(this.width, this.height, ctSz.right - ctSz.left, ctSz.bottom - ctSz.top);
		this.canvasShow.width = newSize[0];
		this.canvasShow.height = newSize[1];
		this.scale = this.canvasShow.width / this.canvas.width;
		this.ctxShow.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvasShow.width, this.canvasShow.height);
	}

	addLayer() {
		const cv = document.createElement("canvas");
		const objLayer = {
			isHidden: false,
			canvas: cv,
			ctx: cv.getContext("2d"),
			objects: []
		};
		if (!this.activeLayer) {
			this.layers.push(objLayer);
		}
		else {
			const n = this.layers.indexOf(this.activeLayer);
			if (n === (this.layers.length - 1)) {
				this.layers.push(objLayer);
			}
			else {
				this.layers.splice(n, 0, objLayer);
			}

		}
		this.activeLayer = objLayer;
	}

	renderLayer(layer) {
		layer.ctx.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
		for (const obj of layer.objects) {
			layer.ctx.drawImage(obj.canvas, obj.left, obj.top);
		}
		this.render();
	}

	render() {
		for (const layer of this.layers) {
			if (layer.isHidden) continue;
			console.log("Draw layer", layer);
			this.ctx.drawImage(layer.canvas, 0, 0);
		}
		this.ctxShow.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, this.canvasShow.width, this.canvasShow.height);
		if (this.onRender) {
			this.onRender();
		}
	}

	getLayers() {
		return this.layers;
	}

	onRender = null;

	initial() {
		const cvBg = document.createElement("canvas");
		cvBg.width = 20;
		cvBg.height = 20;
		const ctx = cvBg.getContext("2d");
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, 20, 20);
		ctx.fillStyle = "#cccccc";
		ctx.fillRect(0, 0, 10, 10);
		ctx.fillRect(10, 10, 10, 10);

		this.area.style.overflow = "hidden";
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
		
		this.canvasShow = document.createElement("canvas");
		this.canvasShow.width = this.canvas.width;
		this.canvasShow.height = this.canvas.height;
		this.ctxShow = this.canvasShow.getContext("2d");
		this.canvasShow.style.background = `url(${cvBg.toDataURL()})`;
		this.canvasShow.style.backgroundRepeat = "repeat";

		this.addLayer();

		this.area.innerHTML = "";
		this.area.appendChild(this.canvasShow);

		this.centerCanvas();

		window.addEventListener("resize", () => {
			this.centerCanvas();
		});

		document.addEventListener("paste", (e) => {
			const dT = e.clipboardData || window.clipboardData;
			const file = dT.files[0];
			const theType = file.type
			const fr = new FileReader();
			fr.onload = () => {
				const bv = new Uint8Array(fr.result);
				const blob = new Blob([bv], {type: theType});
				const url = window.URL || window.webkitURL;
				const imageURL = url.createObjectURL(blob);
				const img = new Image();
				img.onload = () => {
					this.addImage(img);
				};
				img.src = imageURL;
			}
			fr.readAsArrayBuffer(file);
		});
	}
}

class LayerBar {
	
	constructor(area, layers) {
		this.area = area;
		this.layers = layers;

		this.initial();
	}

	initial() {
		const wrapper = document.createElement("div");
		wrapper.style.backgroundColor = "#ff0000";
		wrapper.style.width = "100%";
		wrapper.style.height = "100%";
		this.area.appendChild(wrapper);
		const container = document.createElement("div");
		this.container = container;
		wrapper.appendChild(this.container);
	}

	drawLayer(layers) {
		this.container.innerHTML = "";
		for (const layer of layers) {
			const divLayer = document.createElement("div");
			divLayer.style.height = "100px";
			divLayer.style.backgroundImage = `url(${layer.canvas.toDataURL()})`;
			divLayer.style.backgroundSize = "contain";
			divLayer.style.backgroundRepeat = "no-repeat";
			divLayer.style.backgroundPosition = "center";
			divLayer.style.backgroundColor = "#666666";
			divLayer.style.marginTop = "4px";
			this.container.appendChild(divLayer);
		}
	}
}

function createLeftPanelBtn(area, imgPath, cbClick) {
	const div = document.createElement("div");
	div.style.textAlign = "center";
	div.style.marginTop = "8px";
	const img = new Image();
	img.src = imgPath;
	img.style.cursor = "pointer";
	img.onclick = cbClick;
	div.appendChild(img);
	area.appendChild(div);
}

window.addEventListener("load", () => {

	const dc = new DrawingCanvas(document.getElementById("panel_mid"));

	const panelLeft = document.getElementById("panel_left");

	createLeftPanelBtn(panelLeft, "images/add-image.png", () => {
		alert("Oh yeah");
	});

	createLeftPanelBtn(panelLeft, "images/draw.png", () => {
		alert("Draw");
	});

	createLeftPanelBtn(panelLeft, "images/type.png", () => {
		alert("Type");
	});

	const layerBar = new LayerBar(document.getElementById("panel_layers"), dc.getLayers());

	dc.onRender = () => {
		console.log("On render!!");
		layerBar.drawLayer(dc.getLayers());
	};
});
