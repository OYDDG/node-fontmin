var Fontmin = require("fontmin");
var fs = require("fs");

var srcPath = "srcTTF/*.ttf"; // 字体源文件
var destPath = "output/"; // 输出路径
var saveWordPath = "saveWord/saveWord.txt";

fs.readFile(saveWordPath, "utf-8", (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	// 初始化
	var fontmin = new Fontmin()
		.src(srcPath) // 输入配置
		.use(
			Fontmin.glyph({
				// 字型提取插件
				text: data, // 所需文字
			})
		)
		.dest(destPath); // 输出配置

	console.log("精简字体中...");
	// 执行
	fontmin.run(function (err, files, stream) {
		if (err) {
			// 异常捕捉
			console.error(err);
		}

		console.log("done"); // 成功
	});
});
