# 🔗 URL Shortener Microservice

A robust HTTP microservice that allows users to shorten long URLs, customize shortcodes, track usage analytics, and handle redirection with expiry support.

---

## 🚀 Features

- 🔒 Globally unique shortcodes (custom or auto-generated)
- ⏳ Link expiry support (default: 30 minutes)
- 📈 Analytics: total clicks, timestamps, referrers, and location (if extended)
- 🔁 Redirects from short URL to original URL
- 📝 Custom logging middleware (no console logging used)
- 🌐 Built with Express.js and MongoDB

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Logging:** Custom middleware to log HTTP requests
- **Other:** Mongoose, shortid/nanoid (for unique ID generation)

---

## 📦 API Endpoints

### 1. Create Short URL

**POST** `

#### Request Body (JSON)
```json
{
  "url": "https://example.com/some/very/long/url",
  "validity": 30,
}
{
  "shortLink": "http://localhost:8001/custom123",
  "expiry": "2025-07-14T14:00:00.000Z"
}
