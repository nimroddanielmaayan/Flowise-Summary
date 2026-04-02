<script type="module">
  import Chatbot from 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
  Chatbot.init({
    chatflowid: '91e9c803-5169-4db9-8207-3c0915d71c5f',
    apiHost: 'http://localhost:3000',
    pageTitle: 'Flowise Chatbot Widget', // Optional: browser tab title. Empty string falls back to "Flowise Chatbot Widget"
    chatflowConfig: {
      // topK: 2
    },
    observersConfig: {
      // (optional) Allows you to execute code in parent based upon signal observations within the chatbot.
      // The userinput field submitted to bot ("" when reset by bot)
      observeUserInput: (userInput) => {
        console.log({ userInput });
      },
      // The bot message stack has changed
      observeMessages: (messages) => {
        console.log({ messages });
      },
      // The bot loading signal changed
      observeLoading: (loading) => {
        console.log({ loading });
      },
    },
    theme: {
      button: {
        backgroundColor: '#3B81F6',
        right: 20,
        bottom: 20,
        size: 48, // small | medium | large | number
        dragAndDrop: true,
        iconColor: 'white',
        customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        autoWindowOpen: {
          autoOpen: true, //parameter to control automatic window opening
          openDelay: 2, // Optional parameter for delay time in seconds
          autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
        },
      },
      tooltip: {
        showTooltip: true,
        tooltipMessage: 'Hi There 👋!',
        tooltipBackgroundColor: 'black',
        tooltipTextColor: 'white',
        tooltipFontSize: 16,
      },
      disclaimer: {
        title: 'Disclaimer',
        message: 'By using this chatbot, you agree to the <a target="_blank" href="https://flowiseai.com/terms">Terms & Condition</a>',
        textColor: 'black',
        buttonColor: '#3b82f6',
        buttonText: 'Start Chatting',
        buttonTextColor: 'white',
        blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)', //The color of the blurred background that overlays the chat interface
        backgroundColor: 'white',
        denyButtonText: 'Cancel',
        denyButtonBgColor: '#ef4444',
      },
      form: {
        backgroundColor: 'white',
        textColor: 'black',
      }
      customCSS: ``, // Add custom CSS styles. Use !important to override default styles
      chatWindow: {
        showTitle: true,
        showAgentMessages: true,
        title: 'Flowise Bot',
        titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        titleBackgroundColor: '#3B81F6',
        titleTextColor: '#ffffff',
        welcomeMessage: 'Hello! This is custom welcome message',
        errorMessage: 'This is a custom error message',
        backgroundColor: '#ffffff',
        backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
        height: 700, // number (px) or CSS string e.g. '80dvh', 'min(700px, 80dvh)'
        width: 400,  // number (px) or CSS string e.g. '400px', '50vw'
        fontSize: 16,
        starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
        starterPromptFontSize: 15,
        clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads
        sourceDocsTitle: 'Sources:',
        renderHTML: true,
        headerHtml: '<div style="padding: 10px; background: #f0f0f0;"><h3>My Custom Header</h3></div>', // Optional HTML rendered at the top of the chat window
        botMessage: {
          backgroundColor: '#f7f8ff',
          textColor: '#303235',
          showAvatar: true,
          avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png',
        },
        userMessage: {
          backgroundColor: '#3B81F6',
          textColor: '#ffffff',
          showAvatar: true,
          avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
        },
        textInput: {
          placeholder: 'Type your question',
          backgroundColor: '#ffffff',
          textColor: '#303235',
          sendButtonColor: '#3B81F6',
          maxChars: 50,
          maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
          enableInputHistory: false,
          autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
          sendMessageSound: true,
          // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
          receiveMessageSound: true,
          // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
        },
        feedback: {
          color: '#303235',
        },
        dateTimeToggle: {
          date: true,
          time: true,
        },
        footer: {
          textColor: '#303235',
          text: 'Powered by',
          company: 'Flowise',
          companyLink: 'https://flowiseai.com',
        },
      },
    },
  });
</script>