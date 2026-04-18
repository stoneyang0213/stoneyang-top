import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");

const TARGET = 720; // 最终输出 720x720
const PAD = 48; // 白色 padding

async function cropAndPad({ src, left, top, size, dst }) {
  await sharp(path.join(PUBLIC, src))
    .extract({ left, top, width: size, height: size })
    .resize(TARGET - PAD * 2, TARGET - PAD * 2)
    .extend({
      top: PAD,
      bottom: PAD,
      left: PAD,
      right: PAD,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(PUBLIC, dst));
  console.log(`✓ ${dst}`);
}

async function resizeAndPad({ src, dst }) {
  await sharp(path.join(PUBLIC, src))
    .resize(TARGET - PAD * 2, TARGET - PAD * 2)
    .extend({
      top: PAD,
      bottom: PAD,
      left: PAD,
      right: PAD,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(PUBLIC, dst));
  console.log(`✓ ${dst}`);
}

// wechat 888x1131: 二维码在中部,约 134,270,620x620
await cropAndPad({
  src: "qr-wechat.jpg",
  left: 134,
  top: 270,
  size: 620,
  dst: "qr-wechat.png",
});

// gongzhonghao 430x430: 已是纯二维码,只加 padding
await resizeAndPad({
  src: "qr-gongzhonghao.jpg",
  dst: "qr-gongzhonghao.png",
});

// xiaohongshu 1279x1747: 二维码在右下角,缩小 size 并右移
await cropAndPad({
  src: "qr-xiaohongshu.jpg",
  left: 850,
  top: 1360,
  size: 340,
  dst: "qr-xiaohongshu.png",
});

console.log("\n完成. 查看 public/qr-*.png");
