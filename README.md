# 🔐 Secure Password Generator

A minimal, powerful web app to instantly generate secure passwords with customizable strength and length. Built with HTML, CSS, and JavaScript.

## 🚀 Live Demo

🔗 [Live Link](passswordcreate.ccbp.tech)

## 📸 Screenshots
### Noraml UI
![image](https://github.com/user-attachments/assets/0c271d69-d209-4dd7-ae2f-18809efd4897)

### Generate password UI
![image](https://github.com/user-attachments/assets/a5075f3e-71c7-4dad-88ea-8fda93c61135)

### Copied UI
![image](https://github.com/user-attachments/assets/ce81cd90-4135-432d-bc36-9598f4d5c507)




## ⚙️ Features

- 🛡️ **Real-time Password Generation**
- 🔢 **Custom Length Selector (Slider)**
- 📋 **Copy to Clipboard with Feedback**
- 💻 **Fully Responsive Design**

## 🧠 How It Works

1. **Slider** to select password length (default: 16 chars)
2. **Generator** builds a random mix of upper/lowercase, numbers, symbols
4. **Clipboard Copy** with auto-toast or alert

## ⚔️ Challenges Faced
| Challenge | Solution |
|----------|----------|
| Clipboard API failed in some browsers | Used `navigator.clipboard.writeText() ` as fallback |
| Password not regenerating on slider move | Added event listener to auto-generate password on input |


## 💡 Tech Stack

- HTML5
- CSS3 (Flexbox + Bootstrap)
- JavaScript (ES6+)

## Thank you for visiting Repo 💙
