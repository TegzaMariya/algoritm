class ImageCache {
  constructor() {
    this.cache = {};
  }

  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash.toString();
  }

  add(path, url) {
    const key = this.hashKey(path);
    this.cache[key] = url;
    console.log(` Додано: ${path} -> ${url}`);
  }

  find(path) {
    const key = this.hashKey(path);
    if (this.cache[key]) {
      console.log(` Знайдено в кеші: ${this.cache[key]}`);
      return this.cache[key];
    } else {
      console.log(` Немає в кеші: ${path}`);
      return null;
    }
  }

  remove(path) {
    const key = this.hashKey(path);
    if (this.cache[key]) {
      delete this.cache[key];
      console.log(` Видалено з кешу: ${path}`);
    } else {
      console.log(` Не знайдено для видалення: ${path}`);
    }
  }

  loadImage(path) {
    const cachedUrl = this.find(path);
    if (cachedUrl) {
      console.log(` Завантажено з кешу: ${cachedUrl}`);
    } else {
      const newUrl = "https://site.com" + path;
      console.log(` Завантажено з сервера: ${newUrl}`);
      this.add(path, newUrl);
    }
  }
}

const cache = new ImageCache();

cache.add("/img/logo.png", "https://site.com/img/logo.png");
cache.add("/img/banner.jpg", "https://site.com/img/banner.jpg");

cache.find("/img/logo.png");
cache.find("/img/missing.jpg");

cache.remove("/img/banner.jpg");

cache.loadImage("/img/logo.png");
cache.loadImage("/img/new.png");