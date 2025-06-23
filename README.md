# Tasklet

**Tasklet** is a React Native mobile app built with Expo for managing tasks, tracking time, and capturing ideas. It includes a shopping list, a countdown timer, and a note-taking feature to boost productivity.

---

## Features

### 🛒 Shopping List
- Add, delete, and mark items as completed
- Persistent storage using AsyncStorage
- Smooth animations and haptic feedback

### ⏲️ Counter
- Countdown timer for tasks with a 2-hour interval
- Push notifications for task reminders
- History of completed tasks with timestamps
- Confetti animation on task completion

### 💡 Ideas
- Quick note-taking for capturing ideas
- Delete notes with confirmation alerts
- Persistent storage for notes

---

## Tech Stack

- **React Native**
- **Expo** (with Expo Router for navigation)
- **AsyncStorage** for local storage
- **Expo Notifications** for push notifications
- **Expo Haptics** for tactile feedback
- **React Native Confetti Cannon** for animations
- **date-fns** for date formatting

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- [Expo Go app](https://expo.dev/client) (on iOS/Android for testing)
- [Git](https://git-scm.com/)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/ItsME-TM/Tasklet.git
cd tasklet

# Install dependencies
npm install

# Start the Expo development server
npm start
```

Scan the QR code with the Expo Go app on your phone, or run on an emulator.

---

## Usage

### Shopping List
1. Tap the **"Shopping List"** tab.
2. Enter an item in the text input and press **"Done"** to add.
3. Tap an item to mark it as completed; tap the red **"X"** to delete.

### Counter
1. Tap the **"Counter"** tab.
2. View the countdown timer (days, hours, minutes, seconds).
3. Press **"Mark as Done"** to reset the timer and trigger a notification.
4. Tap the history icon in the header to view past completions.

### Ideas
1. Tap the **"Idea"** tab.
2. Enter a note in the text input and press **"Done"** to add.
3. Tap the red **"X"** to delete a note after confirming.

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature-name`).
3. **Make your changes and commit** (`git commit -m "Add feature"`).
4. **Push to your branch** (`git push origin feature-name`).
5. **Open a pull request**.

Please include a description of your changes and ensure they align with the project’s style.

---

## License

This project is licensed under the [MIT License](LICENSE).