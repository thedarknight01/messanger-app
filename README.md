

### `README.md`

# Messenger App

Welcome to the **Messenger App**! This project is a real-time chat application built using [Next.js](https://nextjs.org/), [Firebase](https://firebase.google.com/), and [Tailwind CSS](https://tailwindcss.com/). The application allows users to sign up, log in, and chat in real-time with other users.

## ✨ Features

- **User Authentication**: Sign up and log in with email/password or using social providers like Google.
- **Real-time Messaging**: Send and receive messages instantly with Firebase Realtime Database.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, ensuring compatibility across devices.
- **User Status**: Shows if a user is online or offline.
- **Message Notifications**: Get notified when new messages arrive.
- **Message Read Receipts**: Check if your message has been read by the recipient.

## 🚀 Getting Started

Follow these steps to set up the Messenger App locally:

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Firebase account (for authentication and real-time database)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/messenger-app.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd messenger-app
   ```

3. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

4. **Configure Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Copy your Firebase project's configuration and update the `.env.local` file with the following variables:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. **Open the Application**:
   - Once the server is running, open [http://localhost:3000](http://localhost:3000) to view the app.

## 🛠️ Project Structure

```plaintext
├── components      # Reusable components for UI
├── pages           # Next.js pages and routing
│   ├── index.js    # Main landing page
│   ├── chat.js     # Chat interface page
├── public          # Static assets like images and icons
├── styles          # Global styles and Tailwind configuration
├── utils           # Utility functions and helper files
├── firebase.js     # Firebase configuration and initialization
├── .env.local      # Environment variables for Firebase setup
```

## 📝 Contribution Guidelines

We welcome contributions to improve the Messenger App. For detailed instructions on how to contribute, please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

## 💬 Feedback

If you have any questions, suggestions, or want to report a bug, please feel free to [open an issue](https://github.com/thedarknight02/messenger-app/issues).

## 👥 Contributors

This project is maintained by **Nitin Tiwari** and supported by an active community of contributors.

For a detailed list of contributors and their contributions, please refer to the [CONTRIBUTORS.md](./CONTRIBUTORS.md) file.

---

### Special Thanks
We appreciate the support and contributions from the open-source community! 🙏


