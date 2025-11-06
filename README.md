# TOP: Backstage — A Simple Members-Only Message Board

Backstage is a full-stack Node.js web application that allows users to sign up, log in, and post messages — but only **members** (or **admins**) can post.  
Non-members can view the site but need to solve a riddle to become a member.  
The app demonstrates authentication, authorization, and basic CRUD functionality using Express, PostgreSQL, and EJS.

---

## 🚀 Features

- 🔐 **User authentication** — users can sign up, log in, and log out  
- 🧩 **Membership access** — users must solve a riddle to become a member  
- 🧑‍💼 **Admin privileges** — admins can post and view everything by default  
- 💬 **Message board** — members can post messages visible to everyone  
- 🗓️ **Timestamps** — each message shows date and time of posting  
- 🎨 **EJS templates** — server-side rendering with dynamic data  
- 💾 **PostgreSQL** — stores users and messages securely

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Node.js, Express |
| **Database** | PostgreSQL |
| **Templating** | EJS |
| **Styling** | CSS |
| **Authentication** | Passport.js (Local Strategy) |
| **ORM/Query** | Node-postgres (`pg`) |
