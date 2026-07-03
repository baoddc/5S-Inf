const axios = require('axios');

async function getOriginalUrl(shortUrl) {
  console.log(`Đang phân tích link: ${shortUrl}...`);
  try {
    const response = await axios.get(shortUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      maxRedirects: 5,
      timeout: 10000
    });

    const originalUrl = response.request.res.responseUrl || shortUrl;

    console.log('\n================ RESULT ================');
    console.log('Link rút gọn:', shortUrl);
    console.log('Link gốc tìm được:', originalUrl);
    console.log('========================================\n');
    return originalUrl;
  } catch (error) {
    console.error('Lỗi khi phân tích URL:', error.message);
  }
}

const testUrl = 'https://vn.shp.ee/GnQgLRXu';
getOriginalUrl(testUrl);
