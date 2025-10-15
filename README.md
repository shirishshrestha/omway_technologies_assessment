# 🛒 Product Management Dashboard

A modern **Next.js 15** and **React 19** based Product Management Dashboard built for learning and demonstration purposes.  
This project integrates **React Hook Form**, **Zod**, **TanStack Query**, and **Redux** for robust state and data management, with data fetched from the public [DummyJSON API](https://dummyjson.com/).

---

## 🚀 Features

- 🔐 **Authentication (Demo Login)**

  - Username: `emilys`
  - Password: `emilyspass`

- 📦 **Product Management**

  - View paginated product lists
  - Add, edit, and delete products
  - Category-based filtering
  - Search functionality

- ⚙️ **Tech Stack**
  - **Next.js 15** — for optimized SSR and routing
  - **React 19** — latest React features and performance improvements
  - **TanStack Query (React Query)** — for efficient server-state management
  - **Redux Toolkit** — for centralized client-side state handling
  - **React Hook Form + Zod** — for form handling and schema validation
  - **Tailwind CSS / Shadcn UI** — for styling and consistent UI components

---

## 🧠 API Integration

All product data is fetched from the [DummyJSON API](https://dummyjson.com/products).  
Endpoints include:

- `GET /products` – list all products
- `GET /products/:id` – fetch single product details
- `POST /products/add` – add new product
- `PUT /products/:id` – update product
- `DELETE /products/:id` – remove product

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/product-dashboard.git
cd product-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
```

### Then open 👉 http://localhost:3000 in your browser.
