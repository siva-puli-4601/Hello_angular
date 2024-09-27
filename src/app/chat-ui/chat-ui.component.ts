import { Component, Renderer2 } from '@angular/core';
import { DataService } from '../data.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatSession {
  date: Date;
  messages: Message[];
}

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})

export class ChatUiComponent {

  userInput: string = '';  // For two-way binding to textarea input
  previousChats: ChatSession[] = [];  // Stores previous chats
  currentChat: ChatSession = { date: new Date(), messages: [] };  // Current chat session
  isDarkTheme: boolean = false;  // Toggle between dark and light themes

  constructor(private renderer: Renderer2, private ser: DataService) {
    // Load previous chats from localStorage when the component is initialized
    const storedChats = localStorage.getItem('previousChats');
    if (storedChats) {
      this.previousChats = JSON.parse(storedChats);
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark' ? true : false;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark-theme');
    }
  }

  // Sends the user's message and handles bot's response
  sendMessage() {
    const data = this.userInput;
    if (data.trim()) {
      // Add the user's message to the current chat
      this.currentChat.messages.push({ text: data, sender: 'user' });
  
      // Simulate a delay for the bot's response
      setTimeout(() => {
        const body = { "message": data };
        console.log(body);
  
        // Send the message to the API via DataService
        this.ser.postApi("chatbot", body).subscribe((response: any) => {
          // Add bot response to the chat
          this.currentChat.messages.push({ text: response.message, sender: 'bot' });
        }, (err: any) => {
          console.log("Failed to get data", err.message);
          // Handle API failure with an error message from the bot
          this.currentChat.messages.push({ text: "Sorry, I couldn't respond.", sender: 'bot' });
        });
  
      }, 1000);  // Adjust delay time for response simulation
  
      // Clear the input after sending
      this.userInput = '';  // Reset the userInput bound to textarea
    }
  }
  

  // Save the current chat and reset for a new session
  saveChat() {
    if (this.currentChat.messages.length) {
      this.previousChats.push({ ...this.currentChat });
      this.currentChat = { date: new Date(), messages: [] };
      // Save previous chats to localStorage
      localStorage.setItem('previousChats', JSON.stringify(this.previousChats));
    }
  }

  // Load a previous chat into the current chat window
  loadChat(index: number) {
    this.currentChat = this.previousChats[index];
  }

  // Toggle between dark and light themes
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
