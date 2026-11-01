const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb', '--font-render-hinting=none', '--disable-gpu'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file:///workspace/anthropic-motion/index.html?capture=1');
  await page.waitForFunction(() => window.__ready === true, { polling: 250 });
  const report = await page.evaluate(() => {
    const issues = [];
    // 1) DOM 文本溢出检查（各场景关键元素，取场景中段时刻）
    const checks = [
      ['s1-l1', 2], ['s1-l2', 4], ['s1-sub', 6],
      ['s2-h', 10], ['s2-names', 11], ['s2-p1', 12], ['s2-big', 14],
      ['s3-h', 20], ['s3-body', 22], ['s3-src', 24], ['s3-cap', 28],
      ['s4-h', 33], ['s4-cap', 46],
      ['s5-h', 50], ['s5-num', 56],
      ['s6-l1', 63], ['s6-l2', 64], ['s6-mission', 66], ['s6-name', 73], ['s6-tag', 74], ['s6-credits', 76]
    ];
    for (const [id, t] of checks) {
      window.__seek(t);
      const el = document.getElementById(id);
      if (!el) { issues.push(id + ' MISSING'); continue; }
      const r = el.getBoundingClientRect();
      if (el.scrollWidth > el.clientWidth + 1) issues.push(`${id} overflowX ${el.scrollWidth}>${el.clientWidth}`);
      if (el.scrollHeight > el.clientHeight + 1) issues.push(`${id} overflowY ${el.scrollHeight}>${el.clientHeight}`);
      if (r.left < 0 || r.top < 0 || r.right > 1920 || r.bottom > 1080) issues.push(`${id} outOfStage ${JSON.stringify(r)}`);
    }
    // 2) SVG 时间轴标签重叠检查（全部节点显示后）
    window.__seek(47);
    const names = [...document.querySelectorAll('.tl-name')];
    const boxes = names.map(n => { const b = n.getBBox(); return { x: b.x, w: b.width, txt: n.textContent }; });
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].x < 0) issues.push('tl-name off-left: ' + boxes[i].txt);
      if (boxes[i].x + boxes[i].w > 1440) issues.push('tl-name off-right: ' + boxes[i].txt);
      for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i], b = boxes[j];
        if (Math.abs(a.x - b.x) < (a.w + b.w) / 2 && Math.abs((i % 2) - (j % 2)) === 0) {
          issues.push('tl overlap: ' + a.txt + ' / ' + b.txt);
        }
      }
    }
    // 3) 融资条溢出
    window.__seek(60);
    document.querySelectorAll('.fund-item').forEach((d, i) => {
      if (d.scrollWidth > d.clientWidth + 1) issues.push('fund' + i + ' overflow');
    });
    // 4) 文档页内容高度
    window.__seek(30);
    const doc = document.getElementById('s3-doc');
    if (doc.scrollHeight > doc.clientHeight + 1) issues.push('doc overflowY');
    return issues;
  });
  console.log(report.length ? report.join('\n') : 'LAYOUT OK');
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
