import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'AYAPA.jsonl.txt');

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.trim().split('\n');
    const riddles = lines.map(line => JSON.parse(line));
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];

    res.status(200).json({
      author: "ehsan fazli",
      riddle: randomRiddle
    });
  } catch (error) {
    res.status(500).json({ error: 'خطا در خواندن یا تجزیه فایل چیستان‌ها.' });
  }
}
