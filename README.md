# 📱 React Native App – TypeScript (Android Studio + Expo Setup)

## 🧠 Project Overview
This is a React Native mobile application developed using **TypeScript**, designed to run on **Android**. The project is built and managed using **Android Studio** and **Expo** for simplified development and testing.

---

## 🚀 Features
- 📦 React Native (with TypeScript)
- ⚡ Powered by Expo for fast iteration
- 🧪 Supports Android emulators, Expo Go, and real devices
- 🧭 Navigation (React Navigation)
- 🗃️ Local state and props management
- 🎨 UI styled with Flexbox and StyleSheet
- 🔍 Debugging with Expo DevTools and Android Logcat

---

## 🛠️ Development Environment

### ✅ Prerequisites
- Node.js ≥ 18.x
- npm or yarn
- Expo CLI
- Android Studio (for emulator)
- Git (optional)

### 📱 Device Requirements
- Android Emulator (configured in Android Studio) **OR**
- Android Phone with **Expo Go** installed

---

## ⚙️ Installation & Setup

### 1. Clone the project
```bash
git clone https://github.com/vutranquangminh/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Expo
```bash
npx expo start
```

> You can scan the QR code using **Expo Go** or run on emulator.

---

## 📁 Project Structure
```
├── src/
│   ├── components/     # Reusable components
│   ├── screens/        # Screen views
│   ├── navigation/     # Navigation configs
│   ├── assets/         # Images, fonts
│   ├── services/       # API calls, storage
│   └── utils/          # Helpers, constants
├── App.tsx            # Entry point
├── tsconfig.json      # TypeScript config
├── app.json / app.config.js
├── package.json
```

---

## 🧪 Scripts
| Command             | Description                      |
|--------------------|----------------------------------|
| `npx expo start`    | Start Expo Dev Server            |
| `npx expo run:android` | Run on Android Emulator       |
| `npm run lint`      | Lint TypeScript code             |

---

## 🧩 Libraries Used
- Expo
- React Navigation
- React Native Gesture Handler
- Async Storage
- React Native Vector Icons (via Expo)
- TypeScript
- etc.

---

## 📝 Notes
- Use **Expo Go** for quick testing on real devices.
- Use `npx expo prebuild` to generate native code if needed.
- Compatible with both Android emulators and physical devices.

---

## 📚 Learning Reference
This project is part of a hands-on learning course in **React Native with TypeScript**, following structured modules on component design, navigation, Firebase, media handling, and publishing.

---

## ✨ Author
Vũ Trần Quang Minh – React Native Learner  
[GitHub](https://github.com/vutranquangminh) | [LinkedIn](https://linkedin.com/in/vutranquangminh)